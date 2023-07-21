(() => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `/waste-time.js?seed=${Math.random()}`;  
  
  const original = document.getElementById('throw-off-count');
  document.head.insertBefore(script, original);
})()