var names = ["Ben", "Joel", "Judy", "Anne"]; //Names Array CD, global
var scores = [88, 98, 77, 88]; //Scores Array CD, global
var textDisplay;


/* NOTE This syntax utilizes functional programming concepts w/ some object oriented text.

Note that a pure functiuon, given the same inputs, will always return the same outputs, with no side effects.  */
var $ = function (id) { return document.getElementById(id); };

var addElement = function () {
	// get user entries
	var name = $("name").value; //local
    var score  = parseInt( $("score").value );
    
    // check entries for validity
    if (name == "" || isNaN(score) || score < 0 || score > 100) {
    	alert("You must enter a name and a valid score");
    }
	else {
		names[names.length] = $("name").value; // syntax pushes
		scores[scores.length] = parseInt($("score").value);
	    $("name").value = "";
	    $("score").value = "";
	    $("results").value=""; //clear results on entry of new name
	}
    $("name").focus();
};

var determineBest=function(){
	// const high_score=([x,...xs], result=0)=> def(x)
	// ? x > result
	// 	? max(xs,x)
	// 		:max(xs,result)
	// 	: result

	let Max = Math.max(...scores); //ES6 includes the 3 dots.
	let Name=names[scores.indexOf(Max)]; //Name of high score = the index of the value of max score.


	$("results").value="High Score Student: "+Name+"\n"+"High Score = "+ Max;




};

var listData=function(){
	for(let i=0;i<names.length;i++){
		text+=names[i]+", "+scores[i]+"\n";

	}

	$("results").value=text;
};



let i=0;
while(i<names.length){


	i++
};
Text=

window.onload = function () {
	$("add").onclick = addElement;
	$("name").focus();
	$("show_best").onclick=determineBest;
	$("list_array").onclick=listData;
};


