angular
  .module('etsyCart')
  .service('CartService', function($http, $q) {
    var tinytiny = 'http://tiny-tiny.herokuapp.com/collections/etsyCarttt';

    function addToCart(item) {
      var defer = $q.defer();
      $http.post(tinytiny, item)
          .success(function (data, status) {
            defer.resolve(data);
          })
          .error(function (data, status) {
            defer.reject(data);
          });
      return defer.promise;
    }

    function getCart() {
      var defer = $q.defer();
      $http.get(tinytiny)
          .success(function (data, status) {
            defer.resolve(data);
          })
          .error(function (data, status) {
            defer.reject(data);
          });
      return defer.promise;
    }

    function changeQuantity(item) {
      $http.put(tinytiny + '/' + item._id, item);
    }

    function removeFromCart(id) {
      $http.delete(tinytiny + '/' + id);
    }

    return {
      addToCart: addToCart,
      getCart: getCart,
      changeQuantity: changeQuantity,
      removeFromCart: removeFromCart
    };
  });
