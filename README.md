# JSON Visual Editor

> Web based JSON Editor powered by React.
> https://ogaoga.github.io/json-visual-editor/

[![Build Status][travis-image]][travis-url]

![json-visual-editor](resources/json-visual-editor.png?raw=true)

## To develop

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
$ git clone https://github.com/ogaoga/json-visual-editor.git
```

Then install the dependencies:

```
$ npm install
```

Install webpack and the development server:

```
$ npm install webpack-dev-server webpack -g
```

You can simply run webpack build using this command: 

```
$ npm run build
```

If you want to run with webpack-dev-server simply run this command: 

```
$ npm run dev
```

Open the web browser to `http://localhost:8080/`

If you want to test simply run this command: 

```
$ npm test
```

Please contribute to the project if you think this can be done better in anyway even for this README :)

## See also

* [React + ES6 + Webpack で JSON Visual Editor を作ってみる - Qiita](http://qiita.com/ogaoga/items/1dae5586601e6900c3f1)

## License

Copyright (c) 2016 ogaoga.org
Licensed under the [MIT License](LICENSE).

[travis-image]: https://img.shields.io/travis/rakuten-frontend/bower-browser/master.svg?style=flat
[travis-url]: https://travis-ci.org/rakuten-frontend/bower-browser

## ToDo

- [ ] Show level of depth.
- [ ] Cache to localStorage.
- [ ] Timestamp translation.
- [ ] Implement test cases.
- [ ] Edit feature.
- [ ] Chrome Web Store app build.
- [ ] React Native
- [ ] Insert version number.
- [ ] bug: Height of &lt;textarea&gt; is not enough in Firefox.
