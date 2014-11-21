document.addEventListener("DOMContentLoaded", function(){
var button = document.querySelector('#Convert');
	button.addEventListener("click", function(){
	var input = document.getElementById("temp").value;
	var Celsius = Math.round((input - 32) / 1.8) ;
	console.log(Celsius);
	document.getElementById('result').innerHTML = Celsius;
	})
}
)
document.addEventListener("DOMContentLoaded", function(){
var clear = document.querySelector('#Clear');
	clear.addEventListener("click", function(){
	var input = " "
	console.log(input);
	document.getElementById('result').innerHTML = input;
	})
}
)