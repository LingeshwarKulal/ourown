// Global error handler to catch and report JS loading errors
window.addEventListener('error', function(event) {
  if (event.error && event.error.message && event.error.message.includes('Unexpected token')) {
    console.error('Asset loading error detected. Details:', {
      message: event.error.message,
      source: event.filename,
      lineNumber: event.lineno,
      colNumber: event.colno,
      url: window.location.href,
      userAgent: navigator.userAgent
    });
    
    // Display user-friendly error
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; text-align: center;">
          <h2>Loading Error</h2>
          <p>We're experiencing a temporary technical issue loading the application.</p>
          <p>Please try:</p>
          <ul style="list-style: none; padding: 0;">
            <li>Refreshing the page</li>
            <li>Clearing your browser cache</li>
            <li>Trying again in a few minutes</li>
          </ul>
          <p>If the problem persists, please contact support.</p>
          <button onclick="window.location.href='/'">Return to Home</button>
        </div>
      `;
    }
    
    // Prevent the error from propagating
    event.preventDefault();
  }
}); 