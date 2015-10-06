// Code goes here
angular.module('myApp', [])
.controller('myCtrl', function($scope) {

	$scope.FemaleNamePH='Female name';
	$scope.JobTitlePH='Job title';
	$scope.TediousTaskPH='Tedious task';
	$scope.DirtyTaskPH='Dirty task';
	$scope.CelebrityPH='Celebrity';
	$scope.UselessSkillPH='Useless skill';
	$scope.ObnoxiousCelebrityPH='Obnoxious celebrity';
	$scope.HugeNumberPH='Huge number';
	$scope.AdjectivePH='Adjective';

	$scope.generator = true;

	$scope.data = {}

	$scope.generateMadLib = function() {
		$scope.generator = false;  
	};

	$scope.startOver = function() {
		$scope.generator = true;
		$scope.data = {}
	}

});