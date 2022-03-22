const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testMatch: [
    '**/test/**/*test.ts',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  // 方法1:
  // moduleNameMapper: { '^@C/(.*)$': '<rootDir>/a/b/c/$1', }
  // 方法2: 楽だけど、jsoncが使えないのシビーな。tsconfigそのままparseする
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
};
