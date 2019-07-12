module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  roots: ['<rootDir>/challenges'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
};
