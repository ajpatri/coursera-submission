(function () {
'use strict';

angular.module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingList", ShoppingListCheckOffService)

ToBuyController.$inject = ["ShoppingList"];
function ToBuyController(ShoppingList) {
  var toBuy = this;

  toBuy.list = ShoppingList.getToBuy();

  toBuy.buy = function(itemIndex) {
    ShoppingList.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ["ShoppingList"];
function AlreadyBoughtController(ShoppingList) {
  var alreadyBought = this;

  alreadyBought.list = ShoppingList.getBought();
}

function ShoppingListCheckOffService() {
  var ShoppingList = this;

  var toBuy = [
    {name: "Chips", quantity: 2},
    {name: "Cookies", quantity: 2},
    {name: "Soda", quantity: 12},
    {name: "Flour", quantity: 1},
    {name: "Milk", quantity: 1},
    {name: "Butter", quantity: 2},
    {name: "Lemons", quantity: 10},
    {name: "Limes", quantity: 10},
    {name: "Oranges", quantity: 10},
  ];

  var alreadyBought = [];

  ShoppingList.buyItem = function(itemIndex) {
    var boughtItem = toBuy.splice(itemIndex, 1)[0];
    alreadyBought.push(boughtItem);
  }

  ShoppingList.getToBuy = function() {
    return toBuy;
  }

  ShoppingList.getBought = function() {
    return alreadyBought;
  }
}

})();