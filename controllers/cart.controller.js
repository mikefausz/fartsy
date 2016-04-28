angular
  .module('etsyCart')
  .controller('CartController', function($scope, EtsyService, CartService) {
    $scope.range = function(quantity){
      var options = [];
      for (var i = 1; i <= quantity; i++) {
        options.push(i);
      }
      return options;
    };

    CartService.getCart().then(function(listings) {
      $scope.listings = listings;

      $scope.calcSubtotal = function() {
        var subtotal = 0;
        for(var i = 0; i < $scope.listings.length; i++) {
          subtotal += $scope.listings[i].price * $scope.listings[i].purch_quantity;
        }
        return subtotal;
      };
    });

    $scope.changeQuantity = function(editListing) {
      CartService.changeQuantity(editListing);
      var listIndex = $scope.listings.findIndex(function(el,idx,arr) {
         return el._id === editListing._id;
       });
       $scope.listings.splice(listIndex, 1[editListing]);
    };

    $scope.removeFromCart = function(listing) {
      CartService.removeFromCart(listing._id);
      var listIndex = $scope.listings.findIndex(function(el,idx,arr) {
         return el._id === listing._id;
       });
       $scope.listings.splice(listIndex, 1);
    };
  });
