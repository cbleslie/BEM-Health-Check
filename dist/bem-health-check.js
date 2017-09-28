'use strict';

(function (bemHealthCheck) {
  var selectors = [{ type: 'Object', selector: 'o-', color: 'blue' }, { type: 'Component', selector: 'c-', color: 'green' }, { type: 'Utility', selector: 'u-', color: 'orange' }, { type: 'Element', selector: '__', color: 'purple' }, { type: 'Modifier', selector: '--', color: 'red' }];

  // Creating things.
  var tools = function tools(buttons) {
    var tool = document.createElement("div");
    tool.setAttribute('style', '\n      position: fixed;\n      bottom: 0;\n      right: 0;\n      background-color: black;\n      padding: 5px;\n    ');

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
      el.onclick = function () {
        return func(id);
      };
    };
  };
  var createStyleTag = function createStyleTag(type) {
    return function (selector) {
      return function (color) {
        var el = document.createElement('style');
        var css = document.createTextNode('\n      [class*="' + selector + '"] {\n        outline: 2px solid ' + color + ';\n        position: relative;\n      }\n      [class*="' + selector + '"]::before {\n        position: absolute;\n        display: inline;\n        content: \'' + type + '\';\n        bottom: 100%;\n        white-space: nowrap;\n        width: auto;\n        left: calc(0% - 3px);\n        font-size: 10px;\n        color: white;\n        background-color: ' + color + ';\n        padding: 7px;\n        line-height: 5px;\n        border-radius: 5px 5px 0 0;\n      }');
        el.setAttribute('data-title', type);
        el.type = 'text/css';
        el.appendChild(css);
        return {
          elementName: type,
          tag: el
        };
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
    var element = document.querySelector('[data-title="' + id + '"]');
    if (element) {
      element.parentNode.removeChild(element);
    } else {
      var tag = styleTags.filter(function (tag) {
        return tag.elementName === id ? true : false;
      })[0].tag;
      document.head.appendChild(tag);
    }
  };

  document.body.appendChild(tools(buttonTags));

  selectors.forEach(function (item) {
    return addOnClick(item.type)(toggleStyleTag);
  }); /* addOnClick(item.type)(toggleStyleTag(item.type */
})(window);
