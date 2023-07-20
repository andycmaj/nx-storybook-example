/* eslint-disable */
export default {
  displayName: 'components',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(mjs|js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      {
        presets: ['@nx/react/babel'],
      },
    ],
    '^.+\\.mjs$': [
      'babel-jest',
      {
        presets: ['@nx/react/babel'],
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!\@ag-grid-community/)'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs'],
  coverageDirectory: '../../coverage/libs/components',
};
