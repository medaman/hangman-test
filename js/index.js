var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
var part = 1;
document.onkeyup = function() {
  var press = event.key;
  console.log(press);
  if(alphabet.includes(press)) {
	  document.getElementById(press).style.color = "transparent";
	  document.getElementById(press).style.textShadow = "0 0 10px rgba(255,255,255,0.5)";
	  document.getElementById(press).style.visibility = "hidden";
	  document.getElementById("part"+part).style.visibility = "hidden";
	  part++;
	  console.log(part);
  }
  if (press === " ") {
  	for(var i=0; i<alphabet.length; i++) {
	  document.getElementById(alphabet[i]).style.color = "white";
	  document.getElementById(alphabet[i]).style.textShadow = "";
	  document.getElementById(alphabet[i]).style.visibility = "visible";
	  document.getElementById("part1").style.visibility = "visible";
	  document.getElementById("part2").style.visibility = "visible";
	  document.getElementById("part3").style.visibility = "visible";
	  part=1;
  	}
  }
}
