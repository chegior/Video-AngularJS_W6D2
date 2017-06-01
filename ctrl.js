angular.module("myApp",[]).controller("myCtrl",function($scope,niceService){

  $scope.test = "this is DONE";
  $scope.niceList = niceService.niceList;
  $scope.naughtyList = niceService.naughtyList;


  $scope.addNewPerson = function(){//this is the actual way to set up an FUNCTION
    var person = buildPerson();
    niceService.addPerson(person);

    }
//this function build a person
  function buildPerson(differenceScore){
       return {
         name:$scope.name,
         niceScore:$scope.niceScore,
         naughtyScore:$scope.naughtyScore
       }
     }




    console.log('function is addNewPerson()');


  // {
  //   name:'Luke Skywalker',
  // niceScore:89,
  // naughtyScore:80
  // }

});
