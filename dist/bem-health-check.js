'use strict';

(function (bemHealthCheck) {
  console.log('loaded');
  var select = function select(selector) {
    return document.querySelectorAll("[class*=\"" + selector + "\"]");
  };
  var objects = select("o-");
  var components = select("c-");
  var utilities = select("u-");
  // const hack = select("_");
  var bemElement = select("__");
  var bemModifier = select("--");
  console.log(bemElement);
})(window);
