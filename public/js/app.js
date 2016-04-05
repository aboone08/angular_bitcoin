angular.module('ngBit', []);
angular.module('ngBit')
       .factory("bitTrust", BitCoinService);

BitCoinService.$inject = ["$http"];

function BitCoinService($http){
  var base = "https://api.bitcoinaverage.com"

  return {
    getBitCoinData: getBitCoinData
  }
function getBitCoinData(everything){
  return $http.get(base+'/'+everything)
              .then(function(response){
                return response.data;
              })


}

}

angular.module("ngBit")
       .controller("bitController", bitController);

bitController.$inject = ["$scope", "bitTrust"];

function bitController($scope, bitTrust){
  $scope.getData = function(everything){
    console.log("I'm working");
    bitTrust.getBitCoinData(everything)
            .then(function(response){
              console.log(response)
            })
  }
}
