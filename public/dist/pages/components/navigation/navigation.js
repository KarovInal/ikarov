'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _activeLink = require('./active-link');

var _activeLink2 = _interopRequireDefault(_activeLink);

var _index = require('next\\dist\\lib\\router\\index.js');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Inal_Karov\\site\\ikarov\\pages\\components\\navigation\\navigation.js';


var Navigation = function Navigation(_ref) {
  var router = _ref.router;

  var ROUTER_PATH = router.pathname ? router.pathname : '';

  return React.createElement('div', {
    className: 'jsx-910378925' + ' ' + 'navigator-wrap',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, React.createElement('div', {
    className: 'jsx-910378925',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, React.createElement(_activeLink2.default, { router: router, href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, '🏠'), React.createElement(_activeLink2.default, { router: router, href: '/contacts', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, '💬'), React.createElement(_activeLink2.default, { router: router, href: '/twitter', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, '🤔'), React.createElement(_activeLink2.default, { router: router, href: '/books', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, '📚')), React.createElement('p', {
    className: 'jsx-910378925',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, !ROUTER_PATH || ROUTER_PATH === '/' || ROUTER_PATH === '/index' ? '' : ROUTER_PATH.slice(1)), React.createElement(_style2.default, {
    styleId: '910378925',
    css: '.navigator-wrap.jsx-910378925{max-width:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:20px;margin-top:40px;margin-bottom:40px;}.navigator-wrap a{text-decoration:none;margin:0 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHeUIsQUFTSyxnQkFSUixLQVNBLGFBQ2Ysd0RBVHdCLDhFQUNILDZGQUNKLGVBQ0MsZ0JBQ0csbUJBQ3JCIiwiZmlsZSI6InBhZ2VzXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0luYWxfS2Fyb3Yvc2l0ZS9pa2Fyb3YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBY3RpdmVMaW5rIGZyb20gJy4vYWN0aXZlLWxpbmsnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gKHsgcm91dGVyIH0pID0+IHtcclxuICBjb25zdCBST1VURVJfUEFUSCA9IHJvdXRlci5wYXRobmFtZSA/IHJvdXRlci5wYXRobmFtZSA6ICcnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0b3Itd3JhcFwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxBY3RpdmVMaW5rIHJvdXRlcj17cm91dGVyfSBocmVmPVwiL1wiPnsn8J+PoCd9PC9BY3RpdmVMaW5rPlxyXG4gICAgICAgIDxBY3RpdmVMaW5rIHJvdXRlcj17cm91dGVyfSBocmVmPVwiL2NvbnRhY3RzXCI+eyfwn5KsJ308L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgPEFjdGl2ZUxpbmsgcm91dGVyPXtyb3V0ZXJ9IGhyZWY9XCIvdHdpdHRlclwiPnsn8J+klCd9PC9BY3RpdmVMaW5rPlxyXG4gICAgICAgIDxBY3RpdmVMaW5rIHJvdXRlcj17cm91dGVyfSBocmVmPVwiL2Jvb2tzXCI+eyfwn5OaJ308L0FjdGl2ZUxpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHA+e1xyXG4gICAgICAgICghUk9VVEVSX1BBVEggfHwgUk9VVEVSX1BBVEggPT09ICcvJyB8fCBST1VURVJfUEFUSCA9PT0gJy9pbmRleCcpXHJcbiAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICA6IFJPVVRFUl9QQVRILnNsaWNlKDEpXHJcbiAgICAgIH08L3A+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5uYXZpZ2F0b3Itd3JhcCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIDpnbG9iYWwoLm5hdmlnYXRvci13cmFwIGEpIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXZpZ2F0aW9uKTtcclxuIl19 */\n/*@ sourceURL=pages\\components\\navigation\\navigation.js */'
  }));
};

exports.default = (0, _index.withRouter)(Navigation);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWN0aXZlTGluayIsIndpdGhSb3V0ZXIiLCJOYXZpZ2F0aW9uIiwicm91dGVyIiwiUk9VVEVSX1BBVEgiLCJwYXRobmFtZSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7SUFBUCxBQUFZOztBQUNaLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUzs7Ozs7Ozs7O0FBRVQsSUFBTSxhQUFhLFNBQWIsQUFBYSxpQkFBZ0I7TUFBYixBQUFhLGNBQWIsQUFBYSxBQUNqQzs7TUFBTSxjQUFjLE9BQUEsQUFBTyxXQUFXLE9BQWxCLEFBQXlCLFdBQTdDLEFBQXdELEFBRXhEOztlQUNFLGNBQUE7dUNBQUEsQUFBZTs7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxRQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsV0FDRSxBQUFDLHNDQUFXLFFBQVosQUFBb0IsUUFBUSxNQUE1QixBQUFpQztnQkFBakM7a0JBQUEsQUFBc0M7QUFBdEM7S0FERixBQUNFLEFBQ0EsYUFBQSxBQUFDLHNDQUFXLFFBQVosQUFBb0IsUUFBUSxNQUE1QixBQUFpQztnQkFBakM7a0JBQUEsQUFBOEM7QUFBOUM7S0FGRixBQUVFLEFBQ0EsYUFBQSxBQUFDLHNDQUFXLFFBQVosQUFBb0IsUUFBUSxNQUE1QixBQUFpQztnQkFBakM7a0JBQUEsQUFBNkM7QUFBN0M7S0FIRixBQUdFLEFBQ0EsYUFBQSxBQUFDLHNDQUFXLFFBQVosQUFBb0IsUUFBUSxNQUE1QixBQUFpQztnQkFBakM7a0JBQUEsQUFBMkM7QUFBM0M7S0FMSixBQUNFLEFBSUUsQUFHRixjQUFBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsTUFDRyxBQUFDLGVBQWUsZ0JBQWhCLEFBQWdDLE9BQU8sZ0JBQXhDLEFBQXdELFdBQXhELEFBQ0ksS0FDQSxZQUFBLEFBQVksTUFYcEIsQUFRRSxBQUdNLEFBQWtCO2FBWDFCO1NBREYsQUFDRSxBQStCSDtBQS9CRztBQUpKLEFBcUNBOztrQkFBZSx1QkFBZixBQUFlLEFBQVciLCJmaWxlIjoibmF2aWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9JbmFsX0thcm92L3NpdGUvaWthcm92In0=