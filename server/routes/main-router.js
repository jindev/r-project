/**
 * Created by jin on 2016. 1. 17..
 */

var mainController = require('../controller/main-controller');

module.exports = function(app){
  app.get('/',mainController.init());
};