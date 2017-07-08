(bemHealthCheck => {
  // console.log('loaded');
  const select = type => selector => document.body.querySelectorAll(`[class${type}="${selector}"]`);
  const containsSelect = select('*');

  const objects = containsSelect('o-');
  const components = containsSelect('c-');
  const utilities = containsSelect('u-');
  const bemElement = containsSelect('__');
  const bemModifier = containsSelect('--');

  const outline = selector => color => selector.forEach(item => item.setAttribute("style", `outline: 1px solid ${color};`));

  outline(objects)('purple');
  outline(components)('blue');
  outline(utilities)('orange');
  outline(bemElement)('green');
  outline(bemModifier)('yellow');

  const createElement = type => document.createElement(type);


})(window);