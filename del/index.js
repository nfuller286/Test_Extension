// Runs when extension is loaded
function extensionLoaded() {
  console.log("[MyExtension] Loaded!");

  // Example: Add a button to the UI
  let btn = document.createElement('button');
  btn.innerText = 'Click Me';
  btn.style.position = 'fixed';
  btn.style.top = '10px';
  btn.style.right = '10px';
  btn.onclick = () => alert('Button clicked!');
  
  document.body.appendChild(btn);
}

// Hook into SillyTavern's extension loading
extensionLoaded();
