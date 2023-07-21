((remove = false) => {
  const bodyObserver = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        const child = mutation.addedNodes[0] || mutation.removedNodes[0];
        const mutated = mutation.addedNodes[0] ? 'added' : 'removed';
        const childType = child.nodeName;

        if (childType === '#text') return;

        const selfOrSibling = mutated === 'added' 
          // if the node is added, find out whether it's inside an adslot
          ? child
          // if the node is removed, it won't have a parent
          // so try and find it on a sibling instead
          : mutation.nextSibling || mutation.previousSibling;
        
        const closestAd = selfOrSibling?.closest('.ad-slot, .ad-banner, div[class^="ad-placement"]');
          

        if (closestAd) {
          console.log(
            `${childType} Node ${mutated} within Ad`,
          );

        } else {
          const parent = child.parentNode;
          if (child.classList.contains('ab_container')) {
            const removalMsg = remove ? 'removing' : '';
            console.log(
              `${childType} Node ${mutated} outside Ad with class 'new-ad-con'. ${removalMsg}`,
              mutation,
              child,
              'within',
              parent,
            );
            remove && child.remove();
          } else {
            console.log(
              `${childType} Node ${mutated} outside Ad`,
              mutation,
              child,
              'within',
              parent,
            );
          }
        }
      
      } else if (mutation.type === "attributes") {
        console.log(`The ${mutation.attributeName} attribute was modified.`);
      } else {
        console.log(`Some other mutation: ${mutation}`);
      }
    }
  });

  // Start observing the target node for configured mutations
  bodyObserver.observe(
    document.getElementById("__next"),
    { attributes: true, childList: true, subtree: true });
})(true);