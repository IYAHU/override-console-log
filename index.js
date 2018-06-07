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
const console = require('logger');

console.log('Overriding console.log is enabled');


/*
FEATURES COMING SOON
====================
-- Reset overriding console fn
-- Shorthand name just log/logD/logE/logI
-- Customize log-type tag (replace INFO/DEBUG/ERROR with your own keyword)
-- Customize Date/Time format
*/
