angular
  .module('etsyCart')
  .controller('MainController', function($scope, EtsyService, CartService, $routeParams) {
    $scope.range = function(quantity){
      var options = [];
      for (var i = 1; i <= quantity; i++) {
        options.push(i);
      }
      return options;
    };

    EtsyService.getActiveListings().then(function(listings) {
      console.log(listings);
      window.glob = listings;
      $scope.listings = listings.data.results;
      for(var i = 0; i < $scope.listings.length; i++) {
        $scope.listings[i].purch_quantity = 1;
      }
    });

    console.log($routeParams);
    if($routeParams.listing_id) {
      EtsyService.getListing($routeParams.listing_id).then(function(listing) {
        console.log(listing);
        $scope.listing = listing.data.results[0];
        $scope.listing.purch_quantity = 1;
      });
    }

    $scope.addToCart = function(item) {
      CartService.addToCart(item);
    };
  }
);
