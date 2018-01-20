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

var _jsxFileName = 'C:\\Users\\Inal_Karov\\site\\ikarov\\pages\\layout\\contact-list\\contact-list.js';


var CONTACT_DATA_LIST = [{
  id: 0,
  link: 'http://t.me/ikarov',
  icon: '/static/icons/telegram.svg'
}, {
  id: 1,
  link: 'https://www.instagram.com/inal_karov/',
  icon: '/static/icons/instagram.svg'
}, {
  id: 2,
  link: 'https://twitter.com/inal_karov',
  icon: '/static/icons/twitter.svg'
}];

var ContactList = function ContactList(contactDataList) {
  return function () {
    return React.createElement('div', {
      className: 'jsx-3198389924' + ' ' + 'contacts-wrap',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    }, contactDataList.map(function (_ref) {
      var link = _ref.link,
          icon = _ref.icon,
          id = _ref.id;
      return React.createElement('a', { href: link, target: '_blank', key: id, className: 'jsx-3198389924',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, React.createElement('img', { src: icon, style: { height: '40px', width: 'auto' }, className: 'jsx-3198389924',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }));
    }), React.createElement(_style2.default, {
      styleId: '3198389924',
      css: '.contacts-wrap.jsx-3198389924{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}a.jsx-3198389924{margin:0 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsYXlvdXRcXGNvbnRhY3QtbGlzdFxcY29udGFjdC1saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDZ0IsQUFHc0IsQUFJQyxjQUNoQiw0REFKQSIsImZpbGUiOiJwYWdlc1xcbGF5b3V0XFxjb250YWN0LWxpc3RcXGNvbnRhY3QtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9JbmFsX0thcm92L3NpdGUvaWthcm92Iiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcclxuXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgSUNvbnRhY3QgPSB7XHJcbiAgaWQ6IG51bWJlcixcclxuICBsaW5rOiBzdHJpbmcsXHJcbiAgaWNvbjogc3RyaW5nLFxyXG59O1xyXG5cclxuY29uc3QgQ09OVEFDVF9EQVRBX0xJU1Q6IEFycmF5PElDb250YWN0PiA9IFtcclxuICB7XHJcbiAgICBpZDogMCxcclxuICAgIGxpbms6ICdodHRwOi8vdC5tZS9pa2Fyb3YnLFxyXG4gICAgaWNvbjogJy9zdGF0aWMvaWNvbnMvdGVsZWdyYW0uc3ZnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9pbmFsX2thcm92LycsXHJcbiAgICBpY29uOiAnL3N0YXRpYy9pY29ucy9pbnN0YWdyYW0uc3ZnJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBsaW5rOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbmFsX2thcm92JyxcclxuICAgIGljb246ICcvc3RhdGljL2ljb25zL3R3aXR0ZXIuc3ZnJ1xyXG4gIH1cclxuXVxyXG5cclxuY29uc3QgQ29udGFjdExpc3QgPSAoY29udGFjdERhdGFMaXN0KSA9PiAoKSA9PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHMtd3JhcFwiPlxyXG4gICAge1xyXG4gICAgICBjb250YWN0RGF0YUxpc3QubWFwKCh7IGxpbmssIGljb24sIGlkIH0pID0+IChcclxuICAgICAgICA8YSBocmVmPXsgbGluayB9IHRhcmdldD1cIl9ibGFua1wiIGtleT17IGlkIH0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17IGljb24gfSBzdHlsZT17eyBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICdhdXRvJyB9fSAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgKSlcclxuICAgIH1cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb250YWN0cy13cmFwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdExpc3QoQ09OVEFDVF9EQVRBX0xJU1QpO1xyXG4iXX0= */\n/*@ sourceURL=pages\\layout\\contact-list\\contact-list.js */'
    }));
  };
};

exports.default = ContactList(CONTACT_DATA_LIST);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxsYXlvdXRcXGNvbnRhY3QtbGlzdFxcY29udGFjdC1saXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ09OVEFDVF9EQVRBX0xJU1QiLCJpZCIsImxpbmsiLCJpY29uIiwiQ29udGFjdExpc3QiLCJjb250YWN0RGF0YUxpc3QiLCJtYXAiLCJoZWlnaHQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBLEFBQU87O0lBQVAsQUFBWTs7Ozs7Ozs7O0FBUVosSUFBTTtNQUNKLEFBQ00sQUFDSjtRQUZGLEFBRVEsQUFDTjtRQUp1QyxBQUN6QyxBQUdRO0FBSFIsQUFDRSxDQUZ1QztNQU16QyxBQUNNLEFBQ0o7UUFGRixBQUVRLEFBQ047UUFUdUMsQUFNekMsQUFHUTtBQUhSLEFBQ0U7TUFJRixBQUNNLEFBQ0o7UUFGRixBQUVRLEFBQ047UUFkSixBQUEyQyxBQVd6QyxBQUdRO0FBSFIsQUFDRTs7QUFNSixJQUFNLGNBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxpQkFBRDtTQUFxQixZQUFBO2lCQUN2QyxjQUFBOzBDQUFBLEFBQWU7O2tCQUFmO29CQUFBLEFBRUk7QUFGSjtBQUFBLEtBQUEsa0JBRUksQUFBZ0IsSUFBSSxnQkFBQTtVQUFBLEFBQUcsWUFBSCxBQUFHO1VBQUgsQUFBUyxZQUFULEFBQVM7VUFBVCxBQUFlLFVBQWYsQUFBZTttQkFDakMsY0FBQSxPQUFHLE1BQUgsQUFBVSxNQUFPLFFBQWpCLEFBQXdCLFVBQVMsS0FBakMsQUFBdUMsZUFBdkM7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLCtCQUNPLEtBQUwsQUFBVyxNQUFPLE9BQU8sRUFBRSxRQUFGLEFBQVUsUUFBUSxPQUEzQyxBQUF5QixBQUF5QixxQkFBbEQ7O29CQUFBO3NCQUZnQixBQUNsQixBQUNFO0FBQUE7O0FBSlIsQUFFSTtlQUZKO1dBRHVDLEFBQ3ZDO0FBQUE7QUFEa0I7QUFBcEIsQUFxQkE7O2tCQUFlLFlBQWYsQUFBZSxBQUFZIiwiZmlsZSI6ImNvbnRhY3QtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9JbmFsX0thcm92L3NpdGUvaWthcm92In0=