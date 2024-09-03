// Import the Config type from Jest's types to provide type-checking for the config object.
import type { Config } from '@jest/types';

// Define your Jest configuration with a typed object.
const config: Config.InitialOptions = {
  preset: "ts-jest", // Use ts-jest preset, which includes TypeScript support and jsdom environment.
  testEnvironment: "jsdom", // Specify the testing environment to simulate a browser (DOM).
  transform: {
    // Transform files matching the .ts or .tsx extension using ts-jest.
    // This allows TypeScript files to be compiled for tests.
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: "tsconfig.jest.json", // Specify the TypeScript config specifically for Jest.
      },
    ],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',  // Map @/ to the root directory
  },
  setupFilesAfterEnv: ["./jest.config.ts"], // List of scripts to run after the test framework is installed in the environment.
}

// Export the configuration to be used by Jest.
export default config;