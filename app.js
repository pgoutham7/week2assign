(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController',AlreadyBoughtController)
.controller('ToBuyController',ToBuyController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

ToBuyController.$inject= ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var itemShow = this;
  itemShow.items =ShoppingListCheckOffService.getItems()  ;
  itemShow.addToBoughtList=function(itemIndex){
    ShoppingListCheckOffService.addToBoughtList(itemIndex);
  };

}
function AlreadyBoughtController(ShoppingListCheckOffService){
  var itemsBought = this;
itemsBought.itemsBoughtList=ShoppingListCheckOffService.getItems2();
  }
function ShoppingListCheckOffService(){
  var service = this;
  var itemsBoughtList =[];
  var buyList=[{ itemname:"cookies",quantity:"10"},
  {itemname:"gatorade",quantity:"5"},
  {itemname:"stressbusters",quantity:"5"},
   {itemname:"gumbears",quantity:"10"},
   {itemname:"chips",quantity:"5"}]

service.getItems = function(){
  return buyList;
};
service.getItems2 = function(){
  return itemsBoughtList;
};
service.addToBoughtList = function(itemIndex){
itemsBoughtList.push(buyList[itemIndex]);
  buyList.splice(itemIndex, 1);
};


}
})();
