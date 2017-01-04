angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Favorites', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var favorites = [{
    id: 0,
    name: 'Lorem Ipsum',
    category: 'Ciência',
    image: 'img/ben.png'
  }, {
    id: 1,
    name: 'Lorem Ipsum',
    category: 'Tecnologia',
    image: 'img/max.png'
  }];

  return {
    getAll: function(page) {
      return favorites;
    }
  };
})

.factory('Categories', function() {
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
      return categories;
    },
    get: function(categoryId) {
      for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === parseInt(categoryId)) {
          return categories[i];
        }
      }
      return null;
    }
  };
})

.factory('Posts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var posts = [{
    id: 0,
    name: 'Lorem Ipsums',
    category: {"id": "1", "name": "Ciência"},
    image: 'img/ciencia.png',
    date: new Date(),
    is_favorite: false
  }, {
    id: 1,
    name: 'Lorem Tec',
    category: {"id": "2", "name": "Tecnologia"},
    image: 'img/perry.png',
    date: new Date(),
    is_favorite: false
  }];

  return {
    getAll: function() {
      return posts;
    },
    get: function(postId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(postId)) {
          return posts[i];
        }
      }
      return null;
    }
  };
})

;
