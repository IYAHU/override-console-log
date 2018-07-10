/*
Author: Shammi Hans | Smi0001
Dependency: JavaScript (ES06)
Description: Overriding console.log to customize the log with current time along with passed log arguments
*/

var origlog = console.log;

console.log = function (obj, ...argumentArray) {
    var dateString = new Date().toLocaleString() + ' ';
    if (typeof obj === 'string') {
        argumentArray.unshift(dateString + obj);
    } else {
        // This handles console.log( object )
        argumentArray.unshift(obj);
        argumentArray.unshift(dateString);
    }
    origlog.apply(this, argumentArray);
};

console.logD = function (obj, ...argumentArray) {
    var dateString = new Date().toLocaleString() + ' ';
    if (typeof obj === 'string') {
        argumentArray.unshift(dateString + 'DEBUG ' + obj);
    } else {
        // This handles console.log( object )
        argumentArray.unshift(obj);
        argumentArray.unshift(dateString + 'DEBUG ');
    }
    origlog.apply(this, argumentArray);
};

console.logI = function (obj, ...argumentArray) {
    var dateString = new Date().toLocaleString() + ' ';
    if (typeof obj === 'string') {
        argumentArray.unshift(dateString + 'INFO ' + obj);
    } else {
        // This handles console.log( object )
        argumentArray.unshift(obj);
        argumentArray.unshift(dateString + 'INFO ');
    }
    origlog.apply(this, argumentArray);
};

console.logE = function (obj, ...argumentArray) {
    var dateString = new Date().toLocaleString() + ' ';
    if (typeof obj === 'string') {
        argumentArray.unshift(dateString + 'ERROR ' + obj);
    } else {
        // This handles console.log( object )
        argumentArray.unshift(obj);
        argumentArray.unshift(dateString + 'ERROR ');
    }
    origlog.apply(this, argumentArray);
};




module.exports.log = console.log;
module.exports.logI = console.logI;
module.exports.logD = console.logD;
module.exports.logE = console.logE;

console.log(`*override-console-log* is loaded`);

/*

================================ HOW TO USE ===================================
console.log('Original logging');     // [2018-4-5 16:43:23] Original logging
console.logI('info format');         // [2018-4-5 16:43:23] INFO info format
console.logD('debug fromat');        // [2018-4-5 16:43:23] DEBUG debug fromat
console.logE('Error format');        // [2018-4-5 16:43:23] ERROR Error format
OR
log('Original logging');     // [2018-4-5 16:43:23] Original logging
logI('info format');         // [2018-4-5 16:43:23] INFO info format
logD('debug fromat');        // [2018-4-5 16:43:23] DEBUG debug fromat
logE('Error format');        // [2018-4-5 16:43:23] ERROR Error format


NEW FEATURE
===========
Shorthand names available, just use log / logD / logE / logI


FEATURES COMING SOON 
====================
-- Possible edge case error check
-- Reset overriding console fn
-- Customize log-type tag (replace INFO/DEBUG/ERROR with your own keyword)
-- Customize Date/Time format
-- Update mocha test


*/
