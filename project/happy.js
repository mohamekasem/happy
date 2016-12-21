
arrayOfText=[];




var newImage= document.getElementById('image')
var count=0;
arrayOfImage=["2.png","3.png", "4.png", "5.png", "6.png","7.png", "8.png"];

function replace (){
picture();
color();
}

function picture() {
	count ++;
	if (count > arrayOfImage.length -1) {
		count = 0;
	}
	newImage.src = arrayOfImage[count];
}

arrayOfColor=["red", "green", "blue"];
function color() {
	if (count >= arrayOfColor.length){
		count = 0;
	} 
	$("image").css("background-color", arrayOfColor[count]);
	count++;
}
