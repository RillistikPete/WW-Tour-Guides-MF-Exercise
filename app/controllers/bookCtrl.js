"use strict";

app.controller("GuideController", function($scope, guideFactory) {


	guideFactory.getBookInfo()
	.then(function(data){
		console.log("tour guides", data);
		$scope.guides = data;
		console.log(data);
	});
});
