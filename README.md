**STATUS**
>
[![Build Status](https://travis-ci.org/THEozmic/postit.svg?branch=master)](https://travis-ci.org/THEozmic/postit)

[![Coverage Status](https://coveralls.io/repos/github/THEozmic/postit/badge.svg)](https://coveralls.io/github/THEozmic/postit)

[![Code Climate](https://codeclimate.com/github/THEozmic/postit/badges/gpa.svg)](https://codeclimate.com/github/THEozmic/postit)

**POSTIT**
> - A simple web application that lets users send messages as broadcast to friends and colleagues

**TECH STACK**
> - Front-end: React/Redux + SASS
> - Back-end: Node/Express + Sequelize/Postgres
> - In-between: JWT, es6, Babel, Webpack, eslint, Mocha/Chai + chai-http

**STRUCTURE**
> - template: contains HTML/CSS/BOOTSTRAP Template files
> - client: contains React/Redux implementation of the frontend
> - server: container express/postgres implementation of the backend

**INSTALLATION**
> - Clone the repo
> - Run `npm install` to install dependencies/dev-dependencies
> - Setup Postgres
> - setup your db according to settings in `server/config/config.json`
> - then run `$ sequelize db:migrate`
> - Run `npm run exec` to start server
