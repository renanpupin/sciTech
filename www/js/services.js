angular.module('starter.services', [])

.factory('Categories', function($http, $rootScope) {
// .factory('Categories', ['rootScope', function ($rootScope) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var categories = [{
    id: 0,
    name: 'Ciência',
    icon: 'ion-erlenmeyer-flask',
    image: 'img/ciencia.png',
    notify: true
  }, {
    id: 1,
    name: 'Astronomia',
    icon: 'ion-planet',
    image: 'img/astronomia.jpg',
    notify: false
  }, {
    id: 2,
    name: 'Tecnologia',
    icon: 'ion-social-rss-outline',
    image: 'img/tecnologia.jpg',
    notify: false
  }, {
    id: 3,
    name: 'Computação',
    icon: 'ion-bug',
    image: 'img/computacao.jpg',
    notify: true
  }, {
    id: 4,
    name: 'Economia',
    icon: 'ion-social-bitcoin-outline',
    image: 'img/economia.jpg',
    notify: false
  }];

  return {
    getAll: function() {
      // console.log($rootScope.server_url);
      var url = $rootScope.server_url + "/category";
      // console.log(url);

      return $http.get(url);
    },
    get: function(categoryId) {
      // for (var i = 0; i < categories.length; i++) {
      //   if (categories[i].id === parseInt(categoryId)) {
      //     return categories[i];
      //   }
      // }
      // return null;

      var url = $rootScope.server_url + "/category/"+categoryId;
      // console.log(url);

      return $http.get(url);
    }
  };
})

.factory('Posts', function($http, $rootScope) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // var posts = [{
  //   id: 0,
  //   name: 'Lorem Ipsums',
  //   category: {"id": "1", "name": "Ciência"},
  //   image: 'img/ciencia.png',
  //   date: new Date(),
  //   is_favorite: false
  // }, {
  //   id: 1,
  //   name: 'Lorem Tec',
  //   category: {"id": "2", "name": "Tecnologia"},
  //   image: 'img/perry.png',
  //   date: new Date(),
  //   is_favorite: false
  // }];

  return {
    getAll: function() {
      var url = $rootScope.server_url + "/news";
      return $http.get(url);
    },
    get: function(newsId) {
      var url = $rootScope.server_url + "/news/"+newsId;
      return $http.get(url);
    },
    getByCategory: function(categoryId) {
      var url = $rootScope.server_url + "/news/category/"+categoryId;
      return $http.get(url);
    },
    setFavorite: function(newsId) {
      var url = $rootScope.server_url + "/news/favorite/"+newsId;
      return $http.get(url);
    }
  };
})

.factory('Favorites', function($http, $rootScope) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // var favorites = [{
  //   id: 0,
  //   name: 'Lorem Ipsum',
  //   category: 'Ciência',
  //   image: 'img/ben.png'
  // }, {
  //   id: 1,
  //   name: 'Lorem Ipsum',
  //   category: 'Tecnologia',
  //   image: 'img/max.png'
  // }];

  return {
    getAll: function() {
      var url = $rootScope.server_url + "/news";
      return $http.get(url);
    }
  };
})

;
