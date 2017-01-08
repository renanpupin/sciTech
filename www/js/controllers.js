angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {})

.controller('FeedCtrl', function($scope) {})

.controller('CategoriesCtrl', function($scope,$state, Chats, Categories) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.categories = Categories.getAll();

  $scope.view = "grid";

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.categoryDetail = function(categoryId){
    $state.go('tab.category-detail',{categoryId: categoryId});  
  };

  $scope.toggleNotification = function(category,e){

      category.notify=!category.notify;

      e.stopPropagation();
  };
})

.controller('CategoryDetailCtrl', function($scope, $stateParams, Categories) {
  $scope.category = Categories.get($stateParams.categoryId);
})

.controller('FavoritesCtrl', function($scope, Favorites) {
  // $scope.settings = {
  //   enableFriends: true
  // };

  $scope.page = 0;

  $scope.favorites = Favorites.getAll($scope.page);
})

.controller('ProfileCtrl', function($scope) {
  //
})

;
