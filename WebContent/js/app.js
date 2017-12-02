/**
 * 
 */
var app=angular.module('app',['ngRoute'])
app.config(function($routeProvider){
	alert("configured")
	$routeProvider
	.when('/registration',{
		templateUrl:'view/registration.html',
		controller:'UserControl'
	})
	.otherwise({templateUrl:'view/home.html'})
})