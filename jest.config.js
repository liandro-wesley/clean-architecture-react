module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transformIgnorePatterns: ['./node_modules'],
  modulePathIgnorePatterns: [
    'src/data/protocols/*',
    'src/data/usecases/*',
    'src/domain/models/*',
    'src/domain/usecases/*'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
