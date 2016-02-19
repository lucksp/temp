app.factory('mtnFactory', ['$http', function($http){


// key: 3c9dedea970c88b460a8a65f876db

	return {

		getMtns : function(){
			return $http.get('./js/mtnData.json')
			},
		getWeather : function(zipcode){
			return $http.get('https://api.worldweatheronline.com/free/v2/ski.ashx?key=3c9dedea970c88b460a8a65f876db&q='+zipcode+'&format=json&includelocation=yes')
			}
	}

}]);

