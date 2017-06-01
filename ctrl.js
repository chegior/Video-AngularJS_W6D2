angular.module("myApp",[]).controller("myCtrl",function($scope){

  $scope.test = "this is DONE";
  $scope.niceList = [];
  $scope.naughtyList = [];


  $scope.addNewPerson = function(){//this is the actual way to set up an FUNCTION
    var differenceScore = $scope.niceScore - $scope.naughtyScore;
    if (differenceScore >= 10){
      $scope.niceList.push(buildPerson(differenceScore));
    }else {
      $scope.naughtyList.push(buildPerson(differenceScore));
      }
    }
//this function build a person
  function buildPerson(differenceScore){
       return {
         name:$scope.name,
         score:differenceScore
       }
     }




    console.log('function is addNewPerson()');


  // {
  //   name:'Luke Skywalker',
  // niceScore:89,
  // naughtyScore:80
  // }

});
