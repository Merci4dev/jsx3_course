# JavaScript Configuration
===========================

*git clone*
- https://github.com/Merci4dev/jsx3_course.git


## Initialization and Configuration to implement jest for unit testing in commonJS and EMAscript

1. *Initializacion*
    - npm init -y


2. *Required Dependencies*
    - npm i @babel/preset-env jest

    You can use this second options too:
    - npm install --save-dev jest @babel/core @babel/preset-env @babel/register babel-jest


3. *Create a ".babelrc" file and pate inside*
    - {
        "presets": ["@babel/preset-env"]
     }


4. *Into the json file set this configurations to wacht the tests continuously*
    - "scripts": {
        "test": "jest --watchAll --silent"
      },


5. *Run the test with*
    - npx jest  
    - npm test


Note: if you have some problem with the some hanging test run this command to clean the jest memory:

- npx jest --clearCache