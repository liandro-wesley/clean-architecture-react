module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '**/*.d.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['./node_modules'],
  moduleNameMapper: {
    '@data/(.*)': '<rootDir>/src/data/$1',
    '@protocols(.*)': '<rootDir>/src/data/protocols/$1',
    '@infra(.*)': '<rootDir>/src/infra/$1',
    '@domain/(.*)': '<rootDir>/src/domain/$1',
    '@errors/(.*)': '<rootDir>/src/domain/errors/$1',
    '@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '\\.scss$': 'identity-obj-proxy' // returns a dummy {}
  },
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest'
  }
}
