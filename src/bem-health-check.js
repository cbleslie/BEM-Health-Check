(bemHealthCheck => {
  const selectors = [
    {type: 'objects', selector: 'o-', color: 'blue' },
    {type: 'components', selector: 'c-', color: 'green'},
    {type: 'utilities', selector: 'u-', color: 'orange'},
    {type: 'bemElement', selector: '__', color: 'purple'},
    {type: 'bemModifier', selector: '--', color: 'red'}
  ];



  // Creating things.
  const tools = buttons => {
    let tool = document.createElement("div");
    tool.setAttribute('style',`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: black;
    padding: .5rem;
    `);

    buttons.map(item => tool.appendChild(item))
    return tool;
  };
  const createButtons = id => color => {
    let el = document.createElement('button')
    el.setAttribute('id', id);
    el.innerHTML = id;
    return el;
  };
  const addOnClick = id => func => {
    let el = document.getElementById(id);
    console.log(el);
    console.log(func);
    el.onclick = func(id);
    console.log(el.onclick);
  };
  const createStyleTag = type => selector => color => {
    let el = document.createElement('style');
    el.setAttribute('title', type);
    el.innerHTML = `
      [class*="${selector}"] {
        outline: 2px solid ${color};
      };`;
    return el;
  };
  //iterating over things
  const buttonTags = selectors.map(item => createButtons(item.type)(item.color));
  const styleTags = selectors.map(item => createStyleTag(item.type)(item.selector)(item.color));

  const toggleStyleTag = id => {
    let element = document.querySelector(`[title="${id}"]`);
    if (element) {
      element.parentNode.removeChild(element);
    } else {
      //add
      // console.log('add triggered', element);
    }
  }

  document.body.appendChild(tools(buttonTags));

  selectors.forEach(item => {
    console.log(item.type);
    addOnClick(item.type)(toggleStyleTag)
  });/* addOnClick(item.type)(toggleStyleTag(item.type */
})(window);
