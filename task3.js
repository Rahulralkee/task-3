var app = angular.module('weatherApp', []);

app.controller('WeatherController', function($scope, $http) {
  var apiKey = 'YOUR_API_KEY';
  var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=' + apiKey + '&units=metric';

  $http.get(apiUrl)
    .then(function(response) {
      $scope.weatherData = response.data;
    })
    .catch(function(error) {
      $scope.error = 'Error fetching weather data';
      console.error('Error fetching weather data:', error);
    });
});
