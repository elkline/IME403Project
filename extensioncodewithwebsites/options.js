document.getElementById('limitForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const website = document.getElementById('website').value;
    const limit = document.getElementById('limit').value;

    chrome.storage.local.get({limits: {}}, function(data) {
        const newLimits = {...data.limits, [website]: limit};
        chrome.storage.local.set({limits: newLimits}, function() {
            alert('Time limit saved.');
        });
    });
});
