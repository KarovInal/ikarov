'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('./layout/head');

var _head2 = _interopRequireDefault(_head);

var _person = require('./components/person');

var _person2 = _interopRequireDefault(_person);

var _navigation = require('./components/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _books = require('./components/books');

var _books2 = _interopRequireDefault(_books);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Inal_Karov\\site\\ikarov\\pages\\books.js?entry';


var BOOKS = [{
  cover: 'https://royallib.com/data/images/378/cover_378914.jpg',
  label: 'От нуля к единице как создать стартап который изменит будущее'
}, {
  cover: 'https://ozon-st.cdn.ngenix.net/multimedia/1014060099.jpg',
  label: 'Цифровое золото'
}, {
  cover: 'https://s.f.kz/prod/358/357531_550.jpg',
  label: 'Бойцовский клуб'
}];

exports.default = function () {
  return _react2.default.createElement('div', {
    className: 'jsx-4110848293',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_head2.default, { title: 'Home', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), _react2.default.createElement('div', {
    className: 'jsx-4110848293' + ' ' + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_person2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement(_navigation2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement(_books2.default, { books: BOOKS, __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: '4110848293',
    css: '.content.jsx-4110848293{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxib29rcy5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmdCLEFBRytCLDhFQUNULDBFQUNNLDZGQUNyQiIsImZpbGUiOiJwYWdlc1xcYm9va3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSW5hbF9LYXJvdi9zaXRlL2lrYXJvdiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJy4vbGF5b3V0L2hlYWQnO1xyXG5pbXBvcnQgUGVyc29uIGZyb20gJy4vY29tcG9uZW50cy9wZXJzb24nO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBCb29rcyBmcm9tICcuL2NvbXBvbmVudHMvYm9va3MnO1xyXG5cclxuY29uc3QgQk9PS1MgPSBbXHJcbiAge1xyXG4gICAgY292ZXI6ICdodHRwczovL3JveWFsbGliLmNvbS9kYXRhL2ltYWdlcy8zNzgvY292ZXJfMzc4OTE0LmpwZycsXHJcbiAgICBsYWJlbDogJ9Ce0YIg0L3Rg9C70Y8g0Log0LXQtNC40L3QuNGG0LUg0LrQsNC6INGB0L7Qt9C00LDRgtGMINGB0YLQsNGA0YLQsNC/INC60L7RgtC+0YDRi9C5INC40LfQvNC10L3QuNGCINCx0YPQtNGD0YnQtdC1J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgY292ZXI6ICdodHRwczovL296b24tc3QuY2RuLm5nZW5peC5uZXQvbXVsdGltZWRpYS8xMDE0MDYwMDk5LmpwZycsXHJcbiAgICBsYWJlbDogJ9Cm0LjRhNGA0L7QstC+0LUg0LfQvtC70L7RgtC+J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgY292ZXI6ICdodHRwczovL3MuZi5rei9wcm9kLzM1OC8zNTc1MzFfNTUwLmpwZycsXHJcbiAgICBsYWJlbDogJ9CR0L7QudGG0L7QstGB0LrQuNC5INC60LvRg9CxJ1xyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+XHJcbiAgPGRpdj5cclxuICAgIDxIZWFkIHRpdGxlPVwiSG9tZVwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgPFBlcnNvbiAvPlxyXG4gICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICA8Qm9va3MgYm9va3M9e0JPT0tTfSAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuIl19 */\n/*@ sourceURL=pages\\books.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxib29rcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJQZXJzb24iLCJOYXZpZ2F0aW9uIiwiQm9va3MiLCJCT09LUyIsImNvdmVyIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVzs7Ozs7Ozs7O0FBRWxCLElBQU07U0FDSixBQUNTLEFBQ1A7U0FIVSxBQUNaLEFBRVM7QUFGVCxBQUNFLENBRlU7U0FLWixBQUNTLEFBQ1A7U0FQVSxBQUtaLEFBRVM7QUFGVCxBQUNFO1NBR0YsQUFDUyxBQUNQO1NBWEosQUFBYyxBQVNaLEFBRVMsQUFJWDtBQU5FLEFBQ0U7O2tCQUtXLFlBQUE7eUJBQ2IsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssT0FBTixBQUFZO2dCQUFaO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOztnQkFBRDtrQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLEFBQUMsaUNBQU0sT0FBUCxBQUFjO2dCQUFkO2tCQUxKLEFBRUUsQUFHRTtBQUFBOzthQUxKO1NBRGEsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiYm9va3MuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSW5hbF9LYXJvdi9zaXRlL2lrYXJvdiJ9