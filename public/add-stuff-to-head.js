
for (let step = 0; step < 5; step++) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `/waste-time.js?seed=${Math.random()}`;  
  
  var style = document.createElement('style');
  style.textContent ='/* .................. */';

  document.head.appendChild(script);
  document.head.insertBefore(style, document.head.firstChild);
}