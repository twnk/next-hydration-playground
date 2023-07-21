(() => {
  const firstHeader = document.getElementsByTagName('h2')[0];
  const ad = document.createElement('div');
  ad.innerText = 'Dynamically Injected Ad';
  const iframe = document.createElement('iframe');
  ad.appendChild(iframe);

  firstHeader.after(ad);
})()