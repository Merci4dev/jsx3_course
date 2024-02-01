# TypeScript Configuration
===========================

Initialization and Configuration to implement jest for unit testing in  Typescript (commonJS, EMAscript)

1. Initializacion
    npm init -y
    tsc --init


2. Required Dependencies
    npm i @types/jest jest ts-jest typescript @types/babel__generator


3. Create a "jest.config.js" file and pate inside:
    module.exports = { preset: 'ts-jest', testEnvironment: 'node' };


4. Into the "tsconfig.json" file set this configurations at the en of the file:
    "include": [
        "src/**/*",
        "tests/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts",
        "**/*.test.ts"
    ]


5. uncomment the lines at the "tsconfig.json" file and complete it with:
   "rootDir": "./src", 
   "outDir": "./build",
   "alwaysStrict": true, 
    "noUnusedLocals": true, 
    "noUnusedParameters": true, 
    "noImplicitReturns": true,  


6. Run the test with:
    npm test
    npx jest  


Note: if you have some problem with the some hanging test run this command to clean the jest memory:
    npx jest --clearCache