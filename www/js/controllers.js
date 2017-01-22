angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {})

.controller('FeedCtrl', function($scope, $state, $stateParams, Categories, Posts) {

  $scope.favorited = false;

  Posts.getAll()
  .then(function(res) {
      console.log(res.data.news);
      $scope.posts = res.data.news;
  })
  .catch(function(err) {
      return err;
  });

  $scope.setFavorite = function(postId){
    console.log("set "+postId+" as favorite...");

    $scope.favorited = !$scope.favorited;

    //TODO: finish this call in server
    // Posts.setFavorite(postId)
    // .then(function(res) {
    //     console.log(res.data.status);
    //     if(res.data.status){
    //       $state.reload();
    //     }else{
    //       console.log(res);
    //       alert("Error! "+res.message);
    //     }
    // })
    // .catch(function(err) {
    //     return err;
    // });
  };

  $scope.postDetail = function(postId){
    console.log(postId);
    $state.go('tab.feed-detail', {postId: postId});
  };

})

.controller('CategoriesCtrl', function($scope,$state, Categories) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  Categories.getAll()
  .then(function(res) {
      console.log(res.data.category);
      $scope.categories = res.data.category;
  })
  .catch(function(err) {
      return err;
  });

  // console.log($scope.categories);

  $scope.view = "grid";

  $scope.categoryDetail = function(categoryId){
    $state.go('tab.category-detail', {categoryId: categoryId});  
  };

  $scope.toggleNotification = function(category,e){

      category.notify=!category.notify;

      e.stopPropagation();
  };
})

.controller('CategoryDetailCtrl', function($scope, $state, $stateParams, Categories, Posts) {

  $scope.favorited = false;

  Categories.get($stateParams.categoryId)
  .then(function(res) {
      console.log(res.data.category);
      $scope.category = res.data.category;

      return Posts.getByCategory($scope.category._id);
  })
  .then(function(res) {
      console.log(res.data.news);
      $scope.posts = res.data.news;
  })
  .catch(function(err) {
      return err;
  });

  $scope.setFavorite = function(postId){
    console.log("set "+postId+" as favorite...");

    $scope.favorited = !$scope.favorited;

    //TODO: finish this call in server
    // Posts.setFavorite(postId)
    // .then(function(res) {
    //     console.log(res.data.status);
    //     if(res.data.status){
    //       $state.reload();
    //     }else{
    //       console.log(res);
    //       alert("Error! "+res.message);
    //     }
    // })
    // .catch(function(err) {
    //     return err;
    // });
  };

  $scope.postDetail = function(postId){
    $state.go('tab.feed-detail', {postId: postId});
  };
})

.controller('FeedDetailCtrl', function($scope, $state, $stateParams, Categories, Posts) {

  $scope.favorited = false;

  Posts.get($stateParams.postId)
  .then(function(res) {
      console.log(res.data.news);
      $scope.post = res.data.news;
  })
  .catch(function(err) {
      return err;
  });

  $scope.setFavorite = function(postId){
    console.log("set "+postId+" as favorite...");

    $scope.favorited = !$scope.favorited;

    //TODO: finish this call in server
    // Posts.setFavorite(postId)
    // .then(function(res) {
    //     console.log(res.data.status);
    //     if(res.data.status){
    //       $state.reload();
    //     }else{
    //       console.log(res);
    //       alert("Error! "+res.message);
    //     }
    // })
    // .catch(function(err) {
    //     return err;
    // });
  };
  $scope.postDetail = function(postId){
    $state.go('tab.feed-detail', {postId: postId});
  };
})

.controller('FavoritesCtrl', function($scope, $state, $stateParams, Categories, Posts, Favorites) {
  // $scope.settings = {
  //   enableFriends: true
  // };

  $scope.page = 0;

  Posts.getAll()
  .then(function(res) {
      console.log(res.data.news);
      $scope.favorites = res.data.news;
  })
  .catch(function(err) {
      return err;
  });

})

.controller('ProfileCtrl', function($scope) {
  //
})

;
