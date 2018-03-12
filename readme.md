## Webpack react minimal boilerplate

> Minimal webpack and react boilerplate using latest version of react and babel as well as jest and enzyme for more details about technologies used. [click](#technologies-used) 
> live reload ;)

### Project structure

````
build/
|- index.html _________________________________ # application html 
src/
|- index.jsx __________________________________ # Application entry point
|- App.jsx ____________________________________ # Application init
|  |- Components/
|    |- hello-world/ 
|       |- index.jsx _________________________ # Sample component
````




### Table of contents

[Install](#install)

[Run development](#run-development)

[Unit testing](#unit-testing)

[Bundling](#bundling)

[Technologies used](#technologies-used)

#### Install

* `npm install` or `yarn` to install all dependency.

#### Run development

* Run `yarn start`

#### Unit testing

> Will run watch all and coverage

* `yarn test`

#### Bundling

* Run `yarn build`

#### Technologies used

* [Webpack 4](https://github.com/webpack/webpack) [ Using the new development mood ]
* [Babel 7](https://github.com/babel/babel) [ transforming JSX and es6 ]
* [React](https://github.com/facebook/react) `16.3` for the benefit of Context API.
* [Lodash](https://github.com/lodash/lodash)
* [Jest](https://github.com/facebook/jest) [ Unit test]
* [Enzyme](http://airbnb.io/enzyme/) for UI testing.
* [Eslint](https://github.com/eslint/eslint/) with airbnb config
* [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
* [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader)


