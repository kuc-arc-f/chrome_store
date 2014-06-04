//top.js
//name= strlist

var mItems = new Array();


onload = function() {
	init_proc();
	
	document.querySelector('a#id-a-add').onclick = function() {
		click_addStore();
	}
	
	document.querySelector('a#id-a-show').onclick = function() {
		click_showStore();
	}
	
	document.querySelector('a#id-a-delete').onclick = function() {
		click_deleteStore();
	}
	
}

//
//function
//
function init_proc()
{
	chrome.storage.local.get( 'strlist' ,  function(value) {
		if(value && value.strlist) {
console.log( value.strlist );
console.log( 'len='+ value.strlist.length );
		  mItems = value.strlist;
		}
	});
}

function click_addStore()
{
  var ct = mItems.length;
  mItems[ct] = {'id': ct, 'text':  'test-'+ ct };
  chrome.storage.local.set({ 'strlist' : mItems });
}

function click_showStore()
{
	$('div#id-div-box').remove();
	var divShow =$('#id-div-diplay');
	var divBox= $('<div id="id-div-box"></div>')
	chrome.storage.local.get( 'strlist' ,  function(value) {
		if(value && value.strlist) {
console.log( value.strlist );
console.log( 'len='+ value.strlist.length );
			var items = value.strlist;
			for(var i=0; i< items.length ; i++){
				var itm = items[i];
				divBox.append('<p>'+ itm.text + '</p><br />');			
			}
		    divShow.append(divBox);
		}
	});

}

function click_deleteStore()
{
	mItems= new Array();
	chrome.storage.local.set({ 'strlist' : mItems });
	$('div#id-div-box').remove();
}
