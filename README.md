# Assignment Two

Specification:

1. Shopping list app with two lists: "To Buy" and "Already Bought"
2. All items start in "To Buy," with a "Bought" button
  * `Buy ${quantity} of ${name}`
  * On click, the item gets removed from the to buy list, and added to the bought list
  * To buy list is empty? Display "Everything is bought!"
3. "Already Bought" list:
  * Empty? "Nothing bought yet"
  * `Bought ${quantity} of ${name}`

## Requirements

* Two controllers
  * `ToBuyController`
  * `AlreadyBoughtController`
* One service using `.service`
  * `ShoppingListCheckOffService`
* Use `ng-if` to display the empty list messages
* Loop using `ng-repeat`
* Use an `IIFE`
* Protect from minification