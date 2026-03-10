module.exports = function (grunt) {
  grunt.initConfig({
    stryker: {
      withoutConfigFile: {
        files: {
          src: ['sampleProject/src/**/*.js'],
          tests: ['sampleProject/test/**/*.js'],
        },
        mutate: {
          src: ['sampleProject/src/**/*.js'],
        },
        options: {
          testRunner: 'karma',
          logLevel: 'info',
          fileLogLevel: 'warn',
          concurrency: 2,
          tempDirName: '.stryker-tmp-2',
          karma: {
            config: {
              files: ['sampleProject/**'],
              plugins: [
                require.resolve('karma-jasmine'),
                require.resolve('karma-chrome-launcher'),
              ],
            },
          },
          plugins: ['@d-es-ign/stryker-js-karma-runner'],
        },
      },
      withConfigFile: {
        options: {
          configFile: './stryker.grunt.conf.js',
        },
      },
    },
  });

  require('@d-es-ign/stryker-js-grunt-stryker/tasks/stryker')(grunt);
  grunt.registerTask('test', ['stryker']);
};
