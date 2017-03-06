function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

var mostarOcultar = function(divtexte) {
	var divtext = document.getElementById(divtexte);
  var text1 = document.getElementById("text1");
  var text2 = document.getElementById("text2");
  var text3 = document.getElementById("text3");

	if (divtext.id == "text1"  ) {
    divtext.style.display ="block";
		text3.style.display = "none";
    text2.style.display ="none";
	}
  if (divtext.id == "text2"  ) {
    divtext.style.display ="block";
    text1.style.display = "none";
    text3.style.display ="none";
  }
  if (divtext.id == "text3"  ) {
    divtext.style.display ="block";
    text1.style.display = "none";
    text2.style.display ="none";
  }
}

document.getElementById("bt1").onclick = function(){
  var cb = 0;  //cuenta buenas
  var cm= 0; // cuenta malas
  var op1 = document.getElementsByName("p1")[0].checked;
  var op2 = document.getElementsByName("p2")[2].checked;
  var op3 = document.getElementsByName("p3")[2].checked;

  op1 ? cb++ : cm++;
  op2 ? cb++ : cm++;
  op3 ? cb++ : cm++;

 document.getElementById("quiz1").innerHTML ="Tienes " +cb + " correcta(s)";
}

document.getElementById("bt2").onclick = function(){
  var cb = 0;  //cuenta buenas
  var cm= 0; // cuenta malas
  var op1 = document.getElementsByName("p4")[1].checked;
  var op2 = document.getElementsByName("p5")[0].checked;
  var op3 = document.getElementsByName("p6")[1].checked;

  op1 ? cb++ : cm++;
  op2 ? cb++ : cm++;
  op3 ? cb++ : cm++;

 document.getElementById("quiz2").innerHTML ="Tienes " +cb + " correcta(s)";
}
