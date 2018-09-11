(function() {
'use strict';

angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.result = "";
    // Used to color the text box based on the result
    $scope.validationClass = "";

    // Function called with ng-click to process the items and update the result
    $scope.displayResult = function() {
        $scope.result = processItems($scope.lunchItems);
        $scope.validationClass = $scope.result.valid ? "valid" : "invalid";
    }
}

// Takes a string of comma separated items and returns a result object based on
// the number of items found. The result object should be in the shape of:
//     { msg: "Message here", valid: true }
function processItems(itemString) {
    var emptyMsg = "Please enter data first";
    var goodMsg = "Enjoy!";
    var tooMuchMsg = "Too much!";

    // Empty string? don't bother to process
    if (itemString === "") {
        return { msg: emptyMsg, valid: false };
    }

    var itemList = itemString.split(",").filter(notEmpty);
    if (itemList.length <= 3) {
        return { msg: goodMsg, valid: true };
    } else {
        return { msg: tooMuchMsg, valid: true };
    }
}

// Helper function used to process the list of items, returning true if the
// given string is NOT blank
function notEmpty(string) {
    return string.trim() !== "" ? true : false;
}

})();