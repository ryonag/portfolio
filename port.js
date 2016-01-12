
 function Display(no){
  
     if(no == "no0"){
  
         document.getElementById("SW0").style.display = "block";
         document.getElementById("SW1").style.display = "none";
         document.getElementById("SW2").style.display = "none";
         document.getElementById("SW3").style.display = "none";
         document.getElementById("SW4").style.display = "none";
  
     }else if(no == "no1"){
  		 document.getElementById("SW0").style.display = "none";
         document.getElementById("SW1").style.display = "block";
         document.getElementById("SW2").style.display = "none";
         document.getElementById("SW3").style.display = "none";
         document.getElementById("SW4").style.display = "none";
  
     }else if(no == "no2"){
  document.getElementById("SW0").style.display = "none";
         document.getElementById("SW1").style.display = "none";
         document.getElementById("SW2").style.display = "block";
         document.getElementById("SW3").style.display = "none";
         document.getElementById("SW4").style.display = "none";
  
     }else if(no == "no3"){
     	document.getElementById("SW0").style.display = "none";
         document.getElementById("SW1").style.display = "none";
         document.getElementById("SW2").style.display = "none";
         document.getElementById("SW3").style.display = "block";
         document.getElementById("SW4").style.display = "none";
  
     }else if(no == "no4"){
  		document.getElementById("SW0").style.display = "none";
         document.getElementById("SW1").style.display = "none";
         document.getElementById("SW2").style.display = "none";
         document.getElementById("SW3").style.display = "none";
         document.getElementById("SW4").style.display = "block";
  
     }
  
 }