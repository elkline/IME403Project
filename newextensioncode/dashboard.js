// Event listener for adding a new website
document.getElementById('add-website-button').addEventListener('click', function() {
    var websiteList = document.getElementById('website-list');
    var newEntry = document.createElement('div');
    newEntry.innerHTML = `
      <input type="text" placeholder="Website URL" />
      <input type="number" placeholder="Time in minutes" />
    `;
    websiteList.appendChild(newEntry);
  });
  
  // Initialize other button listeners similar to the one above...
  