angular.module('crptFit.services', [])

// Start of Social Factory ====================================================
.factory('Social', ['$http', function($http){
  // Set up functions for ajax 
  var friends = [];
  var clients = [];
  var trainers = [
    // The data inside of this array will come from a user's trainers table
    // Right now, it is static information but will be pulled from the database
    {username: 'Chris Castillo'},
    {username: 'Paul Keller'}
  ];

  return {
    friendsList: function(){
      // Grab friends and store it in the friends array above (refactor - DRY)
      $http({
        method: 'GET',
        url: '/auth/friends'
      })
      .then(function(response){
        friends = response.data;
        console.log(friends);
      }, function(error){
        console.log(error);
      });
      return friends;
    },
    getFriendsLength: function(){
      return friends.length;
    },
    sendFriendRequest: function(friend){
      // This function needs the proper AJAX request
    },
    addFriend: function(friendId){
      // This function needs the proper AJAX request
      $http({
        method: 'POST',
        url: '/auth/friends/add:' + friendId
      });
      this.friendsList();
    },
    clientsList: function(){
      // This function needs the proper AJAX request
      // Grab clients and store them in the clients array above (refactor - DRY)
      $http({
        method: 'GET',
        url: '/auth/clients'
      })
      .then(function(response){
        clients = response.data;
        console.log(friends);
      }, function(error){
        console.log(error);
      });
      return clients;
    },
    getClientsLength: function(){
      return clients.length;
    },
    addClient: function(clientId){
      // This function needs the proper AJAX request
      $http({
        method: 'POST',
        url: '/auth/clients/add:' + clientId
      });
      this.clientsList();
    },
    trainersList: function(){
      // This function needs the proper AJAX request
      return trainers;
    },
    getTrainersLength: function(){
      return trainers.length;
    },
    sendTrainerRequest: function(){
      // This function needs the proper AJAX request
    },
    addTrainer: function(trainer){
      // This function needs the proper AJAX request
      trainers.push(trainer);
    }
  };
}])

// Start of Messages Factory ====================================================
.factory('Message', [function(){
  var messages = [
    {user: 'John', message:'bich you said we were working out, where are you?'},
    {user: 'Steve', message: 'I will hunt you down if you keep ditching me like this'},
    {user: 'Jane', message: 'HA you can only lift 130? my grandma can do that in her grave!'},
    {user: 'Mom', message: 'Casserole for dinner.. again'},
    {user: 'Ted', message: ':D'}
  ];
  var userCli;
//get user message table from db
  return {
    messageList : function(){
      return messages;
    },
    clickUser : function(){
      $('.userMessage').click(function(){
        for(var i = 0; i < messages.length; i++){
          var use = messages[i];
          if(this.id === use.user){
          console.log(use.message)
            userCli = use.message
          }
        }
      });
    },
    userMess : function(){
      return userCli;
    },
  };
}])
.factory('Progress', [function(){
  var strength = [
    //the data in this array will come from a users stats table
     10,
     20,
     30,
     50,
     75
  ];
  var weight = [
    //the data in this array will come from a users stats table
     745,
     600,
     300,
     200,
     190
  ];
  var speed = [
    //the data in this array will come from a users stats table and be modified before entry
    14,19,2,40,3,90
  ]
  return {
    checkMeStr : function(strong){
      console.log(strong, 'clicked');
      strength.push(strong);
    },
    checkMeSpd : function(timeSpd, distance){
      console.log(timeSpd, distance)
      speed.push((distance/timeSpd)*60)
    },
    checkMeWgt : function(weigh){
      console.log(weigh, 'clicked');
      weight.push(weigh);
    },
    getStr : function(){
      return strength;
    },
    getSpd : function(){
      return speed;
    },
    getWgt : function(){
      return weight;
    },
    postStr : function(val){
      //this function needs the proper AJAX request
      strength.push(val);
    },
    postSpd : function(){
      //this function needs the proper AJAX request
    },
    postWgt : function(){
      //this function needs the proper AJAX request
    }
  }
}]);
