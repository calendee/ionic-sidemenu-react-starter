const path = require('path');
console.log('rootDir = ', path.join(__dirname, '../src'));

module.exports = {
  rootDir: path.join(__dirname, '../src'),
  runner: 'jest-runner-eslint',
  displayName: 'lint:watch',
  testMatch: ['<rootDir>/**/*.{ts,tsx}'],
};
