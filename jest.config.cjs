module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  testMatch: [
    "<rootDir>/src/components/**/*.(test|spec).tsx", // Matches all test files in components folder
    "<rootDir>/src/pages/**/*.(test|spec).tsx", // Matches all test files in pages folder
  ],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    // "^@mocks/(.*)$": "<rootDir>/src/__mocks__/$1",
  },
};
