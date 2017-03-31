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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _day = require('./day');

var _day2 = _interopRequireDefault(_day);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matt/development/months/components/calendar.js';


var _class = function (_Component) {
	(0, _inherits3.default)(_class, _Component);

	function _class(props) {
		(0, _classCallCheck3.default)(this, _class);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

		_this.state = {
			events: [],
			reminders: []
		};

		_this.handleDayClick = function (i, mI) {
			console.log(i, mI);
		};

		_this.render = function (_) {
			return _react2.default.createElement('article', { className: 'calendar', 'data-jsx': 1375785902,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, _this.year.map(function (month, monthIndex) {
				return month.map(function (day, index) {
					index += 1;
					if (day === "offset") {
						return _react2.default.createElement('div', {
							className: 'day is-offset',
							key: index,
							'data-id': "offset",
							'data-jsx': 1375785902,
							__source: {
								fileName: _jsxFileName,
								lineNumber: 96
							}
						});
					} else {
						return _react2.default.createElement(_day2.default, {
							day: day,
							month: monthIndex,
							key: monthIndex + '-' + day,
							onClick: function onClick(_) {
								return _this.handleDayClick(day, monthIndex);
							},
							onKeyDown: function onKeyDown(e) {
								(e.key === "Enter" || e.key === "Space") && _this.handleDayClick(day, monthIndex);
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 104
							}
						});
					}
				});
			}), _react2.default.createElement(_style2.default, {
				styleId: 1375785902,
				css: '.calendar[data-jsx="1375785902"] {grid-row: 1 / 2;display: grid;grid-template-columns: 1fr;grid-template-rows: 1fr;overflow-y: scroll;}.day:not(.is-offset) {height: 100vh;border: solid var(--gray);border-width: 0 3px 0 0;padding: 1em;}.is-offset {display: none;}@media screen and (min-width: 600px) {.calendar[data-jsx="1375785902"] {grid-template-rows: 100vh;grid-template-columns: repeat(366, 33.333vw);border-bottom: solid 3px var(--gray);}}@media screen and (min-width: 1200px) {.calendar[data-jsx="1375785902"] {grid-row: 1 / 2;grid-template-columns: repeat(7, 1fr);grid-template-rows: repeat(52, minmax(30px, calc(100vh / 4)));}.day {height: auto;}.is-offset {display: auto;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FsZW5kYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUhrQixBQUNDLGtDQUVPLGdCQUtGLGNBQ2EsMkJBQ0gsd0JBRUwsbUJBQ3BCLENBRThCLHNCQUNmLGNBQ08sMEJBQ0Ysd0JBRVgsYUFDVCxDQUVnQixZQUNOLGNBQ2QsQ0FFeUMsc0NBQ3pCLGtDQUNXLDBCQUN5Qiw2Q0FDZCxxQ0FDaEMsQ0FDRixDQUVzQyx1Q0FDMUIsa0NBRU8sZ0JBRXNCLHNDQUN3Qiw4REFDL0QsQ0FDYyxNQUNBLGFBQ2QsQ0FDZSxZQUNOLGNBQ2QsQ0FDRyIsImZpbGUiOiJjb21wb25lbnRzL2NhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0L2RldmVsb3BtZW50L21vbnRocyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERheSBmcm9tICcuL2RheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gXCJDYWxlbmRhclwiXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgZXZlbnRzOiBbXSxcbiAgICByZW1pbmRlcnM6IFtdXG4gIH1cblxuICBnZXQgeWVhcigpIHtcblx0XHRjb25zdCBjdXJyZW50WWVhciA9IChuZXcgRGF0ZSgpKS5nZXRGdWxsWWVhcigpO1xuXHRcdGxldCB5ZWFyID0gW1tdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdLFtdXTtcblx0XHRmb3IgKGxldCBpID0gMTsgaTw9IDMxOyBpKyspe1xuXHRcdFx0eWVhclswXS5wdXNoKGkpXG5cdFx0fVxuXHRcdGlmIChjdXJyZW50WWVhciAlIDQgPT09IDApIHtcblx0XHRcdGZvciAobGV0IGogPSAxOyBqPD0gMjk7IGorKyl7XG5cdFx0XHRcdHllYXJbMV0ucHVzaChqKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGxldCBrID0gMTsgazw9IDI4OyBrKyspe1xuXHRcdFx0XHR5ZWFyWzFdLnB1c2goaylcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChsZXQgbCA9IDE7IGw8PSAzMTsgbCsrKXtcblx0XHRcdHllYXJbMl0ucHVzaChsKVxuXHRcdH1cblx0XHRmb3IgKGxldCBtID0gMTsgbTw9IDMwOyBtKyspe1xuXHRcdFx0eWVhclszXS5wdXNoKG0pXG5cdFx0fVxuXHRcdGZvciAobGV0IG4gPSAxOyBuPD0gMzE7IG4rKyl7XG5cdFx0XHR5ZWFyWzRdLnB1c2gobilcblx0XHR9XG5cdFx0Zm9yIChsZXQgbyA9IDE7IG88PSAzMDsgbysrKXtcblx0XHRcdHllYXJbNV0ucHVzaChvKVxuXHRcdH1cblx0XHRmb3IgKGxldCBwID0gMTsgcDw9IDMxOyBwKyspe1xuXHRcdFx0eWVhcls2XS5wdXNoKHApXG5cdFx0fVxuXHRcdGZvciAobGV0IHEgPSAxOyBxPD0gMzE7IHErKyl7XG5cdFx0XHR5ZWFyWzddLnB1c2gocSlcblx0XHR9XG5cdFx0Zm9yIChsZXQgciA9IDE7IHI8PSAzMDsgcisrKXtcblx0XHRcdHllYXJbOF0ucHVzaChyKVxuXHRcdH1cblx0XHRmb3IgKGxldCBzID0gMTsgczw9IDMxOyBzKyspe1xuXHRcdFx0eWVhcls5XS5wdXNoKHMpXG5cdFx0fVxuXHRcdGZvciAobGV0IHQgPSAxOyB0PD0gMzA7IHQrKyl7XG5cdFx0XHR5ZWFyWzEwXS5wdXNoKHQpXG5cdFx0fVxuXHRcdGZvciAobGV0IHUgPSAxOyB1PD0gMzE7IHUrKyl7XG5cdFx0XHR5ZWFyWzExXS5wdXNoKHUpXG5cdFx0fVxuXHRcdGxldCBpbml0T2Zmc2V0ID0gbmV3IERhdGUoKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCksIDAsIDApLmdldERheSgpO1xuXHRcdGZvciAobGV0IHggPSAwOyB4PGluaXRPZmZzZXQ7IHgrKyl7XG5cdFx0XHR5ZWFyWzBdLnVuc2hpZnQoJ29mZnNldCcpO1xuXHRcdH1cbiAgICByZXR1cm4geWVhcjtcbiAgfVxuXG4gIGhhbmRsZURheUNsaWNrID0gKGksIG1JKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coaSwgbUkpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0bGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblx0XHRsZXQgY3VycmVudERheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKTtcblx0XHRsZXQgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcblx0XHRjb25zdCBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI21vbnRoLSR7Y3VycmVudE1vbnRofS1kYXktJHtjdXJyZW50RGF5fWApO1xuXHRcdGVsZW0uc2Nyb2xsSW50b1ZpZXcoe1xuXHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCJcblx0XHR9KTtcblx0XHRlbGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWN1cnJlbnQnKTtcblx0XHRlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZ2hsaWdodCcpO1xuXHRcdHdpbmRvdy5zZXRUaW1lb3V0KF8gPT4ge1xuXHRcdFx0XHRlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZ2hsaWdodCcpO1xuXHRcdFx0fSxcblx0XHRcdDE1MDBcblx0XHQpO1xuXHR9XG5cbiAgcmVuZGVyID0gXyA9PiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIj5cblx0XHRcdHsodGhpcy55ZWFyKS5tYXAoKG1vbnRoLCBtb250aEluZGV4KSA9PiB7XG5cdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0bW9udGgubWFwKChkYXksIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRpbmRleCArPSAxO1xuXHRcdFx0XHRcdFx0aWYgKGRheSA9PT0gXCJvZmZzZXRcIikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRheSBpcy1vZmZzZXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtaWQ9e1wib2Zmc2V0XCJ9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8RGF5XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXk9e2RheX1cblx0XHRcdFx0XHRcdFx0XHRcdG1vbnRoPXttb250aEluZGV4fVxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtgJHttb250aEluZGV4fS0ke2RheX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17XyA9PiB0aGlzLmhhbmRsZURheUNsaWNrKGRheSwgbW9udGhJbmRleCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyBlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0KGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiU3BhY2VcIikgJiYgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5oYW5kbGVEYXlDbGljayhkYXksIG1vbnRoSW5kZXgpXG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdH0pfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2FsZW5kYXIge1xuICAgICAgICAgIC8qIHN0eWxpbmcgbmVlZGVkIGZvciBwYXJlbnRzIGxheW91dCAqL1xuICAgICAgICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICAgICAgICAvKiBzZXQgdXAgd2VlayBncmlkICovXG4gICAgICAgICAgLyogb24gbW9iaWxlIHdlIHdhbnQgdG8ganVzdCBoYXZlIGEgZGF5IGxpa2UgYWdlbmRhICovIFxuICAgICAgICAgIC8qIG9uIHRhYmxldCBtYXliZSAzIGRheXMgKi9cbiAgICAgICAgICAvKiBvbiBkZXhrdG9wIGEgZnVsbCB3ZWVrICovXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcblxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpnbG9iYWwoLmRheTpub3QoLmlzLW9mZnNldCkpIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHRcdGJvcmRlcjogc29saWQgdmFyKC0tZ3JheSk7XG5cdFx0XHRcdFx0Ym9yZGVyLXdpZHRoOiAwIDNweCAwIDA7XG5cblx0XHRcdFx0XHRwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cblxuXHRcdFx0XHQ6Z2xvYmFsKC5pcy1vZmZzZXQpIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0XHR9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuY2FsZW5kYXIge1xuXHRcdFx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDM2NiwgMzMuMzMzdncpO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogc29saWQgM3B4IHZhcigtLWdyYXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgIC5jYWxlbmRhciB7XG4gICAgICAgICAgICAvKiBzdHlsZXMgbmVlZCBmb3IgcGFyZW50IHN0eWxlcyAqL1xuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xuXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNTIsIG1pbm1heCgzMHB4LCBjYWxjKDEwMHZoIC8gNCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmdsb2JhbCguZGF5KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgfVxuXHRcdFx0XHRcdDpnbG9iYWwoLmlzLW9mZnNldCkge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYXV0bztcblx0XHRcdFx0XHR9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2FydGljbGU+XG4gIClcbn0iXX0= */\n/*@ sourceURL=components/calendar.js */'
			}));
		};

		return _this;
	}

	(0, _createClass3.default)(_class, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var currentDate = new Date();
			var currentDay = currentDate.getDate();
			var currentMonth = currentDate.getMonth();
			var elem = document.querySelector('#month-' + currentMonth + '-day-' + currentDay);
			elem.scrollIntoView({
				behavior: "smooth"
			});
			elem.classList.add('is-current');
			elem.classList.toggle('highlight');
			window.setTimeout(function (_) {
				elem.classList.toggle('highlight');
			}, 1500);
		}
	}, {
		key: 'year',
		get: function get() {
			var currentYear = new Date().getFullYear();
			var year = [[], [], [], [], [], [], [], [], [], [], [], []];
			for (var i = 1; i <= 31; i++) {
				year[0].push(i);
			}
			if (currentYear % 4 === 0) {
				for (var j = 1; j <= 29; j++) {
					year[1].push(j);
				}
			} else {
				for (var k = 1; k <= 28; k++) {
					year[1].push(k);
				}
			}
			for (var l = 1; l <= 31; l++) {
				year[2].push(l);
			}
			for (var m = 1; m <= 30; m++) {
				year[3].push(m);
			}
			for (var n = 1; n <= 31; n++) {
				year[4].push(n);
			}
			for (var o = 1; o <= 30; o++) {
				year[5].push(o);
			}
			for (var p = 1; p <= 31; p++) {
				year[6].push(p);
			}
			for (var q = 1; q <= 31; q++) {
				year[7].push(q);
			}
			for (var r = 1; r <= 30; r++) {
				year[8].push(r);
			}
			for (var s = 1; s <= 31; s++) {
				year[9].push(s);
			}
			for (var t = 1; t <= 30; t++) {
				year[10].push(t);
			}
			for (var u = 1; u <= 31; u++) {
				year[11].push(u);
			}
			var initOffset = new Date(new Date().getFullYear(), 0, 0).getDay();
			for (var x = 0; x < initOffset; x++) {
				year[0].unshift('offset');
			}
			return year;
		}
	}]);

	return _class;
}(_react.Component);

_class.displayName = "Calendar";
exports.default = _class;