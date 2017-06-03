angular.module('quoteBook').controller('myController', function($scope, myService){
  $scope.test = 'here';
  getQuotes();

  $scope.deleteMe = function(textToDelete){
    myService.removeData(textToDelete);
    getQuotes();
}

$scope.addQuote = function(){
  var newQuote = {
    text:$scope.newQuoteText,
    author:$scope.newQuoteAuthor
  }
  if(myService.addData(newQuote))
  {
    $scope.newQuoteText = '';
    $scope.newQuoteAuthor= '';
    getQuotes();
  }
}


  function getQuotes() {
    $scope.quotes = myService.getQuotes();
  }

});
