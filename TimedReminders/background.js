// Initializes or updates screen time for the current active tab
function updateScreenTime() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs.length > 0 && tabs[0].url) {
            const url = new URL(tabs[0].url).hostname;

            chrome.storage.local.get(['trackedWebsites', 'screenTime'], function(result) {
                const trackedWebsites = result.trackedWebsites || {};
                let screenTime = result.screenTime || {};

                // Check if this URL is in the list of tracked websites
                if (url in trackedWebsites) {
                    // Increment screen time for this URL
                    screenTime[url] = (screenTime[url] || 0) + 1; // Increment by 1 minute as an example
                    
                    // Check if the screen time exceeds the time limit
                    if (screenTime[url] >= trackedWebsites[url]) {
                        // Time limit exceeded, open a reminder tab
                        chrome.tabs.create({
                            url: 'data:text/html,' + encodeURIComponent(`
                                <!DOCTYPE html>
                                <html>
                                <head>
                                    <title>Time's Up!</title>
                                    <style>
                                        body {
                                            font-family: 'Arial', sans-serif;
                                            margin: 0;
                                            padding: 40px;
                                            background-color: rgba(255, 255, 255, 1);
                                            background: linear-gradient(180deg, rgb(82, 182, 154) 0%, rgb(255, 255, 255) 71.5%);
                                            // background-color: #f3f4f6;
                                            // color: #333;
                                            text-align: center;
                                            position: relative;
                                            width: 1440px;
                                            height: 1024px;
                                        }
                                        h1 {
                                            // color: #e53e3e;
                                            font-size: 20px;
                                            color: #FFFFFF;
                                        }
                                        p {
                                            font-size: 16px;
                                            color: #225F91;
                                        }
                                        button {
                                            background-color: #225F91;
                                            color: white;
                                            border: none;
                                            padding: 10px 20px;
                                            margin-top: 20px;
                                            font-size: 16px;
                                            border-radius: 12px;
                                            cursor: pointer;
                                        }
                                        button:hover {
                                            background-color: #3182ce;
                                        }
                                    </style>
                                </head>
                                <body>
                                    <h1>Hey, your time is up!</h1>
                                    <p>This is your friendly reminder to take a quick break! Stand up, stretch, and get a drink of water.</p>
                                    <button onclick="window.close();">Okay, I'll take a break</button>
                                </body>
                                </html>
                            `)
                        });
                        

                        // Optionally reset the timer or handle it differently
                    }
                    
                    // Save the updated screen time regardless of the limit
                    chrome.storage.local.set({screenTime}, function() {
                        console.log(`Screen time updated for ${url}: ${screenTime[url]} minutes`);
                    });
                }
            });
        }
    });
}

// Listen for tab activation and update screen time
//chrome.tabs.onActivated.addListener(updateScreenTime);

 //Listen for tab updates (e.g., page load) and update screen time
//hrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//    if (changeInfo.status === 'complete' && tab.active) {
//        updateScreenTime();
// }
//});

// Periodically update screen time every minute for the active tab
setInterval(updateScreenTime, 60000);
chrome.alarms.create("updateScreenTime", { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "updateScreenTime") {
    updateScreenTime();
  }
});


