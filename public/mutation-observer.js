(() => {
  const headObserver = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        const child = mutation.addedNodes[0] || mutation.removedNodes[0];
        const mutated = mutation.addedNodes[0] ? 'added' : 'removed';
        const childType = child.nodeName;
        const childAttrs = child.attributes;
        const placement = mutation.nextSibling === null ? 'end' : mutation.previousSibling === null ? 'start' : 'middle';

        if (childType !== 'SCRIPT') {
          console.log(
            `${childType} Node ${mutated} at ${placement} of <head>`,
             mutation,
             child,
             );
        } else {
          const src = childAttrs.getNamedItem('src')?.value;
          if (src) {
            const async = childAttrs.getNamedItem('async') ? 'async' : '';
            const defer = childAttrs.getNamedItem('defer') ? 'defer' : '';
            const fetchPriority = childAttrs.getNamedItem('fetchpriority')?.value || '';
            console.log(
              `SCRIPT Node ${mutated} at ${placement} of <head> with src ${src}, attrs ${async} ${defer} ${fetchPriority}`,
              mutation,
              child,
            );

          }
          console.log(
            `${childType} Node ${mutated} in middle of <head>`,
            mutation,
            child,
          );
        }
      } else if (mutation.type === "attributes") {
        console.log(`The ${mutation.attributeName} attribute was modified.`);
      } else {
        console.log(`Some other mutation: ${mutation}`);
      }
    }
  });

  // Start observing the target node for configured mutations
  headObserver.observe(
    document.getElementsByTagName("head")[0],
    { attributes: true, childList: true, subtree: true });
})();