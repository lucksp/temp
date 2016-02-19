

app.controller('apresController', ['$scope', 'mtnFactory', function($scope, mtnFactory){

		$scope.mtnData = []
		var mtnPull = function(response){
			response.data.forEach(function(item){
				mtnFactory.getWeather(item.zip).then(weatherPull)
				$scope.mtnData.push(item)
				console.log('MtnData:', $scope.mtnData)
			})
		}
		mtnFactory.getMtns().then(mtnPull)

		$scope.weatherData = []
		var weatherPull = function(response){
			console.log(respose.data.data)
			response.data.data.weather.forEach(function(item){
				$scope.weatherData.push(item)
				console.log('weatherData', $scope.weatherData)
			})
		}
}]);
