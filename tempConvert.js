document.addEventListener("DOMContentLoaded", function(){
	var button = document.querySelector('#Convert');
	button.addEventListener("click", function(){
		var input = document.getElementById("temp").value;
		var Celsius = Math.round((input - 32) / 1.8) ;
		console.log("celsius", Celsius)
		document.getElementById('result').innerHTML = Celsius
		if (Celsius > 0) {
			var resultObj=document.getElementById("result");
			resultObj.style.backgroundColor="#880000";
			resultObj.style.color="white";
		}
		else{
			var resultObj2=document.getElementById("result");
			resultObj2.style.backgroundColor="blue"
			resultObj2.style.color="white";
		}
		;
	});	

});

document.addEventListener("DOMContentLoaded", function(){
	var clear = document.querySelector('#Clear');
	clear.addEventListener("click", function(){
		var input = " "
		console.log(input);
		document.getElementById('result').innerHTML = input;
		document.getElementById('temp').value = input;
	})
}
)