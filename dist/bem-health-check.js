'use strict';

(function (bemHealthCheck) {

  var addOnClick = function addOnClick(id) {
    return function (func) {
      var el = document.getElementById(id);
      console.log(el);
      el.onclick = func;
    };
  };

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
        if (!item.hasAttribute('style')) {
          item.setAttribute('style', 'outline: 1px solid ' + color + ';');
        } else {
          item.removeAttribute('style');
        }
      });
    };
  };

  var outlineObjects = function outlineObjects() {
    return outline(objects)('purple');
  };
  var outlineComponents = function outlineComponents() {
    return outline(components)('blue');
  };
  var outlineUtilities = function outlineUtilities() {
    return outline(utilities)('orange');
  };
  var outlineElements = function outlineElements() {
    return outline(bemElement)('green');
  };
  var outlineModifiers = function outlineModifiers() {
    return outline(bemModifier)('yellow');
  };

  var addTools = function addTools() {
    var tool = document.createElement("div");
    tool.setAttribute('style', '\n      position: fixed;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background-color: black;\n      padding: .5rem;\n    ');
    tool.innerHTML = '\n      <button id="objects">Objects</button>\n      <button id="components">Components</button>\n      <button id="utilities">Utilities</button>\n      <button id="elements">BEM Elements</button>\n      <button id="modifiers">BEM Modifiers</button>\n    ';

    var context = document.body;
    document.body.appendChild(tool);
    //add onClick
  };

  addTools();

  addOnClick('objects')(outlineObjects);
  addOnClick('components')(outlineComponents);
  addOnClick('utilities')(outlineUtilities);
  addOnClick('elements')(outlineElements);
  addOnClick('modifiers')(outlineModifiers);
})(window);
