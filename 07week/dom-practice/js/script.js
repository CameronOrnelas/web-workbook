'use strict';

window.onload = function(){

  // var listCountMessage = setListMesage();
  // var listItems = document.getElementById('shopping-list').getElementsByTagName('li');
  // alert('You have ' +listItems + ' items in your cart.');

  // var inputBox = document.createElement('input');
  //
  // inputBox.setAttribute('Id','textBox');

  createListCountHeaderElement();
  createListItemElement();
  // createNewItemTextInput();
  removeListItemElement();
  updateListCountHeaderMessage();
  setListMesage();
}



// this takes care of the 1st objective
  function setListMessage(){
    var list = document.getElementsByTagName('ul');
    var message = "You have "+list[0].children.length + "items in your shopping cart.";
    return message;
  }
// this take care of the 2nd objective
  function createListCountHeaderElement(){
    var listHeading = document.createElement("h2");
    var list = document.getElementsByTagName('ul');
    listHeading.innerHTML = "You have " + list[0].children.length + " items in your shopping cart.";
    document.getElementsByTagName("h1")[0].appendChild(listHeading);
    return listHeading;
  }
// this takes care of the 3rd objective
  function createListItemElement(){
    var listItem = document.createElement("li");
    var list = document.getElementsByTagName("ul");
    listItem.innerHTML = "New Item";
    list[0].appendChild(listItem);
    return listItem;
  }

  function removeListItemElement(){
    var list = document.getElementsByTagName("ul");
    var listItem = document.getElementsByTagName("li");
    list[0].removeChild(listItem);
    return list;
}
