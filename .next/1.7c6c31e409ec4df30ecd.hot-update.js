webpackHotUpdate(1,{

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__(450);

var _document2 = _interopRequireDefault(_document);

var _server = __webpack_require__(233);

var _server2 = _interopRequireDefault(_server);

var _cssColorFunction = __webpack_require__(310);

var _cssColorFunction2 = _interopRequireDefault(_cssColorFunction);

var _colors = __webpack_require__(574);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matt/development/months/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matt/development/months/pages/_document.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/MTRjNzU0NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ3dCOzs7O0FBQ3hCOzs7O0FBQ0E7Ozs7QUFDWTs7Ozs7Ozs7O0lBRUU7Ozs7Ozs7Ozs7OzZCQVFqQjs2QkFDQzs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNHOztvQkFBRDtzQkFDRTtBQURGO0FBQUEsaURBQ1EsU0FBUTtvQkFBZDtzQkFDQTtBQURBO2tEQUNNLE1BQUssWUFBVyxTQUFRO29CQUE5QjtzQkFDQTtBQURBOzBCQUNBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsd0RBR1csaUJBQU8sd0NBQ0csMkJBQU0sbUJBQWlCLGlCQUFPLElBSm5ELDJEQUtxQiwyQkFBTSxtQkFBaUIsaUJBQU8sSUFMbkQsa0RBTVcsaUJBQU8sd0NBQ0csMkJBQU0sbUJBQWlCLGlCQUFPLElBUG5ELDJEQVFxQiwyQkFBTSxtQkFBaUIsaUJBQU8sSUFSbkQsa0RBU1csaUJBQU8sd0NBQ0csMkJBQU0sbUJBQWlCLGlCQUFPLElBVm5ELDJEQVdxQiwyQkFBTSxtQkFBaUIsaUJBQU8sSUFYbkQsa0RBWVcsaUJBQU8sd0NBQ0csMkJBQU0sbUJBQWlCLGlCQUFPLElBYm5ELDJEQWNxQiwyQkFBTSxtQkFBaUIsaUJBQU8sSUFkbkQsa0RBZVcsaUJBQU8sd0NBQ0csMkJBQU0sbUJBQWlCLGlCQUFPLElBaEJuRCwyREFpQnFCLDJCQUFNLG1CQUFpQixpQkFBTyxJQWpCbkQsbUVBbUJjLGlCQUFPLHFDQUNQLGlCQUFPLG9DQUNSLGlCQUFPLHdDQUNGLGlCQUFPLFlBOEIzQjs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNHOztvQkFBRDtzQkFDQTtBQURBO0FBQUEsMEJBQ0M7O29CQUFEO3NCQUlOO0FBSk07QUFBQTs7OzswQ0FsRWlDO1VBQUE7O3dCQUNqQjtVQUFkO1VBQU0sbUJBQ2I7O1VBQU0sU0FDTjthQUFPLEVBQUUsTUFBRixNQUFRLE1BQVIsTUFBYyxRQUN0Qjs7Ozs7QUFMcUM7O2tCQUFuQixXIiwiZmlsZSI6IjEuN2M2YzMxZTQwOWVjNGRmMzBlY2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJztcbmltcG9ydCBjb2xvciBmcm9tICdjc3MtY29sb3ItZnVuY3Rpb24nO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9zdHlsZXMvY29sb3JzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyByZW5kZXJQYWdlIH0pIHtcbiAgICBjb25zdCB7aHRtbCwgaGVhZH0gPSByZW5kZXJQYWdlKClcbiAgICBjb25zdCBzdHlsZXMgPSBmbHVzaCgpXG4gICAgcmV0dXJuIHsgaHRtbCwgaGVhZCwgc3R5bGVzIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgPGh0bWw+XG4gICAgICAgPEhlYWQ+XG4gICAgICAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIiAvPlxuICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgIDpyb290IHtcblxuICAgICAgICAgICAgIC0tYTogJHtjb2xvcnMuYX07XG4gICAgICAgICAgICAgLS1hLW11dGVkLW9uZTogJHtjb2xvci5jb252ZXJ0KGBjb2xvcigke2NvbG9ycy5hfSBsaWdodG5lc3MoKyA1JSkpYCl9O1xuICAgICAgICAgICAgIC0tYS1tdXRlZC10d286ICR7Y29sb3IuY29udmVydChgY29sb3IoJHtjb2xvcnMuYX0gbGlnaHRuZXNzKCsgMjAlKSlgKX07XG4gICAgICAgICAgICAgLS1iOiAke2NvbG9ycy5ifTtcbiAgICAgICAgICAgICAtLWItbXV0ZWQtb25lOiAke2NvbG9yLmNvbnZlcnQoYGNvbG9yKCR7Y29sb3JzLmJ9IGxpZ2h0bmVzcygrIDUlKSlgKX07XG4gICAgICAgICAgICAgLS1iLW11dGVkLXR3bzogJHtjb2xvci5jb252ZXJ0KGBjb2xvcigke2NvbG9ycy5ifSBsaWdodG5lc3MoKyAyMCUpKWApfTtcbiAgICAgICAgICAgICAtLWM6ICR7Y29sb3JzLmN9O1xuICAgICAgICAgICAgIC0tYy1tdXRlZC1vbmU6ICR7Y29sb3IuY29udmVydChgY29sb3IoJHtjb2xvcnMuY30gbGlnaHRuZXNzKCsgNSUpKWApfTtcbiAgICAgICAgICAgICAtLWMtbXV0ZWQtdHdvOiAke2NvbG9yLmNvbnZlcnQoYGNvbG9yKCR7Y29sb3JzLmN9IGxpZ2h0bmVzcygrIDIwJSkpYCl9O1xuICAgICAgICAgICAgIC0tZDogJHtjb2xvcnMuZH07XG4gICAgICAgICAgICAgLS1kLW11dGVkLW9uZTogJHtjb2xvci5jb252ZXJ0KGBjb2xvcigke2NvbG9ycy5kfSBsaWdodG5lc3MoKyA1JSkpYCl9O1xuICAgICAgICAgICAgIC0tZC1tdXRlZC10d286ICR7Y29sb3IuY29udmVydChgY29sb3IoJHtjb2xvcnMuZH0gbGlnaHRuZXNzKCsgMjAlKSlgKX07XG4gICAgICAgICAgICAgLS1lOiAke2NvbG9ycy5lfTtcbiAgICAgICAgICAgICAtLWUtbXV0ZWQtb25lOiAke2NvbG9yLmNvbnZlcnQoYGNvbG9yKCR7Y29sb3JzLmV9IGxpZ2h0bmVzcygrIDUlKSlgKX07XG4gICAgICAgICAgICAgLS1lLW11dGVkLXR3bzogJHtjb2xvci5jb252ZXJ0KGBjb2xvcigke2NvbG9ycy5lfSBsaWdodG5lc3MoKyAyMCUpKWApfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLS13aGl0ZTogJHtjb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgLS1ibGFjazogJHtjb2xvcnMuYmxhY2t9O1xuICAgICAgICAgICAgLS1ncmF5OiAke2NvbG9ycy5ncmF5fTtcbiAgICAgICAgICAgIC0tc29mdFdoaXRlOiAke2NvbG9ycy5zb2Z0V2hpdGV9O1xuXG4gICAgICAgICAgICAtLWZvbnRzOiAtYXBwbGUtc3lzdGVtLFxuICAgICAgICAgICAgICAgICAgICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICAgICAgICAgICAgICAgICAgICBSb2JvdG8sXG4gICAgICAgICAgICAgICAgICAgICAgT3h5Z2VuLVNhbnMsXG4gICAgICAgICAgICAgICAgICAgICAgVWJ1bnR1LFxuICAgICAgICAgICAgICAgICAgICAgIENhbnRhcmVsbCxcbiAgICAgICAgICAgICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgLS1mb250LXNpemU6IDE4cHg7XG5cbiAgICAgICAgICAgIC0td2lkdGg6IDQ1cmVtO1xuICAgICAgICAgICAgLS13aWR0aC1zOiAzMHJlbTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgICosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xuICAgICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cyk7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc29mdFdoaXRlKTtcbiAgICAgICAgICB9YH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgIDwvSGVhZD5cbiAgICAgICA8Ym9keT5cbiAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgIDwvYm9keT5cbiAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2RvY3VtZW50LmpzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==