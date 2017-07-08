(bemHealthCheck => {
  console.log('loaded');
  const select = selector => document.querySelectorAll(`[class*="${selector}"]`);
  const objects = select("o-");
  const components = select("c-");
  const utilities = select("u-");
  // const hack = select("_");
  const bemElement = select("__");
  const bemModifier = select("--");
  console.log(bemElement);
})(window);