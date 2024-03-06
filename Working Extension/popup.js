document.addEventListener('DOMContentLoaded', () => {
  const viewDashboardButton = document.getElementById('view-dashboard');
  const addWebsiteButton = document.getElementById('add-website');
  const removeWebsiteButton = document.getElementById('remove-website');
  const websiteInput = document.getElementById('website-input');
  const timeLimitInput = document.getElementById('time-limit-input');
  const websitesList = document.getElementById('websites-list');

  // Load initially saved websites and their time limits
  function loadWebsites() {
      chrome.storage.local.get(['trackedWebsites'], function(result) {
          websitesList.innerHTML = '';
          if (result.trackedWebsites) {
              Object.entries(result.trackedWebsites).forEach(([site, time]) => {
                  websitesList.innerHTML += `<span class="website-line">${site} - Time Limit: ${time} minutes<br></span>`;
              });
          }
      });
  }

  // Normalize and validate URLs
  function normalizeUrl(url) {
      try {
          let newUrl = new URL(url);
          return newUrl.hostname;
      } catch (_) {
          try {
              let newUrl = new URL('http://' + url);
              return newUrl.hostname;
          } catch (_) {
              return null; // If URL is invalid
          }
      }
  }

  // Add website with time limit
  addWebsiteButton.addEventListener('click', () => {
      const url = normalizeUrl(websiteInput.value);
      const timeLimit = parseInt(timeLimitInput.value, 10);
      if (!url || isNaN(timeLimit) || timeLimit < 1) {
          alert('Invalid URL or time limit. Please enter a valid URL and a positive number for the time limit.');
          return;
      }
      chrome.storage.local.get(['trackedWebsites'], function(result) {
          const websites = result.trackedWebsites || {};
          if (!websites[url]) {
              websites[url] = timeLimit;
              chrome.storage.local.set({trackedWebsites: websites}, function() {
                  loadWebsites();
                  websiteInput.value = '';
                  timeLimitInput.value = ''; // Clear input fields
                  alert('Website and time limit added.');
              });
          }
      });
  });

  // Remove website
  removeWebsiteButton.addEventListener('click', () => {
    const urlToRemove = normalizeUrl(websiteInput.value);
    if (!urlToRemove) {
        alert('Invalid URL. Please enter a valid URL to remove.');
        return;
    }
    chrome.storage.local.get(['trackedWebsites'], function(result) {
        const websites = result.trackedWebsites || {};
        if (websites[urlToRemove] !== undefined) {
            delete websites[urlToRemove];
            chrome.storage.local.set({trackedWebsites: websites}, function() {
                loadWebsites();
                websiteInput.value = ''; // Clear input field
                alert(`${urlToRemove} has been removed.`);
            });
        } else {
            alert('Website not found.');
        }
    });
});

  // Open dashboard
  viewDashboardButton.addEventListener('click', () => {
      chrome.runtime.openOptionsPage();
  });

  loadWebsites();
});
