module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // setupFiles: ['jest-canvas-mock'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ["<rootDir>/src"],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": 'babel-jest',
  },
  transformIgnorePatterns: [
    '!node_modules/'
  ]
};
