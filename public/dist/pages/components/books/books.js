'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Inal_Karov\\site\\ikarov\\pages\\components\\books\\books.js';


var Books = function Books(_ref) {
  var books = _ref.books;

  var BookList = books.map(function (_ref2) {
    var cover = _ref2.cover,
        label = _ref2.label;
    return React.createElement('div', {
      className: 'jsx-2382078507' + ' ' + 'book-container',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, React.createElement('img', { src: cover, className: 'jsx-2382078507' + ' ' + 'book-cover',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }), React.createElement('p', {
      className: 'jsx-2382078507' + ' ' + 'book-label',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, label), React.createElement(_style2.default, {
      styleId: '2382078507',
      css: '.book-container.jsx-2382078507{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:200px;margin:5px 10px;}.book-cover.jsx-2382078507{width:100%;height:auto;}.book-labe.jsx-2382078507{font-size:18px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxib29rc1xcYm9va3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWtCLEFBR3dCLEFBT0YsQUFLSSxXQUpILElBS2QsUUFKQSxtREFSd0IsOEVBQ1YsWUFDSSxnQkFDbEIiLCJmaWxlIjoicGFnZXNcXGNvbXBvbmVudHNcXGJvb2tzXFxib29rcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9JbmFsX0thcm92L3NpdGUvaWthcm92Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBJQm9vayA9IHtcclxuICBjb3ZlcjogJ3N0cmluZycsXHJcbiAgbGFiZWw6ICdzdHJpbmcnXHJcbn1cclxuXHJcbmNvbnN0IEJvb2tzID0gKHsgYm9va3MgfTogQXJyYXk8SUJvb2s+KSA9PiB7XHJcbiAgY29uc3QgQm9va0xpc3QgPSBib29rcy5tYXAoKHsgY292ZXIsIGxhYmVsIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay1jb250YWluZXJcIj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJib29rLWNvdmVyXCIgc3JjPXtjb3Zlcn0gLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiYm9vay1sYWJlbFwiPnsgbGFiZWwgfTwvcD4gXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYm9vay1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvb2stY292ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm9vay1sYWJlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICkpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tzLXdyYXBcIj5cclxuICAgICAgeyBCb29rTGlzdCB9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYm9va3Mtd3JhcCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVubjtcclxuICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tzO1xyXG4iXX0= */\n/*@ sourceURL=pages\\components\\books\\books.js */'
    }));
  });

  return React.createElement('div', {
    className: 'jsx-3029176008' + ' ' + 'books-wrap',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, BookList, React.createElement(_style2.default, {
    styleId: '3029176008',
    css: '.books-wrap.jsx-3029176008{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:colunn;-ms-flex-direction:colunn;flex-direction:colunn;max-width:700px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxib29rc1xcYm9va3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQixBQUd3QiwwRUFDUyw4RUFDTixnQkFDRCx5REFDakIiLCJmaWxlIjoicGFnZXNcXGNvbXBvbmVudHNcXGJvb2tzXFxib29rcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9JbmFsX0thcm92L3NpdGUvaWthcm92Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBJQm9vayA9IHtcclxuICBjb3ZlcjogJ3N0cmluZycsXHJcbiAgbGFiZWw6ICdzdHJpbmcnXHJcbn1cclxuXHJcbmNvbnN0IEJvb2tzID0gKHsgYm9va3MgfTogQXJyYXk8SUJvb2s+KSA9PiB7XHJcbiAgY29uc3QgQm9va0xpc3QgPSBib29rcy5tYXAoKHsgY292ZXIsIGxhYmVsIH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay1jb250YWluZXJcIj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJib29rLWNvdmVyXCIgc3JjPXtjb3Zlcn0gLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiYm9vay1sYWJlbFwiPnsgbGFiZWwgfTwvcD4gXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYm9vay1jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvb2stY292ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm9vay1sYWJlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICkpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tzLXdyYXBcIj5cclxuICAgICAgeyBCb29rTGlzdCB9XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuYm9va3Mtd3JhcCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVubjtcclxuICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tzO1xyXG4iXX0= */\n/*@ sourceURL=pages\\components\\books\\books.js */'
  }));
};

exports.default = Books;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxib29rc1xcYm9va3MuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJCb29rcyIsImJvb2tzIiwiQm9va0xpc3QiLCJtYXAiLCJjb3ZlciIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOzs7Ozs7Ozs7QUFPWixJQUFNLFFBQVEsU0FBUixBQUFRLFlBQTZCO01BQTFCLEFBQTBCLGFBQTFCLEFBQTBCLEFBQ3pDOztNQUFNLGlCQUFXLEFBQU0sSUFBSSxpQkFBQTtRQUFBLEFBQUcsY0FBSCxBQUFHO1FBQUgsQUFBVSxjQUFWLEFBQVU7aUJBQ25DLGNBQUE7MENBQUEsQUFBZTs7a0JBQWY7b0JBQUEsQUFDRTtBQURGO0FBQUEsS0FBQSwrQkFDOEIsS0FBNUIsQUFBaUMsMkNBQWpDLEFBQWU7O2tCQUFmO29CQURGLEFBQ0UsQUFDQTtBQURBO2NBQ0EsY0FBQTswQ0FBQSxBQUFhOztrQkFBYjtvQkFBQSxBQUE0QjtBQUE1QjtBQUFBLE9BRkYsQUFFRTtlQUZGO1dBRHlCLEFBQ3pCO0FBQUE7QUFERixBQUFpQixBQXdCakIsR0F4QmlCOztlQXlCZixjQUFBO3dDQUFBLEFBQWU7O2dCQUFmO2tCQUFBLEFBQ0k7QUFESjtBQUFBLEdBQUEsRUFBQTthQUFBO1NBREYsQUFDRSxBQVlIO0FBWkc7QUExQkosQUF3Q0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYm9va3MuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSW5hbF9LYXJvdi9zaXRlL2lrYXJvdiJ9