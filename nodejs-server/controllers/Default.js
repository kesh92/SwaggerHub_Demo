'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.exampleGET = function exampleGET (req, res, next) {
  Default.exampleGET(req.swagger.params, res, next);
};

module.exports.test_pathIdGET = function test_pathIdGET (req, res, next) {
  Default.test_pathIdGET(req.swagger.params, res, next);
};
