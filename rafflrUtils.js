angular.module('rafflrUtils', []).service('rUtils', function(){
        // This function returns a random value from an array writing it this way
        // allows it to be more of a utility function.
        this.getRandomIndexValue = function(array){
          return array[Math.floor((Math.random() * array.length) )];
        };

        //This function returns true if the value exits in the array whether ot not 
        //case matches. If it does not match it returns false.
        this.containsValueIncaseSenitive = function(array, value){
          var testArray = [];
          array.forEach(function(oldValue){
            testArray.push(oldValue.toLowerCase());
          });
          //return the boolean result of this computation
          return testArray.indexOf(value.toLowerCase()) > -1;
        };

        //This function tests a string to see if it looks like an email.
        this.validateEmail = function (email) {
          var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
          return re.test(email);
        };
      });