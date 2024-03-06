let activeTabId = null;
let activeTabStartTime = Date.now();
let totalTimeSpent = {}; // Stores total time spent per domain

chrome.tabs.onActivated.addListener(activeInfo => {
    updateActiveTabTime();
    activeTabId = activeInfo.tabId;
    activeTabStartTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tabId === activeTabId && changeInfo.status === 'complete') {
        updateActiveTabTime();
        activeTabStartTime = Date.now();
    }
});

chrome.tabs.onRemoved.addListener(tabId => {
    if (tabId === activeTabId) {
        updateActiveTabTime();
        activeTabId = null;
    }
});

function updateActiveTabTime() {
    if (activeTabId !== null) {
        const endTime = Date.now();
        const timeSpent = endTime - activeTabStartTime;
        chrome.tabs.get(activeTabId, function(tab) {
            if (chrome.runtime.lastError || !tab || !tab.url) {
                console.log(chrome.runtime.lastError?.message);
                return;
            }
            const domain = new URL(tab.url).hostname;
            totalTimeSpent[domain] = (totalTimeSpent[domain] || 0) + timeSpent;
            checkLimits(domain);
        });
    }
}

function checkLimits(domain) {
    chrome.storage.local.get({limits: {}}, function(data) {
        const limitMilliseconds = parseInt(data.limits[domain], 10) * 60000;
        if (totalTimeSpent[domain] >= limitMilliseconds) {
            notifyTimeLimitExceeded(domain);
            // Resetting time spent is optional
            // totalTimeSpent[domain] = 0;
        }
    });
}

function notifyTimeLimitExceeded(domain) {
    chrome.notifications.create('', {
        type: 'basic',
        title: 'Time Limit Exceeded',
        message: `You have exceeded your time limit on ${domain}.`,
        priority: 2
    });
}