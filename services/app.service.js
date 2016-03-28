angular
  .module('etsyCart')
  .service('EtsyService', function($http) {
    function buildUrl(query) {
      var base = 'https://openapi.etsy.com/v2/';
      var key = '?api_key=vuz7j3n72u1a676gknpx4gv1';
      var cors = 'https://free-cors-server.herokuapp.com/any-request/';
      var image = '&includes=MainImage';
      return cors + encodeURIComponent(base + query + key + image);
    }

    function getActiveListings() {
      return $http.get(buildUrl('listings/active'));
    }

    function getListing(id) {
      return $http.get(buildUrl('listings/' + id));
    }

    return {
      getActiveListings: getActiveListings,
      getListing: getListing,
    };
  });
