'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

var _cssColorFunction = require('css-color-function');

var _cssColorFunction2 = _interopRequireDefault(_cssColorFunction);

var _colors = require('../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matt/development/months/pages/_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement('meta', { charset: 'UTF-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, '\n           :root {\n\n             --a: ' + _colors2.default.a + ';\n             --a-muted-one: ' + _cssColorFunction2.default.convert('color(' + _colors2.default.a + ' lightness(+ 5%))') + ';\n             --a-muted-two: ' + _cssColorFunction2.default.convert('color(' + _colors2.default.a + ' lightness(+ 20%))') + ';\n             --b: ' + _colors2.default.b + ';\n             --b-muted-one: ' + _cssColorFunction2.default.convert('color(' + _colors2.default.b + ' lightness(+ 5%))') + ';\n             --b-muted-two: ' + _cssColorFunction2.default.convert('color(' + _colors2.default.b + ' lightness(+ 20%))') + ';\n             --c: ' + _colors2.default.c + ';\n             --c-muted-one: ' + _cssColorFunction2.default.convert('color(' + _colors2.default.c + ' lightness(+ 5%))') + ';\n             --c-muted-two: ' + _cssColorFunction2.default.convert('color(' + _colors2.default.c + ' lightness(+ 20%))') + ';\n             --d: ' + _colors2.default.d + ';\n             --d-muted-one: ' + _cssColorFunction2.default.convert('color(' + _colors2.default.d + ' lightness(+ 5%))') + ';\n             --d-muted-two: ' + _cssColorFunction2.default.convert('color(' + _colors2.default.d + ' lightness(+ 20%))') + ';\n             --e: ' + _colors2.default.e + ';\n             --e-muted-one: ' + _cssColorFunction2.default.convert('color(' + _colors2.default.e + ' lightness(+ 5%))') + ';\n             --e-muted-two: ' + _cssColorFunction2.default.convert('color(' + _colors2.default.e + ' lightness(+ 20%))') + ';\n            \n            --white: ' + _colors2.default.white + ';\n            --black: ' + _colors2.default.black + ';\n            --gray: ' + _colors2.default.gray + ';\n            --softWhite: ' + _colors2.default.softWhite + ';\n\n            --fonts: -apple-system,\n                      BlinkMacSystemFont,\n                      Roboto,\n                      Oxygen-Sans,\n                      Ubuntu,\n                      Cantarell,\n                      sans-serif;\n            --font-size: 18px;\n\n            --width: 45rem;\n            --width-s: 30rem;\n          }\n\n\n          *, *::after, *::before {\n            box-sizing: inherit;\n            margin: 0;\n            padding: 0;\n          }\n          html {\n            box-sizing: border-box;\n            font-family: var(--fonts);\n            font-size: var(--font-size);\n            color: var(--black);\n            background-color: var(--softWhite);\n          }')), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head;

      var styles = (0, _server2.default)();
      return { html: html, head: head, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;