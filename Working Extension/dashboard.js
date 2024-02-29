document.addEventListener('DOMContentLoaded', () => {
  const dashboardContent = document.getElementById('dashboard-content');

  // Load and display screen time for tracked websites
  chrome.storage.local.get(['trackedWebsites', 'screenTime'], function(result) {
      const trackedWebsites = result.trackedWebsites || {};
      const screenTime = result.screenTime || {};

      let contentHTML = '<ul>';
      Object.keys(trackedWebsites).forEach(site => {
          const limit = trackedWebsites[site];
          const time = screenTime[site] || 0; // Default to 0 if no screen time logged
          contentHTML += `<li>${site} - Time Limit: ${limit} minutes, Screen Time: ${time} minutes</li>`;
      });
      contentHTML += '</ul>';

      if (Object.keys(trackedWebsites).length === 0) {
          contentHTML = '<p>No websites are currently being tracked.</p>';
      }

      dashboardContent.innerHTML = contentHTML;
  });
});