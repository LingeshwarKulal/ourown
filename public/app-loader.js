// Application loader script
(function() {
  function log(message, type = 'info') {
    console[type](`[AppLoader] ${message}`);
  }

  // More ad-blocker friendly loading approach
  function safeLoadScript(src) {
    return new Promise((resolve, reject) => {
      // Create a script in a way that's less likely to be blocked
      const script = document.createElement('script');
      script.src = src;
      script.type = 'module';
      script.dataset.purpose = 'application'; // Add data attribute to indicate purpose
      script.async = true;
      
      script.addEventListener('load', () => {
        log(`Script loaded successfully: ${src}`);
        resolve();
      });
      
      script.addEventListener('error', (error) => {
        log(`Error loading script ${src}`, 'error');
        console.error(error);
        reject(new Error(`Failed to load ${src}`));
      });
      
      // Append to head instead of body
      document.head.appendChild(script);
    });
  }

  function detectEnvironment() {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'development';
    }
    return 'production';
  }

  // Initialize the application
  async function init() {
    try {
      log('Initializing application...');
      const env = detectEnvironment();
      log(`Environment detected: ${env}`);
      
      // In production, we load the compiled assets
      if (env === 'production') {
        // The path should match what Vite outputs in the dist folder
        await safeLoadScript('./assets/index.js');
      } else {
        // In development, we use the Vite dev server path
        await safeLoadScript('./src/main.jsx');
      }
    } catch (error) {
      log(`Initialization failed: ${error.message}`, 'error');
      document.getElementById('root').innerHTML = `
        <div style="padding: 20px; font-family: system-ui, sans-serif; max-width: 600px; margin: 50px auto; text-align: center;">
          <h2>We're experiencing technical difficulties</h2>
          <p>Our team has been notified and is working to resolve the issue.</p>
          <p>Please try reloading the page in a few minutes.</p>
          <button onclick="window.location.reload()">Reload Page</button>
        </div>
      `;
    }
  }

  // Run the initialization when the DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(); 