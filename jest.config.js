// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transformIgnorePatterns: [`node_modules`],
  coverageDirectory: "coverage",
  collectCoverage: false,
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.json",
      isolatedModules: true,
    },
  },
  coveragePathIgnorePatterns: [
    "src/serviceWorker.ts",
    "setupTests.ts",
    "react-app-env.d.ts",
    "__snapshots__/*",
  ],
  collectCoverageFrom: ["src/**"],
};
