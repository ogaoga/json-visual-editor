# JSON Visual Editor

⚠️⚠️⚠️ Now work in progress for version 2 ⚠️⚠️⚠️

> Web based JSON Editor powered by React.
> https://ogaoga.github.io/json-visual-editor/

![json-visual-editor](resources/json-visual-editor.png?raw=true)

![](https://github.com/ogaoga/json-visual-editor/workflows/test.yml/badge.svg)

## To develop

This project is based on [Create React App](https://reactjs.org/docs/create-a-new-react-app.html). Please read the document to develop.

Please contribute to the project if you think this can be done better in anyway even for this README :)

### `master`

Release branch. Merge stable codes from onlyh `develop` branch. After merging via a pull request from `develop`, automatically deploy to [the GitHub page](https://ogaoga.github.io/json-visual-editor/).

### `develop`

Develop branch. Topic branches are merged into the branch via pull request or directory pushed.

## See also

### for 0.x

- [React + ES6 + Webpack で JSON Visual Editor を作ってみる - Qiita](http://qiita.com/ogaoga/items/1dae5586601e6900c3f1)
- [React + ES6 + Webpack で JSON Visual Editor を作ってみる（Redux 導入編） - Qiita](http://qiita.com/ogaoga/items/e3f7e6d1d3aeb61351f5)

## License

Copyright (c) 2016 - 2020 ogaoga.org
Licensed under the [MIT License](LICENSE).

[travis-image]: https://img.shields.io/travis/ogaoga/json-visual-editor/develop.svg?style=flat
[travis-url]: https://travis-ci.org/ogaoga/json-visual-editor

## ToDo

### for version 2.0.0

- [ ] Fix eslint error on build
- [ ] Fix some remaining issues
- [x] Setup GitHub Acitons
- [x] Replace the environment with create-react-app
- [x] Use latest packages to fix vulnerability
- [x] Use TypeScript
- [x] Use Redux Toolkit
- [x] Use Prettier
- [x] Translate test codes

### issues and features to be implemented

- [ ] Fix a bug of drop area indicator.
- [ ] Show level of depth.
- [ ] Timestamp translation.
- [ ] Edit feature.
- [ ] VS Code Extension.
- [ ] Insert version number.
- [ ] bug: Height of &lt;textarea&gt; is not enough in Firefox.
