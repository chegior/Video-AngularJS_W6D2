angular.module('myApp').service('niceService',function(){
  this.niceList = [];
  this.naughtyList = [];

  this.addPerson = function(personObj){//pass and object
    var differenceScore = personObj.niceScore - personObj.naughtyScore;
    if (differenceScore >= 10){
      this.niceList.push(buildPerson(personObj.name, differenceScore));
    }else {
      this.naughtyList.push(buildPerson(personObj.name, differenceScore));
      }

  };
  function buildPerson(name,differenceScore){
    return{
      name:name,
      score:differenceScore
    }
  }
})
