function extensionLoaded() {
  console.log("[Test_Extension] Loaded!");

  // Create an iframe to hold your HTML UI
  let iframe = document.createElement('iframe');
  iframe.src = './extensions/Test_Extension/interface.html';
  iframe.style.position = 'fixed';
  iframe.style.top = '50px';
  iframe.style.right = '10px';
  iframe.style.width = '300px';
  iframe.style.height = '400px';
  iframe.style.zIndex = '10000';
  iframe.style.border = '2px solid #ccc';
  iframe.style.backgroundColor = '#fff';
  iframe.style.borderRadius = '8px';
  iframe.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

  document.body.appendChild(iframe);
}

extensionLoaded();
