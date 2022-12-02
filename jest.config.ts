import type { Config } from 'jest';
/** @type {import('ts-jest').JestConfigWithTsJest} */

const IGNORED_MODULES = [''];

const config: Config = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  clearMocks: true,
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '@styles/(.*)': '<rootDir>/styles/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@pages-content/(.*)': '<rootDir>/pages-content/$1',
    '@shared/(.*)': '<rootDir>/shared/$1',
    '@components/(.*)': '<rootDir>/components/$1',
    '@store/(.*)': '<rootDir>/store/$1',
    '@public/(.*)': '<rootDir>/public/$1',
    '@constants/(.*)': '<rootDir>/constants/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/build/',
    '<rootDir>/docs/',
    '<rootDir>/.husky/',
  ],
  // transformIgnorePatterns: [`/node_modules/(?!${IGNORED_MODULES.join('|')})`],
};

module.exports = config;
