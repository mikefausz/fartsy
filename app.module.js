angular
  .module('etsyCart', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'MainController'
      })
      .when('/listing/:listing_id', {
        templateUrl: "templates/listing.html",
        controller: 'MainController'
      })
      .when('/cart', {
        templateUrl: "templates/cart.html",
        controller: 'CartController'
      });
  });
