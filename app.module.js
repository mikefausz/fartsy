angular
  .module('etsyCart', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'MainController'
      })
      .when('http://mikefausz.github.io/fartsy/#/listing/:listing_id', {
        templateUrl: "templates/listing.html",
        controller: 'MainController'
      })
      .when('http://mikefausz.github.io/fartsy/#/cart', {
        templateUrl: "templates/cart.html",
        controller: 'CartController'
      });
  });
