'use strict';

/* global angular:false */

// -------------------------------------------------
// ng-css-injector v1.0
// Written by Jonathan Hope
// License: MIT
// -------------------------------------------------
(function(angular) {
	var ngCssInjectorModule = angular.module('ngCssInjector', []);

	// Remove the injected stylesheet when the route changes.
	ngCssInjectorModule.run(['$rootScope', function ($rootScope) {
		$rootScope.$on('$locationChangeStart', function() {
			var stylesheet = document.getElementById('injected-stylesheet');
			if (stylesheet) {
				stylesheet.parentNode.removeChild(stylesheet);
			}
		});
	}]);

	// Inject a stylesheet with a provider so this can be used witht the route provider.
	ngCssInjectorModule.provider('$stylesheetInjector', function() {
		this.injectStylesheet = function(stylesheet) {
			return function() {
				var head =  angular.element(document.querySelector('head'));
				head.append('<link id="injected-stylesheet" rel="stylesheet" href="' + stylesheet + '" type="text/css" />');
			};
		};

		this.$get = function() {};
	});
}(angular));