rafflr.directive('addContestant', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    template: '<div class="container"> '+
              '  <label for="name">Add new Email</label><br/><br/>'+
              '  <input type="type" id="name" class="form-control" ng-model="newEmail">'+
              '  <br/>'+
              '  <input type="button" class="btn btn-primary" value="Add Email" ng-click="addNewEmail(newEmail)">'+
              '</div>',
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      
    }
  };
});