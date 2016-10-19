var app = angular.module('gemStore', [])
   function StoreController(){
       "use strict";
       windows.alert("Bienvenue John 117 !");
   }

var gem = { name: 'Azurite', price: 2.95, description: "Une gemme qui claque garcon",canPurchase: true};
var gems = [{ name: 'Azurite', price: 2.95, canPurchase: true, description: "une gemme qui claque garcon"},
 { name: 'Bloodstone', price: 5.95, canPurchase: false ,description:"un joli rouge"},
 { name: 'Zircon', price: 3.95, canPurchase:true , description:"oh le beau vert ! "}];

app.controller('StoreController', function(){
   this.product = gem;
   this.products = gems;
});