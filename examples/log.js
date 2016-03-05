'use strict';

var logger = require('../');

// default log
var log = logger.log;
log.info('test', 'Hello World!');

//
log = logger.createLog('myapp');
log.info('test', 'Hello World!');
