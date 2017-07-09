'use strict';

(function (bemHealthCheck) {
  var selectors = [{ type: 'objects', selector: 'o-', color: 'blue' }, { type: 'components', selector: 'c-', color: 'green' }, { type: 'utilities', selector: 'u-', color: 'orange' }, { type: 'bemElement', selector: '__', color: 'purple' }, { type: 'bemModifier', selector: '--', color: 'red' }];

  // Creating things.
  var tools = function tools(buttons) {
    var tool = document.createElement("div");
    tool.setAttribute('style', '\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: black;\n    padding: .5rem;\n    ');

    buttons.map(function (item) {
      return tool.appendChild(item);
    });
    return tool;
  };
  var createButtons = function createButtons(id) {
    return function (color) {
      var el = document.createElement('button');
      el.setAttribute('id', id);
      el.innerHTML = id;
      return el;
    };
  };
  var addOnClick = function addOnClick(id) {
    return function (func) {
      var el = document.getElementById(id);
      console.log(el);
      console.log(func);
      el.onclick = func(id);
      console.log(el.onclick);
    };
  };
  var createStyleTag = function createStyleTag(type) {
    return function (selector) {
      return function (color) {
        var el = document.createElement('style');
        el.setAttribute('title', type);
        el.innerHTML = '\n      [class*="' + selector + '"] {\n        outline: 2px solid ' + color + ';\n      };';
        return el;
      };
    };
  };
  //iterating over things
  var buttonTags = selectors.map(function (item) {
    return createButtons(item.type)(item.color);
  });
  var styleTags = selectors.map(function (item) {
    return createStyleTag(item.type)(item.selector)(item.color);
  });

  var toggleStyleTag = function toggleStyleTag(id) {
    var element = document.querySelector('[title="' + id + '"]');
    if (element) {
      element.parentNode.removeChild(element);
    } else {
      //add
      // console.log('add triggered', element);
    }
  };

  document.body.appendChild(tools(buttonTags));

  selectors.forEach(function (item) {
    console.log(item.type);
    addOnClick(item.type)(toggleStyleTag);
  }); /* addOnClick(item.type)(toggleStyleTag(item.type */
})(window);
