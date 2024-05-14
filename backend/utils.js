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
