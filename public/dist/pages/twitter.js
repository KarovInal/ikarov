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

var _reactTwitterWidgets = require('react-twitter-widgets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Inal_Karov\\site\\ikarov\\pages\\twitter.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    className: 'jsx-4110848293',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, { title: 'Home', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('div', {
    className: 'jsx-4110848293' + ' ' + 'content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_person2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement(_navigation2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('p', {
    className: 'jsx-4110848293',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'twitter:'), _react2.default.createElement(_reactTwitterWidgets.Timeline, {
    dataSource: {
      sourceType: 'profile',
      screenName: 'inal_karov'
    },
    options: {
      username: 'inal_karov',
      height: '400',
      width: '500'
    },
    onLoad: function onLoad() {
      return console.log('Timeline is loaded!');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: '4110848293',
    css: '.content.jsx-4110848293{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0d2l0dGVyLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCZ0IsQUFHK0IsOEVBQ1QsMEVBQ00sNkZBQ3JCIiwiZmlsZSI6InBhZ2VzXFx0d2l0dGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0luYWxfS2Fyb3Yvc2l0ZS9pa2Fyb3YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICcuL2xheW91dC9oZWFkJztcclxuaW1wb3J0IFBlcnNvbiBmcm9tICcuL2NvbXBvbmVudHMvcGVyc29uJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBUaW1lbGluZSB9IGZyb20gJ3JlYWN0LXR3aXR0ZXItd2lkZ2V0cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+XHJcbiAgPGRpdj5cclxuICAgIDxIZWFkIHRpdGxlPVwiSG9tZVwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgPFBlcnNvbiAvPlxyXG4gICAgICA8TmF2aWdhdGlvbiAvPlxyXG5cclxuICAgICAgPHA+dHdpdHRlcjo8L3A+XHJcblxyXG4gICAgICA8VGltZWxpbmVcclxuICAgICAgICBkYXRhU291cmNlPXt7XHJcbiAgICAgICAgICBzb3VyY2VUeXBlOiAncHJvZmlsZScsXHJcbiAgICAgICAgICBzY3JlZW5OYW1lOiAnaW5hbF9rYXJvdidcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgIHVzZXJuYW1lOiAnaW5hbF9rYXJvdicsXHJcbiAgICAgICAgICBoZWlnaHQ6ICc0MDAnLFxyXG4gICAgICAgICAgd2lkdGg6ICc1MDAnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Mb2FkPXsoKSA9PiBjb25zb2xlLmxvZygnVGltZWxpbmUgaXMgbG9hZGVkIScpfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuIl19 */\n/*@ sourceURL=pages\\twitter.js?entry */'
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx0d2l0dGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIlBlcnNvbiIsIk5hdmlnYXRpb24iLCJUaW1lbGluZSIsInNvdXJjZVR5cGUiLCJzY3JlZW5OYW1lIiwidXNlcm5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQVMsQUFFVDs7Ozs7O2tCQUFlLFlBQUE7eUJBQ2IsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssT0FBTixBQUFZO2dCQUFaO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUE7d0NBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSxzQkFDQSxBQUFDOztnQkFBRDtrQkFGRixBQUVFLEFBRUE7QUFGQTtBQUFBLHNCQUVBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSkYsQUFJRSxBQUVBLDZCQUFBLEFBQUM7O2tCQUNhLEFBQ0UsQUFDWjtrQkFISixBQUNjLEFBRUUsQUFFZDtBQUpZLEFBQ1Y7O2dCQUdPLEFBQ0csQUFDVjtjQUZPLEFBRUMsQUFDUjthQVJKLEFBS1csQUFHQSxBQUVUO0FBTFMsQUFDUDtZQUlNLGtCQUFBO2FBQU0sUUFBQSxBQUFRLElBQWQsQUFBTSxBQUFZO0FBVjVCOztnQkFBQTtrQkFSSixBQUVFLEFBTUU7QUFBQTtBQUNFO2FBVE47U0FEYSxBQUNiO0FBQUE7QUFERiIsImZpbGUiOiJ0d2l0dGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0luYWxfS2Fyb3Yvc2l0ZS9pa2Fyb3YifQ==