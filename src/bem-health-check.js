(bemHealthCheck => {

  const addOnClick = id => func => {
    let el = document.getElementById(id);
    console.log(el)
    el.onclick = func;
  };
  
  // console.log('loaded');
  const select = type => selector => document.body.querySelectorAll(`[class${type}="${selector}"]`);
  const containsSelect = select('*');

  const objects = containsSelect('o-');
  const components = containsSelect('c-');
  const utilities = containsSelect('u-');
  const bemElement = containsSelect('__');
  const bemModifier = containsSelect('--');

  const outline = selector => color => selector.forEach(item => {
    if (!item.hasAttribute('style')) {
      item.setAttribute('style', `outline: 1px solid ${color};`);
    } else {
      item.removeAttribute('style')
    }
  });

  const outlineObjects = () => outline(objects)('purple');
  const outlineComponents = () => outline(components)('blue');
  const outlineUtilities = () => outline(utilities)('orange');
  const outlineElements = () => outline(bemElement)('green');
  const outlineModifiers = () => outline(bemModifier)('yellow');
  
  const addTools = () => {
    let tool = document.createElement("div");
    tool.setAttribute('style',`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: black;
      padding: .5rem;
    `);
    tool.innerHTML = `
      <button id="objects">Objects</button>
      <button id="components">Components</button>
      <button id="utilities">Utilities</button>
      <button id="elements">BEM Elements</button>
      <button id="modifiers">BEM Modifiers</button>
    `;

    let context = document.body;
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