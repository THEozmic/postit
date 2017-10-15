**STATUS**

[![Build Status](https://travis-ci.org/THEozmic/postit.svg?branch=master)](https://travis-ci.org/THEozmic/postit) [![Coverage Status](https://coveralls.io/repos/github/THEozmic/postit/badge.svg)](https://coveralls.io/github/THEozmic/postit) [![Code Climate](https://codeclimate.com/github/THEozmic/postit/badges/gpa.svg)](https://codeclimate.com/github/THEozmic/postit)

**POSTIT**
> - A simple web application that lets users send messages as broadcast to friends and colleagues
> - https://postit-michael.herokuapp.com/
> - Template: https://theozmic.github.io/Postit-template/index.html

**TECH STACK**
> - Uses `React and Redux` as the frontend framework
> - Uses `SASS` for styling and `Webpack` as the bundler
> - The Backend is built on top of `Node` with `Express` and uses `Sequelize ORM` to communicate with the `Postgres DB`
> - Other stuff worth mentioning is the use of `JWT` for authentication, `es6`, `Babel` for transpiling and `Eslint` with `airbnb-base` rules for style checking.

**SYSTEM DEPENDENCIES**
> - Node
> - Postgres

**TESTING**
This app uses `Mocha` and `Chai-Http` for testing on the backend and `Jest` for the frontend
> - Run `npm i mocha -g` and `npm i nyc -g` before running `npm test` to run the backend tests
> - Run `npm i jest-cli -g` before running `jest` to run the frontend tests

**STRUCTURE**
> - /template/ : contains HTML/CSS/BOOTSTRAP Template files
> - /client/ : contains React/Redux implementation of the template
> - /server/ : contains express/postgres implementation of the backend

**INSTALLATION**
> - Clone the repo by running `git clone https://github.com/THEozmic/postit.git`
> - Run `npm install` to install dependencies and dev-dependencies
> - Setup Postgres. [Learn How](https://www.tutorialspoint.com/postgresql/postgresql_environment.htm)
> - Setup your db according to settings in `server/config/config.json`
> - Run `$ sequelize db:migrate` to migrate your db files
> - Run `npm start` to start server and `npm run build` to build the app

**API DOCS**
> - http://docs.postitmichael.apiary.io

**FAQs**
> - Is this app open-source?
  __Ans:__ Yes, you can contribute to the development of this app by raising PRs
> - What language is used to build this app?
  __Ans:__ Javascript is used to build both frontend and backend.
> - Who can contribute?
  __Ans:__ Anyone willing to contribute to open-source and is interested in this project and is ready to keep to the standard.
> - Any license?
  __Ans:__ Yup! This app and all it's content is under the MIT License, which means anyone can use it, for profit or just fun.