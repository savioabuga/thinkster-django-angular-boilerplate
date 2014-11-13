(function(){
  'use strict';

  angular
    .module('thinkster.config')
    .config(config)

  config.$inject = ['$locationProvider'];
  /**
  * @name config
  * @desc Enables HTML5 routing
  */
  function config($locationProvider) {
  	$locationProvider.html5Mode(true);
  	$locationProvider.hasPrefix('!');

  }

})();