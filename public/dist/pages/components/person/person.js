'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _style3 = require('./style');

var _style4 = _interopRequireDefault(_style3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Inal_Karov\\site\\ikarov\\pages\\components\\person\\person.js';


var personData = {
  avatar: 'https://avatars3.githubusercontent.com/u/11422713?s=400&u=1a40f538c53a77f0f6667ddbad0602d80932162b&v=4',
  name: 'inal karov',
  profession: 'front-end developer:',
  skils: 'React / Redux / Flow'
};

var Person = function Person(props) {
  var avatar = props.avatar,
      name = props.name,
      profession = props.profession,
      skils = props.skils;

  return function () {
    return React.createElement('div', {
      className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'person-wrap',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, React.createElement('img', { src: avatar, className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'person-avatar',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }), React.createElement('p', {
      className: 'jsx-' + _style4.default.__scopedHash + ' ' + 'person-name',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }, name), React.createElement('p', {
      className: 'jsx-' + _style4.default.__scopedHash,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }, profession), React.createElement('p', {
      className: 'jsx-' + _style4.default.__scopedHash,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, skils), React.createElement(_style2.default, {
      styleId: _style4.default.__scopedHash,
      css: _style4.default.__scoped
    }));
  };
};

exports.default = Person(personData);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjb21wb25lbnRzXFxwZXJzb25cXHBlcnNvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsInBlcnNvbkRhdGEiLCJhdmF0YXIiLCJuYW1lIiwicHJvZmVzc2lvbiIsInNraWxzIiwiUGVyc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTyxBQUFZOzs7Ozs7Ozs7OztBQVNuQixJQUFNO1VBQTJCLEFBQ3ZCLEFBQ1I7UUFGK0IsQUFFekIsQUFDTjtjQUgrQixBQUduQixBQUNaO1NBSkYsQUFBaUMsQUFJeEI7QUFKd0IsQUFDL0I7O0FBTUYsSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBd0I7TUFBQSxBQUM5QixTQUQ4QixBQUNNLE1BRE4sQUFDOUI7TUFEOEIsQUFDdEIsT0FEc0IsQUFDTSxNQUROLEFBQ3RCO01BRHNCLEFBQ2hCLGFBRGdCLEFBQ00sTUFETixBQUNoQjtNQURnQixBQUNKLFFBREksQUFDTSxNQUROLEFBQ0osQUFFbEM7O1NBQU8sWUFBQTtpQkFDTCxjQUFBOytEQUFBLEFBQWU7O2tCQUFmO29CQUFBLEFBQ0U7QUFERjtBQUFBLEtBQUEsK0JBQ2lDLEtBQS9CLEFBQXFDLGlFQUFyQyxBQUFlOztrQkFBZjtvQkFERixBQUNFLEFBQ0E7QUFEQTtjQUNBLGNBQUE7K0RBQUEsQUFBYTs7a0JBQWI7b0JBQUEsQUFBNkI7QUFBN0I7QUFBQSxPQUZGLEFBRUUsQUFDQSxhQUFBLGNBQUE7MENBQUE7O2tCQUFBO29CQUFBLEFBQUs7QUFBTDtBQUFBLE9BSEYsQUFHRSxBQUNBLG1CQUFBLGNBQUE7MENBQUE7O2tCQUFBO29CQUFBLEFBQUs7QUFBTDtBQUFBLE9BSkYsQUFJRTsrQkFKRjsyQkFESyxBQUNMO0FBQUE7QUFERixBQVNEO0FBWkQsQUFjQTs7a0JBQWUsT0FBZixBQUFlLEFBQU8iLCJmaWxlIjoicGVyc29uLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0luYWxfS2Fyb3Yvc2l0ZS9pa2Fyb3YifQ==