(bemHealthCheck => {
  const selectors = [
    {type: 'Object', selector: 'o-', color: 'blue' },
    {type: 'Component', selector: 'c-', color: 'green'},
    {type: 'Utility', selector: 'u-', color: 'orange'},
    {type: 'Element', selector: '__', color: 'purple'},
    {type: 'Modifier', selector: '--', color: 'red'}
  ];

  // Creating things.
  const tools = buttons => {
    const tool = document.createElement("div");
    tool.setAttribute('style',`
      position: fixed;
      bottom: 0;
      right: 0;
      background-color: black;
      padding: 5px;
    `);

    buttons.map(item => tool.appendChild(item))
    return tool;
  };
  const createButtons = id => color => {
    const el = document.createElement('button')
    el.setAttribute('id', id);
    el.innerHTML = id;
    return el;
  };
  const addOnClick = id => func => {
    const el = document.getElementById(id);
    el.onclick = () => func(id);
  };
  const createStyleTag = type => selector => color => {
    const el = document.createElement('style');
    const css = document.createTextNode(`
      [class*="${selector}"] {
        outline: 2px solid ${color};
        position: relative;
      }
      [class*="${selector}"]::before {
        position: absolute;
        display: inline;
        content: '${type}';
        bottom: 100%;
        white-space: nowrap;
        width: auto;
        left: calc(0% - 3px);
        font-size: 10px;
        color: white;
        background-color: ${color};
        padding: 7px;
        line-height: 5px;
        border-radius: 5px 5px 0 0;
      }`
    );
    el.setAttribute('data-title', type);
    el.type = 'text/css';
    el.appendChild(css);
    return {
      elementName: type,
      tag: el
    };
  };
  //iterating over things
  const buttonTags = selectors.map(item => createButtons(item.type)(item.color));
  const styleTags = selectors.map(item => createStyleTag(item.type)(item.selector)(item.color));

  const toggleStyleTag = id => {
    const element = document.querySelector(`[data-title="${id}"]`);
    if (element) {
      element.parentNode.removeChild(element);
    } else {
      const tag = styleTags.filter(tag => (tag.elementName === id) ? true : false)[0].tag;
      document.head.appendChild(tag);
    }
  };

  document.body.appendChild(tools(buttonTags));

  selectors.forEach(item => {
    return addOnClick(item.type)(toggleStyleTag)
  });/* addOnClick(item.type)(toggleStyleTag(item.type */
})(window);
