let timerInterval;
let duration = 0;

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  //console.log("Received message:", message); // Debugging statement

  if (message.action === "startTimer") {
    // Start the timer
    if (!timerInterval) {
      duration = message.duration; // Use the received duration directly
      //console.log("Received duration:", duration); // Debugging statement
      timerInterval = setInterval(updateTimer, 1000);
    }
  } else if (message.action === "stopTimer") {
    // Stop the timer
    clearInterval(timerInterval);
    timerInterval = null;
  }
});




// Update the timer
function updateTimer() {
  if (duration <= 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    openHTMLPage("page.html");
    return;
  }
  duration--;
  // Send a message to the popup with the updated timer value
  chrome.runtime.sendMessage({ action: "updateTimerDisplay", timeRemaining: formatTime(duration) });
}

// Open the specified HTML page
function openHTMLPage(pageName) {
  chrome.tabs.create({ url: chrome.runtime.getURL(pageName) });
}

// Format time in HH:MM:SS format
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}

// Pad single digits with leading zero
function pad(value) {
  return value < 10 ? '0' + value : value;
}

