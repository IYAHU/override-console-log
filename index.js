/*
Author: Shammi Hans | Smi0001
Dependency: JavaScript (ES06)
Description: Overriding console.log to customize the log with current time along with passed log arguments

================================ HOW TO USE ===================================
console.log('Original logging');     // [2018-4-5 16:43:23] Original logging
console.logI('info format');         // [2018-4-5 16:43:23] INFO info format
console.logD('debug fromat');        // [2018-4-5 16:43:23] DEBUG debug fromat
console.logE('Error format');        // [2018-4-5 16:43:23] ERROR Error format
*/

var origlog = console.log;

console.log = function (obj, ...argumentArray) {
    var dateString = new Date().toLocaleString();
    if (typeof obj === 'string')
        argumentArray.unshift(`[${dateString}] ${obj}`);
    else {
        // This handles console.log( object )
        argumentArray.unshift(obj);
        argumentArray.unshift(`[${dateString}]`);
    }
    origlog.apply(this, argumentArray);
};

console.logD = function (obj, ...argumentArray) {
    var dateString = new Date().toLocaleString();
    if (typeof obj === 'string')
        argumentArray.unshift(`[${dateString}] DEBUG ${obj}`);
    else {
        // This handles console.log( object )
        argumentArray.unshift(obj);
        argumentArray.unshift(`[${dateString}] DEBUG`);
    }
    origlog.apply(this, argumentArray);
};

console.logI = function (obj, ...argumentArray) {
    var dateString = new Date().toLocaleString();
    if (typeof obj === 'string')
        argumentArray.unshift(`[${dateString}] INFO ${obj}`);
    else {
        // This handles console.log( object )
        argumentArray.unshift(obj);
        argumentArray.unshift(`[${dateString}] INFO`);
    }
    origlog.apply(this, argumentArray);
};

console.logE = function (obj, ...argumentArray) {
    var dateString = new Date().toLocaleString();
    if (typeof obj === 'string')
        argumentArray.unshift(`[${dateString}] ERROR ${obj}`);
    else {
        // This handles console.log( object )
        argumentArray.unshift(obj);
        argumentArray.unshift(`[${dateString}] ERROR`);
    }
    origlog.apply(this, argumentArray);
};

console.log('Overriding console.log is enabled');


/*
FEATURES COMING SOON
====================
-- Possible edge case error check
-- Reset overriding console fn
-- Shorthand name just log/logD/logE/logI
-- Customize log-type tag (replace INFO/DEBUG/ERROR with your own keyword)
-- Customize Date/Time format
*/
