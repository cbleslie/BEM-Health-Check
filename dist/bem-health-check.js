'use strict';

(function (bemHealthCheck) {
  // console.log('loaded');
  var select = function select(type) {
    return function (selector) {
      return document.body.querySelectorAll('[class' + type + '="' + selector + '"]');
    };
  };
  var containsSelect = select('*');

  var objects = containsSelect('o-');
  var components = containsSelect('c-');
  var utilities = containsSelect('u-');
  var bemElement = containsSelect('__');
  var bemModifier = containsSelect('--');

  var outline = function outline(selector) {
    return function (color) {
      return selector.forEach(function (item) {
        return item.setAttribute("style", 'outline: 1px solid ' + color + ';');
      });
    };
  };

  outline(objects)('purple');
  outline(components)('blue');
  outline(utilities)('orange');
  outline(bemElement)('green');
  outline(bemModifier)('yellow');

  var createElement = function createElement(type) {
    return document.createElement(type);
  };
})(window);
