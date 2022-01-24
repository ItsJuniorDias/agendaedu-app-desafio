module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['src/', 'node_modules/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/assets/**',
    '!src/database/**',
    '!src/routes/**',
    '!src/constants/**',
    '!src/contexts/**',
  ],
};
