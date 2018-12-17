module.exports = {
  cacheDirectory: '.cache/jest',
  clearMocks: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(md)$': '<rootDir>/__mocks__/htmlMock.js',
  },
  projects: [
    '<rootDir>',
    '<rootDir>/examples/cra-kitchen-sink',
    '<rootDir>/examples/html-kitchen-sink',
    '<rootDir>/examples/riot-kitchen-sink',
    '<rootDir>/examples/svelte-kitchen-sink',
    '<rootDir>/examples/vue-kitchen-sink',
    '<rootDir>/examples/angular-cli',
    '<rootDir>/examples/preact-kitchen-sink',
  ],
  roots: [
    '<rootDir>/addons',
    '<rootDir>/app',
    '<rootDir>/lib',
    '<rootDir>/examples/official-storybook',
  ],
  snapshotSerializers: ['@emotion/snapshot-serializer'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/scripts/babel-jest.js',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest',
  },
  testMatch: ['**/__tests__/**/*.(j|t)s?(x)', '**/?(*.)+(spec|test).(j|t)s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    'addon-jest.test.js',
    '/cli/test/',
    '/examples/*/src/test.*',
    '/examples/*/src/*.test.*',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    'addons/**/*.{js,jsx,ts,tsx}',
    '!**/cli/test/**',
    '!**/dist/**',
    '!**/generators/**',
    '!app/**/__mocks__ /',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupTestFrameworkScriptFile: './scripts/jest.init.js',
  setupFiles: ['raf/polyfill'],
  testURL: 'http://localhost',
  modulePathIgnorePatterns: ['/dist/.*/__mocks__/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};
