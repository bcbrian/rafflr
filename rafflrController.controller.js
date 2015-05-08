rafflr.controller('rafflrController', ['$scope','rUtils', function($scope,rUtils){
  //attach emails to scope
  $scope.emails = [];
  $scope.userEmail = "";
  $scope.newEmail = "";

  //function that gets called when submit is clicked
  $scope.validateMatchFunction = function(){
    var randomEmail = rUtils.getRandomIndexValue($scope.emails);

    //notify user of chosen name
    alert("Random Name Choosen was "+randomEmail);

    //nested if statement to check if input was valid and then checking if it was a match
    if(rUtils.containsValueIncaseSenitive($scope.emails, $scope.userEmail)){
      if ($scope.userEmail.toLowerCase()===randomEmail.toLowerCase()){
        alert("It's a match!");
      } 
      else {
        alert("It's not a match.");
      }
    }else{
      alert("You cannot submit "+ $scope.userEmail);
    }
  };

  $scope.addNewEmail = function(email){
    // TODO: allow this functionality to be controlled by the raffle admin
    if(!rUtils.validateEmail(email)){
      return alert('This "'+email+'" is not a valid email.');
    }
    if(rUtils.containsValueIncaseSenitive($scope.emails, email)){
      return alert('This email is already entered.');
    }
    $scope.emails.push(email);
  };
}]);