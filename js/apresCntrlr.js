

app.controller('apresController', ['$scope', 'mtnFactory', function($scope, mtnFactory){

		$scope.mtnData = []
		var mtnPull = function(response){
			response.data.forEach(function(item){
				mtnFactory.getWeather(item.zip).then(weatherPull)
				$scope.mtnData.push(item)
				console.log('MtnData:', item.zip)
			})
		}
		mtnFactory.getMtns().then(mtnPull)


// THIS VERSION PULLS WEATHER DATA FROM WWONLINE
		// $scope.weatherData = []
		// var weatherPull = function(response){
		// 	response.data.data.weather.forEach(function(item){
		// 		$scope.weatherData.push(item)
		// 		console.log('weatherData', $scope.weatherData)
		// 	})
		// }
// THIS VERSION PULLS WEATHER DATA FROM WUNDERGROUND
		$scope.weatherData = []
		var weatherPull = function(response){
			// response.data.current_observation.forEach(function(item) {
				$scope.weatherData.push(response.data)
				console.log($scope.weatherData)
			// console.log(response.data)
			// })
		}

// THIS VERSION PULLS NEAREST_AREA DATA FROM WWONLINE
		// $scope.otherMtnData = []
		// var weatherPull = function(response){
		// 	response.data.data.nearest_area.forEach(function(item){
		// 		console.log(response.data)
		// 		$scope.otherMtnData.push(item)
		// 		console.log('weatherData', $scope.otherMtnData)
		// 	})
		// }
}]);
