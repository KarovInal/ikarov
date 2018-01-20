'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _index = require('next\\dist\\lib\\router\\index.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Inal_Karov\\site\\ikarov\\pages\\components\\navigation\\active-link.js';


var ActiveLink = function ActiveLink(_ref) {
  var href = _ref.href,
      router = _ref.router,
      children = _ref.children;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push(href);
  };

  var ROUTER_PATH = router.pathname ? router.pathname : '/';
  var isActive = ROUTER_PATH === href ? 'solid white 2px' : '';

  return React.createElement('label', {
    className: _style2.default.dynamic([['129877278', [isActive]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, React.createElement('a', { href: '#', onClick: handleClick, className: _style2.default.dynamic([['129877278', [isActive]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, children), React.createElement(_style2.default, {
    styleId: '129877278',
    css: 'a.__jsx-style-dynamic-selector{border-bottom:' + isActive + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxhY3RpdmUtbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmtCLEFBSVEsMkNBQUMiLCJmaWxlIjoicGFnZXNcXGNvbXBvbmVudHNcXG5hdmlnYXRpb25cXGFjdGl2ZS1saW5rLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0luYWxfS2Fyb3Yvc2l0ZS9pa2Fyb3YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG50eXBlIElQcm9wc0FjdGl2ZUxpbmsgPSB7XHJcbiAgaHJlZjogc3RyaW5nLFxyXG4gIHJvdXRlcjogYW55LFxyXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSBcclxufTtcclxuXHJcbmNvbnN0IEFjdGl2ZUxpbmsgPSAoeyBocmVmLCByb3V0ZXIsIGNoaWxkcmVuIH06IElQcm9wc0FjdGl2ZUxpbmspID0+IHtcclxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICByb3V0ZXIucHVzaChocmVmKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBST1VURVJfUEFUSCA9IHJvdXRlci5wYXRobmFtZSA/IHJvdXRlci5wYXRobmFtZSA6ICcvJztcclxuICBjb25zdCBpc0FjdGl2ZSA9IFJPVVRFUl9QQVRIID09PSBocmVmID8gJ3NvbGlkIHdoaXRlIDJweCcgOiAnJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsYWJlbD5cclxuICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206ICR7IGlzQWN0aXZlIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvbGFiZWw+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEFjdGl2ZUxpbmspO1xyXG4iXX0= */\n/*@ sourceURL=pages\\components\\navigation\\active-link.js */',
    dynamic: [isActive]
  }));
};

exports.default = (0, _index.withRouter)(ActiveLink);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxhY3RpdmUtbGluay5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIndpdGhSb3V0ZXIiLCJBY3RpdmVMaW5rIiwiaHJlZiIsInJvdXRlciIsImNoaWxkcmVuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiUk9VVEVSX1BBVEgiLCJwYXRobmFtZSIsImlzQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQVM7Ozs7Ozs7OztBQVFULElBQU0sYUFBYSxTQUFiLEFBQWEsaUJBQWtEO01BQS9DLEFBQStDLFlBQS9DLEFBQStDO01BQXpDLEFBQXlDLGNBQXpDLEFBQXlDO01BQWpDLEFBQWlDLGdCQUFqQyxBQUFpQyxBQUNuRTs7TUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsR0FBTSxBQUN6QjtNQUFBLEFBQUUsQUFDRjtXQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ2I7QUFIRCxBQUtBOztNQUFNLGNBQWMsT0FBQSxBQUFPLFdBQVcsT0FBbEIsQUFBeUIsV0FBN0MsQUFBd0QsQUFDeEQ7TUFBTSxXQUFXLGdCQUFBLEFBQWdCLE9BQWhCLEFBQXVCLG9CQUF4QyxBQUE0RCxBQUU1RDs7ZUFDRSxjQUFBO3VEQUFBLEFBT3dCOztnQkFQeEI7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxRQUNFLGNBQUEsT0FBRyxNQUFILEFBQVEsS0FBSSxTQUFaLEFBQXFCLGdFQUFyQixBQU1zQjs7Z0JBTnRCO2tCQUFBLEFBQ0k7QUFESjtLQURGLEFBQ0U7YUFERjsyREFBQSxBQU93QixXQVB4QjtjQURGLEFBQ0UsQUFPd0IsQUFLM0I7QUFaRztBQVZKLEFBd0JBOztrQkFBZSx1QkFBZixBQUFlLEFBQVciLCJmaWxlIjoiYWN0aXZlLWxpbmsuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSW5hbF9LYXJvdi9zaXRlL2lrYXJvdiJ9