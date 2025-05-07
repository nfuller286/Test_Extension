function extensionLoaded() {
  console.log("[Test_Extension] Loaded!");

  // Create an iframe to hold your HTML UI
  let iframe = document.createElement('iframe');
  iframe.src = './extensions/Test_Extension/interface.html';
  iframe.style.position = 'fixed';
  iframe.style.top = '50px';
  iframe.style.right = '10px';
  iframe.style.width = '300px';
  iframe.style.height = '200px'; // smaller height now
  iframe.style.zIndex = '10000';
  iframe.style.border = '2px solid #ccc';
  iframe.style.backgroundColor = '#fff';
  iframe.style.borderRadius = '8px';
  iframe.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

  document.body.appendChild(iframe);

  // Listen for messages from the iframe
  window.addEventListener('message', function(event) {
    if (event.data?.action === 'toggleCollapse') {
      toggleMessages(event.data.collapse);
    }
  });
}

function toggleMessages(collapse) {
  // Select all .mes_text elements
  let messages = document.querySelectorAll('.mes_text');
  messages.forEach(msg => {
    msg.style.display = collapse ? 'none' : '';
  });
}

extensionLoaded();
