angular.module('crptFit.controllers', [])

.controller('LoginCtrl', [function() { }])

.controller('ProfileCtrl', [function() {
  var self = this;
  // Add a refreshing function here
  self.feed = [
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'}
  ];
 }])

.controller('HomeCtrl', [function() {
  var self = this;
  // Add a refreshing function here
  self.feed = [
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'},
    {username: 'Ricky Walker', update: 'Did 5000 squats!'}
  ];
 }])

.controller('MenuCtrl', [function() { }])

.controller('ProgressCtrl', ['$scope', function($scope) {
  $scope.chartConfig = {
      options: {
          chart: {
<<<<<<< HEAD
              type: 'spline'
=======
              type: 'line'
>>>>>>> db775dbacf86c5bc9bc339430d63b5fa4274fa1f
          }
      },
      series: [{
          data: [2, 16, 32, -5, 80]
      }],
      title: {
          text: ''
      },

      loading: false
  }
 }])

.controller('MessagesCtrl', [function() {
  //post and get messages controls here
  var self = this;
  var use;
  self.messages = [
    {user: 'John', message:'bich you said we were working out, where are you?'},
    {user: 'Steve', message: 'I will hunt you down if you keep ditching me like this'},
    {user: 'Jane', message: 'HA you can only lift 130? my grandma can do that in her grave!'},
    {user: 'Mom', message: 'Casserole for dinner.. again'},
    {user: 'Ted', message: ':D'}
  ]
  $('.userMessage').on('click', function(){
    $(this).attr('class')
  })
}])

.controller('SocialCtrl', ['Social', function(Social) {
  var self = this;
  // Add a refreshing function here
  self.friends = Social.friendsList();

  self.showFriends = function(){

  };

  self.showClients = function(){

  };

  self.showTrainers = function(){

  }
}])
