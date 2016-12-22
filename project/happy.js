
var newImage= document.getElementById('image')
var newText= document.getElementById('text')

var count=0;
var counter=0;
var counter1=0;
arrayOfImage=["2.png","3.png", "4.png", "5.png", "6.png","7.png", "8.png","happy.png","happy.png","happy.png"];

function replace(){
	picture();
	color();
	text();
}

function picture() {
	if (count !==8){
		count ++;
	}
	if (count ===8){
		window.location.href="happy3.html"
	}
	if (count > arrayOfImage.length -1) {
		count=0;
	}
	newImage.src = arrayOfImage[count];
}

arrayOfColor=['#2B2B2B ', '#454545 ', '#545454 ', '#7A7A7A ', '#919191 ', '#B5B5B5 ', '#D9D9D9 ', '#ffffff'];
function color() {
	if (counter >= arrayOfColor.length){
		counter = 0;
	} 
	$("img").css("background-color", arrayOfColor[counter]);
	counter++;
}

arrayOfText=["life is better when you laughing", "See the best in people.Maybe no one ever saw them that way before", "The trick is to enjoy life. Dont waste away your days waiting for better ones ahead", "Miracles are happening for you right now","Be the type of energy that no matter where you go you allways add value to spaces and lives around you ","When you talk to yourself you are actually making yourself Smarter", "One small positive thought in the morning can change your entire day" ,"Just Smile =)","Smile =) "];
function text() {
	if (counter1 ===8){
		window.location.href="sad.html"
	}
	if (counter1 !==8){
		counter1 ++;

	}
	
	if (counter1 >= arrayOfText.length){
		counter1 = 0;
	} 
	$("#text").text(arrayOfText[counter1])
}

