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
      lineNumber: 22
    }
  }, React.createElement('a', { href: '#', onClick: handleClick, className: _style2.default.dynamic([['129877278', [isActive]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, children), React.createElement(_style2.default, {
    styleId: '129877278',
    css: 'a.__jsx-style-dynamic-selector{border-bottom:' + isActive + ';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxhY3RpdmUtbGluay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmtCLEFBSVEsMkNBQUMiLCJmaWxlIjoicGFnZXNcXGNvbXBvbmVudHNcXG5hdmlnYXRpb25cXGFjdGl2ZS1saW5rLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0luYWxfS2Fyb3Yvc2l0ZS9pa2Fyb3YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbnR5cGUgSVByb3BzQWN0aXZlTGluayA9IHtcclxuICBocmVmOiBzdHJpbmcsXHJcbiAgcm91dGVyOiBhbnksXHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5Ob2RlIFxyXG59O1xyXG5cclxuY29uc3QgQWN0aXZlTGluayA9ICh7IGhyZWYsIHJvdXRlciwgY2hpbGRyZW4gfTogSVByb3BzQWN0aXZlTGluaykgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJvdXRlci5wdXNoKGhyZWYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFJPVVRFUl9QQVRIID0gcm91dGVyLnBhdGhuYW1lID8gcm91dGVyLnBhdGhuYW1lIDogJy8nO1xyXG5cclxuICBjb25zdCBpc0FjdGl2ZSA9IFJPVVRFUl9QQVRIID09PSBocmVmID8gJ3NvbGlkIHdoaXRlIDJweCcgOiAnJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsYWJlbD5cclxuICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+eyBjaGlsZHJlbiB9PC9hPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAkeyBpc0FjdGl2ZSB9XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2xhYmVsPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBY3RpdmVMaW5rKTtcclxuIl19 */\n/*@ sourceURL=pages\\components\\navigation\\active-link.js */',
    dynamic: [isActive]
  }));
};

exports.default = (0, _index.withRouter)(ActiveLink);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxhY3RpdmUtbGluay5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIndpdGhSb3V0ZXIiLCJBY3RpdmVMaW5rIiwiaHJlZiIsInJvdXRlciIsImNoaWxkcmVuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiUk9VVEVSX1BBVEgiLCJwYXRobmFtZSIsImlzQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQVM7Ozs7Ozs7OztBQVFULElBQU0sYUFBYSxTQUFiLEFBQWEsaUJBQWtEO01BQS9DLEFBQStDLFlBQS9DLEFBQStDO01BQXpDLEFBQXlDLGNBQXpDLEFBQXlDO01BQWpDLEFBQWlDLGdCQUFqQyxBQUFpQyxBQUNuRTs7TUFBTSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQUMsR0FBTSxBQUN6QjtNQUFBLEFBQUUsQUFDRjtXQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ2I7QUFIRCxBQUtBOztNQUFNLGNBQWMsT0FBQSxBQUFPLFdBQVcsT0FBbEIsQUFBeUIsV0FBN0MsQUFBd0QsQUFFeEQ7O01BQU0sV0FBVyxnQkFBQSxBQUFnQixPQUFoQixBQUF1QixvQkFBeEMsQUFBNEQsQUFFNUQ7O2VBQ0UsY0FBQTt1REFBQSxBQUl3Qjs7Z0JBSnhCO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsUUFDRSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksU0FBWixBQUFxQixnRUFBckIsQUFHc0I7O2dCQUh0QjtrQkFBQSxBQUFvQztBQUFwQztLQURGLEFBQ0U7YUFERjsyREFBQSxBQUl3QixXQUp4QjtjQURGLEFBQ0UsQUFJd0IsQUFLM0I7QUFURztBQVhKLEFBc0JBOztrQkFBZSx1QkFBZixBQUFlLEFBQVciLCJmaWxlIjoiYWN0aXZlLWxpbmsuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSW5hbF9LYXJvdi9zaXRlL2lrYXJvdiJ9