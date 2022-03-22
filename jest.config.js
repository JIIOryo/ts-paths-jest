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
  // moduleNameMapper: { '^@C/(.*)$': '<rootDir>/a/b/c/$1', }
  // jsoncが使えないのシビーな
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/src/' }),
};
