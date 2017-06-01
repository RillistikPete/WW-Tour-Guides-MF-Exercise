"use strict";

app.factory("guideFactory", function($q, $http) {


	function getBookInfo (){
		return $q(function (resolve, reject){
			$http.get("../data/guides.json")
			.then(function(data){
				console.log(data);
				resolve(data.data.guides);
			})
			.catch(function (error) {
				reject(error);
			});
	});
	}
return {getBookInfo};
});