import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { glob } from 'glob';

const DIST_JS_GLOB = 'packages/*/dist/src/**/*.js';
const FORBIDDEN_SCOPE_REGEX =
  /@stryker-mutator\/(api|util|test-helpers)(?:\/[^'"\s]*)?/g;

const files = await glob(DIST_JS_GLOB, { nodir: true });

if (files.length === 0) {
  console.error(
    `No built files found for "${DIST_JS_GLOB}". Run "pnpm run build" first.`,
  );
  process.exit(1);
}

const violations = [];
for (const fileName of files) {
  const content = await readFile(fileName, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    FORBIDDEN_SCOPE_REGEX.lastIndex = 0;
    let match = FORBIDDEN_SCOPE_REGEX.exec(line);
    while (match) {
      violations.push({
        file: fileName,
        line: index + 1,
        importPath: match[0],
      });
      match = FORBIDDEN_SCOPE_REGEX.exec(line);
    }
  });
}

if (violations.length > 0) {
  console.error('Found forbidden @stryker-mutator/* imports in dist output:');
  for (const violation of violations) {
    console.error(
      `- ${path.normalize(violation.file)}:${violation.line} -> ${violation.importPath}`,
    );
  }
  process.exit(1);
}

console.log(
  `Checked ${files.length} dist files: no forbidden @stryker-mutator/* runtime imports found.`,
);
