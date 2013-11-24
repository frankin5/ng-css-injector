Introduction
===============

This angularjs module facilitates injecting a single view specific css stylesheet into the header for a specfic route.

Usage
=====
First load the module:
```javascript
var mymodule = angular.module('mymodule', ['ngRoute', 'ngCssInjector'])
```
Then tie stylesheets to routes:
```javascript
mymodule.config(function($routeProvider, $stylesheetInjectorProvider){
    $routeProvider.when('/', { templateUrl:'home.html', resolve: {stylesheet: $stylesheetInjectorProvider.injectStylesheet('css/home.min.css')}});
});
```