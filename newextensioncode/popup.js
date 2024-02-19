document.addEventListener('DOMContentLoaded', function() {
  var continueButton = document.getElementById('continue-button');
  continueButton.addEventListener('click', function() {
    // Load the dashboard screen
    document.body.innerHTML = ''; // Clear the popup's HTML
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      document.body.innerHTML = xhr.responseText;
      // Now initialize the dashboard functions here...
      initializeDashboard();
    };
    xhr.open('GET', chrome.runtime.getURL('dashboard.html'), true);
    xhr.send();
  }, false);
});

function initializeDashboard() {
  // Add event listeners for menu and settings buttons
  document.getElementById('menu-button').addEventListener('click', function() {
    // Load the menu screen
    // Similar to above, use XMLHttpRequest to load menu.html content
  });
  // More initialization code...
}
