rafflr.directive('chooseWinner', function(){
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
              '  <label for="email">Type in one of the following:'+
              '    <sapn ng-repeat="email in emails">'+
              '      <span ng-if="!$last"> {{email}}, </span>'+
              '      <span ng-if="$last">or {{email}}.</span>'+
              '    </sapn>'+
              '  </label><br/><br/>'+
              '  <input type="text" id="email" class="form-control" ng-model="userEmail">'+
              '  <br/>'+
              '  <input type="button" class="btn btn-primary" value="Submit" ng-click="validateMatchFunction()">'+
              '</div>',
    // templateUrl: '',
    // replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      
    }
  };
});