"use strict"

var r1 = [1540, 1130, 1580, 1105];
var r2 = [2010, 1168, 2305, 4102];
var r3 = [2450, 1847, 2710, 2391];
var r4 = [1845, 1491, 1284, 1575];
var r5 = [2120, 1767, 1599, 3888];
var textDisplay;

var regional_array=new Array(0);//This is not optimal syntax, doing this to
//demonstrate a way to use the push and pop methods of arrays in javascript

console.log(regional_array); // [region][quarter]--[outer array index][inner index]
//This is also how this is stored literally in memory. memory pos 1000, 1001...1005 (stop character)
//references the first array, 1006 1007...etc array 2. [0][2] tells comp to go to the storage for 1st array, and get 3rd value (index 2)
var $ = function (id) {
	return document.getElementById(id);
};

var displayQuarter=function() {
	var title_text = "Sales by Quarter"; //First Line displays the title text.
	regional_array = [r1, r2, r3, r4, r5];
	var text = "";

	let Q = new Array(5).fill(0);

	for (var j = 0; j < r1.length; j++) {
		for (var i = 0; i < regional_array.length; i++) {

			Q[j] += regional_array[i][j]; //sum up the array elements, because this is summing Q, we add q each time for the ith region for the jth quarter.


		}
	 	text += "Quarter " + (j + 1).toString() + ": $" + Q[j] + ".\n"; //set the text, add each time

	}
	$("results").value = title_text + "\n" + text;

};




var displayRegion=function(){
// Sales by region is the sum of each...
	regional_array=[r1,r2,r3,r4,r5];
	var title_text="Sales by Region";
	var i=0; var text="";
	do{ //demonstration of the use of do-while
		/* to use the reduce function, define an accumulator. Here, using the arrow function syntax for brevity.  */
		//const reducer = (accumulator, currentValue) =>return accumulator + currentValue; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

		text+="Region "+(i+1).toString()+": $"+regional_array[i].reduce((accumulator,currentValue)=>accumulator+currentValue)+".\n"; //reduce == reduce the array to single element, e.g. sum
		i++
	}
	while(i<regional_array.length);
	$("results").value=title_text+"\n"+text;
};





var displayTotalSales=function(){
	regional_array=[r1,r2,r3,r4,r5];
	var i=0; var j=0;
	var SUM=0;

	while(i<5){
		while(j<4){
			SUM+=regional_array[i][j];
			j++;
			console.log(regional_array[i][j]);

		}
		i++;
		j=0;
	}
	//var total=regional_array.reduce((accumulator,currentValue)=>accumulator+currentValue);
	$("results").value="Total Sales Are: "+"$"+SUM+".";
	//Total sales is just the sum. Sum up regional array

};

window.onload = function () {
$("show_quarter").onclick=displayQuarter;
$("show_region").onclick=displayRegion;
$("show_total").onclick=displayTotalSales;
$("results").value="Test \n";
};


