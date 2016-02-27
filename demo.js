$(document).ready(function() {
	//get Taget Obj to insert Input
	var tagetBox = $("#demo");
	
	//Creat Input Obj
	var inputEdit_name = getIpt('myName','','','');
	var inputEdit_age = getIpt('myAge','','','');
	var inputEdit_button = getBt('myBt','','','').html("OK");
	
	//set Input place holder
	inputEdit_name.attr("placeholder","Please Input Your Name!");
	inputEdit_age.attr("placeholder","Please Input Age!");
	
	//set Button Action
	inputEdit_button.click(function(){alert("Hi "+inputEdit_name.val()+", u r "+inputEdit_age.val())})
	
	//set input obj attribute for key-board
	inputEdit_name.attr('mytype','name').attr('TabN','myAge').attr('nextgo','myBt').attr('isfix','true');
	inputEdit_age.attr('mytype','n').attr('TabL','myName').attr('nextgo','myBt').attr('isfix','true');
	
	//active 2 inputs keyboard event
	mykb.add(inputEdit_name);
	mykb.add(inputEdit_age);
	
	//append Elements to page;
	tagetBox.append(inputEdit_name).append(inputEdit_age).append(inputEdit_button);
	
	//
});
