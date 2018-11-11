# TemplateWebApp
## Description
Basic template of a 3-tier web app with a client in TypeScript, a service using .Net Core Web API and a database with Entity Framework as an ORM.

## Goal
Creating a website template from scratch with the minimum amout of dependency. I should understand everything going on under the hood, no magic (create-react-app, heavy handed framework like Vue, 1000 lines of webpack.config.js, etc.)

## Features
### Client
- No webpack
- TSC only
- Tests
- TypeScript
- Compile to ES2015
- Native ES2015 modules
- Support evergreen browser only (Chrome, Firefox, Edge and Safari)

### Service
TODO

### Database
TODO

## TODO
- [x] Easy to use in Visual Studio 2017
- [ ] Easy to use in Visual Studio Code
- [x] ES2015 module
- [x] TypeScript compiler only
- [ ] Entity framework
- [ ] Add fallback when the browser does not support Module
- [ ] Add fallback when the browser does not have JS enabled
- [ ] Add fallback for old version of IE
- [ ] Add a test project (https://mochajs.org/ and server)
- [ ] Add a POCO project
- [ ] Split the Rest API and the TS Client in 2 projects
- [ ] Create an object model in TS (WebPage, SpecificPage, WebComponent, Render(), ...)
- [ ] Add a .tsconfig with everything strict
- [ ] Split generated .map and .js files in differents folders
