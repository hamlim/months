"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/matt/development/months/components/day.js";


var getMonthNameFromMonth = function getMonthNameFromMonth(month) {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
  }
};

var Day = function (_Component) {
  (0, _inherits3.default)(Day, _Component);

  function Day() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Day.__proto__ || (0, _getPrototypeOf2.default)(Day)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _React$createElement;

      var _this$props = _this.props,
          day = _this$props.day,
          month = _this$props.month,
          _onClick = _this$props.onClick,
          _onKeyDown = _this$props.onKeyDown;

      return _react2.default.createElement("div", (_React$createElement = {
        id: "month-" + month + "-day-" + day,
        role: "button",
        className: "day",
        "data-id": day,
        "data-month": month,
        onClick: function onClick(_) {
          return _onClick();
        },
        onKeyDown: function onKeyDown(e) {
          return _onKeyDown(e);
        }
      }, (0, _defineProperty3.default)(_React$createElement, "className", "day"), (0, _defineProperty3.default)(_React$createElement, "data-jsx", 3593969410), (0, _defineProperty3.default)(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 36
      }), _React$createElement), _react2.default.createElement("h3", { className: "day__title", "data-jsx": 3593969410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, day, " - ", _react2.default.createElement("span", { className: "day__month", "data-jsx": 3593969410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, getMonthNameFromMonth(month))), _react2.default.createElement(_style2.default, {
        styleId: 3593969410,
        css: ".day[data-jsx=\"3593969410\"]:not(.is-offset) {height: 100vh;border: solid var(--gray);border-width: 0 3px 0 0;padding: 1em;}.highlight {outline: solid var(--a) 5px;}.is-current .day__title[data-jsx=\"3593969410\"] {color: var(--b);}@media screen and (min-width: 1200px) {.day.day.day[data-jsx=\"3593969410\"] {padding: .5em;height: auto;border-width: 1px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDb0IsQUFDWSw2Q0FDTixjQUNZLDBCQUNGLHdCQUVYLGFBQ2QsQ0FFb0IsWUFDUyw0QkFDN0IsQ0FDaUMsZ0RBQ2hCLGdCQUNqQixDQUVzQyx1Q0FDdkIscUNBQ0UsY0FDRCxhQUNLLGtCQUNuQixDQUNGIiwiZmlsZSI6ImNvbXBvbmVudHMvZGF5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0L2RldmVsb3BtZW50L21vbnRocyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBnZXRNb250aE5hbWVGcm9tTW9udGggPSAobW9udGgpID0+IHtcbiAgc3dpdGNoIChtb250aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBcIkphblwiO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBcIkZlYlwiO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBcIk1hclwiO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBcIkFwclwiO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiBcIk1heVwiO1xuICAgIGNhc2UgNTpcbiAgICAgIHJldHVybiBcIkp1blwiO1xuICAgIGNhc2UgNjpcbiAgICAgIHJldHVybiBcIkp1bFwiO1xuICAgIGNhc2UgNzpcbiAgICAgIHJldHVybiBcIkF1Z1wiO1xuICAgIGNhc2UgODpcbiAgICAgIHJldHVybiBcIlNlcFwiO1xuICAgIGNhc2UgOTpcbiAgICAgIHJldHVybiBcIk9jdFwiO1xuICAgIGNhc2UgMTA6XG4gICAgICByZXR1cm4gXCJOb3ZcIjtcbiAgICBjYXNlIDExOlxuICAgICAgcmV0dXJuIFwiRGVjXCI7XG4gIH1cbn1cblxuY2xhc3MgRGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHtkYXksIG1vbnRoLCBvbkNsaWNrLCBvbktleURvd259ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBpZD17YG1vbnRoLSR7bW9udGh9LWRheS0ke2RheX1gfVxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGF5XCJcbiAgICAgICAgZGF0YS1pZD17ZGF5fVxuICAgICAgICBkYXRhLW1vbnRoPXttb250aH1cbiAgICAgICAgb25DbGljaz17XyA9PiBvbkNsaWNrKCl9XG4gICAgICAgIG9uS2V5RG93bj17ZSA9PiBvbktleURvd24oZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImRheVwiXG4gICAgICA+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJkYXlfX3RpdGxlXCI+e2RheX0gLSA8c3BhbiBjbGFzc05hbWU9XCJkYXlfX21vbnRoXCI+e2dldE1vbnRoTmFtZUZyb21Nb250aChtb250aCl9PC9zcGFuPjwvaDM+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGF5Om5vdCguaXMtb2Zmc2V0KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCB2YXIoLS1ncmF5KTtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAzcHggMCAwO1xuXG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgOmdsb2JhbCguaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICBvdXRsaW5lOiBzb2xpZCB2YXIoLS1hKSA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpnbG9iYWwoLmlzLWN1cnJlbnQpIC5kYXlfX3RpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1iKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgICAgIC5kYXkuZGF5LmRheSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IC41ZW07XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERheTsiXX0= */\n/*@ sourceURL=components/day.js */"
      }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  return Day;
}(_react.Component);

exports.default = Day;