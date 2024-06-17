module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };
  