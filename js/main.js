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
  var op1 = document.getElementsByName("p1");
  var op2 = document.getElementsByName("p2");
  var op3 = document.getElementsByName("p3");
  if(op1[0].checked == false && op1[1].checked == false && op1[2].checked == false ){
    alert ("Responder la pregunta 1")
  }
  else if(op2[0].checked == false && op2[1].checked == false && op2[2].checked == false ){
    alert ("Responder la pregunta 2")
  }
  else if(op3[0].checked == false && op3[1].checked == false && op3[2].checked == false ){
    alert ("Responder la pregunta 3")
  }
  else {
  op1[0].checked ? cb++ : cm++;
  op2[2].checked ? cb++ : cm++;
  op3[2].checked ? cb++ : cm++;
   document.getElementById("quiz1").innerHTML ="Tienes " +cb + " correcta(s)";
  }
}

document.getElementById("bt2").onclick = function(){
  var cb = 0;  //cuenta buenas
  var cm= 0; // cuenta malas
  var op1 = document.getElementsByName("p4");
  var op2 = document.getElementsByName("p5");
  var op3 = document.getElementsByName("p6");

  if(op1[0].checked == false && op1[1].checked == false && op1[2].checked == false ){
    alert ("Responder la pregunta 1")
  }
  else if(op2[0].checked == false && op2[1].checked == false && op2[2].checked == false ){
    alert ("Responder la pregunta 2")
  }
  else if(op3[0].checked == false && op3[1].checked == false && op3[2].checked == false ){
    alert ("Responder la pregunta 3")
  }
  else {
  op1[1].checked ? cb++ : cm++;
  op2[0].checked ? cb++ : cm++;
  op3[1].checked ? cb++ : cm++;
 document.getElementById("quiz2").innerHTML ="Tienes " +cb + " correcta(s)";
   }
}
