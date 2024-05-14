
// function to capture logs using an API
async function captureLogs(apiEndpoint, logData) {
    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(logData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            console.log('Log captured successfully.');
        } else {
            console.error('Failed to capture log:', response.statusText);
        }
    } catch (error) {
        console.error('Error capturing log:', error);
    }
}

//  function to fetch logs from an API
async function fetchLogsFromAPI(apiEndpoint) {
    try {
        const response = await fetch(apiEndpoint);
        if (response.ok) {
            const logs = await response.json();
            console.log('Logs:', logs);
        } else {
            console.error('Failed to fetch logs:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching logs:', error);
    }
}

module.exports = {
    captureLogs,
    fetchLogsFromAPI
};
