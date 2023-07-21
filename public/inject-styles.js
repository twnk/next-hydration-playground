(() => {
  const meta = document.getElementsByTagName('meta')[0];
  const style = document.createElement('style');
  style.innerHTML = '.video-js { display: none }';
  meta.after(style);
})()