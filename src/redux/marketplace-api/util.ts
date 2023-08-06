/**
 * Return message for HTTP status code
 * @param {number} status - HTTP status code
 * @returns {string} Message of network operation
 */
function _getStatusMessage(status: number) {
    let message = "";
    switch (status) {
        case 200:
            message = "All done. Request successfully executed";
            break;
        case 201:
            message = "Data successfully created";
            break;
        case 400:
            message = "Bad Request";
            break;
        case 401:
            message = "Need auth";
            break;
        case 404:
            message = "Not found";
            break;
        case 503:
            message = "Service unavailable. Try again later";
            break;
        default:
            message = "Something wrong. Client default error message";
            break;
    }
    return message;
}
