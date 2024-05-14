
// Example function to format logs
function formatLog(logData) {
    const formattedLog = {
        timestamp: new Date().toISOString(),
        level: logData.level,
        log_string: logData.log_string,
        metadata: {
            source: logData.source
        }
    };
    return formattedLog;
}

// Example function to handle errors
function handleError(error) {
    console.error('An error occurred:', error);
}

module.exports = {
    formatLog,
    handleError
};
