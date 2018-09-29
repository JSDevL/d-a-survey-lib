var compilerOptions = Object.assign(
  require('./tsconfig.json').compilerOptions,
  require('./projects/survey/tsconfig.lib.json').compilerOptions,
  require('./src/tsconfig.spec.json').compilerOptions
);

compilerOptions.module = 'CommonJs';

module.exports = function (wallaby) {
  return {
    files: [
      'tsconfig.json',
      'package.json',
      './src/setup-jest.ts',
      "src/**/*.ts",
      "!src/**/*spec.ts",
      "projects/survey/src/lib/**/*.ts",
      "!projects/survey/src/lib/**/*spec.ts",
    ],

    tests: [
      {pattern: 'src/**/*spec.ts'},
      {pattern: 'projects/survey/src/lib/**/*spec.ts'},
    ],

    env: {
      //Jest tests runs on node, not on a browser!
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({module: 'commonjs'})
    },

    debug: true
  };
};
