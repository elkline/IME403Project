chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "updateTimerDisplay") {
    console.log("Received updateTimerDisplay message with time remaining:", message.timeRemaining);
    // Parse message.timeRemaining into seconds
    const [hours, minutes, seconds] = message.timeRemaining.split(":").map(Number);
    const totalSeconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds);
    console.log("Total seconds:", totalSeconds);
    // Format the time into HH:MM:SS
    const formattedTime = formatTime(totalSeconds);
    console.log("Formatted time:", formattedTime);
    document.getElementById('timer').textContent = formattedTime;
  }
});

// Function to format time in HH:MM:SS format
function formatTime(seconds) {
  console.log("Seconds received in formatTime:", seconds);

  const hours = Math.floor(seconds / 3600);
  console.log("Hours:", hours);

  const minutes = Math.floor((seconds % 3600) / 60);
  console.log("Minutes:", minutes);

  const remainingSeconds = seconds % 60;
  console.log("Remaining seconds:", remainingSeconds);

  // Pad single digits with leading zeros
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


// Send a message to start the timer
function startTimer() {
  // Get the values from the input fields
  let hours = document.getElementById('hours').value;
  let minutes = document.getElementById('minutes').value;
  let seconds = document.getElementById('seconds').value;

  // Convert empty fields to 0 and parse input values as integers
  hours = hours === '' ? 0 : parseInt(hours);
  minutes = minutes === '' ? 0 : parseInt(minutes);
  seconds = seconds === '' ? 0 : parseInt(seconds);

  // Convert the input into seconds
  const duration = (hours * 3600) + (minutes * 60) + seconds;

  // Send the duration to start the timer
  chrome.runtime.sendMessage({ action: "startTimer", duration: duration });
}

// Send a message to stop the timer
function stopTimer() {
  chrome.runtime.sendMessage({ action: "stopTimer" });
}

document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');

  startBtn.addEventListener('click', startTimer);
  stopBtn.addEventListener('click', stopTimer);
});
