var khel1 = document.getElementById("playerone");
var khel2 = document.getElementById("playertwo");
var khel3 = document.getElementById("playerthree");
var khel4 = document.getElementById("playerfour");
var dicesound = document.getElementById("dicesound");
var a=0,b=0,c=0,d=0;
var i=0,j=0;
// here it is to store the value for dice for each color.
var valuered=0,valuegreen=0,valueblue=0,valueyellow=0;
// here it is to note wether a piece haas opened or not.
var r11=0,r22=0,r33=0,r44=0,g11=0,g22=0,g33=0,g44=0;
var b11=0,b22=0,b33=0,b44=0,y11=0,y22=0,y33=0,y44=0;
var reds=0,greens=0,blues=0,yellows=0;
// here rp is redspath.
var rp = ["2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","81"];
var gp = ["15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","1","2","3","4","5","6","7","8","9","10","11","12","13","58","59","60","61","62","81"];
var yp = ["28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","63","64","65","66","67","81"];
var bp = ["41","42","43","44","45","46","47","48","49","50","51","52","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","68","69","70","71","72","81"];
// rpv and all is redpathvalue
var rpv1=0,rpv2=0,rpv3=0,rpv4=0,gpv1=0,gpv2=0,gpv3=0,gpv4=0,bpv1=0,bpv2=0,bpv3=0,bpv4=0,ypv1=0,ypv2=0,ypv3=0,ypv4=0;
$(document).ready(function()
{
   // this code is for making the board ready befor play...
   $("#mainpop").show();
   $("#overlay").show();
  $("#mainpop").animate({opacity : "1"},2000);


 $("#letsplay").click(function(){    // this code here is for knowing the players who are playing this games 
    var z=0;
     if(khel1.value.trim()!="" )
     {
        z++;
     }
     if(khel2.value.trim()!="" )
     {
        z++;
     }
     if(khel3.value.trim()!="" )
     {
        z++;
     }
     if(khel4.value.trim()!="" )
     {
        z++;
     }
     if(z>=2 )
     {
         $("#mainpop").hide();
         $("#overlay").hide();

         if(khel1.value.trim()!="" )
         {
           document.getElementById("player1onboardname").innerHTML=khel1.value;
           document.getElementById("player1onboardname").style.visibility = 'visible';
           document.getElementById("redpiece1").style.visibility = 'visible';
           document.getElementById("redpiece2").style.visibility = 'visible';
           document.getElementById("redpiece3").style.visibility = 'visible';
           document.getElementById("redpiece4").style.visibility = 'visible';
            a=1;
           
         }
         if(khel2.value.trim()!="" )
         {
            document.getElementById("player2onboardname").innerHTML=khel2.value;
            document.getElementById("player2onboardname").style.visibility = 'visible';
            document.getElementById("greenpiece1").style.visibility = 'visible';
            document.getElementById("greenpiece2").style.visibility = 'visible';
            document.getElementById("greenpiece3").style.visibility = 'visible';
            document.getElementById("greenpiece4").style.visibility = 'visible';
            b=2;
         }
         if(khel3.value.trim()!="" )
         {
            document.getElementById("player3onboardname").innerHTML=khel3.value;
            document.getElementById("player3onboardname").style.visibility = 'visible';
            document.getElementById("bluepiece1").style.visibility = 'visible';
            document.getElementById("bluepiece2").style.visibility = 'visible';
            document.getElementById("bluepiece3").style.visibility = 'visible';
            document.getElementById("bluepiece4").style.visibility = 'visible';
            c=3;
         }
         if(khel4.value.trim()!="" )
         {
            document.getElementById("player4onboardname").innerHTML=khel4.value;
            document.getElementById("player4onboardname").style.visibility = 'visible';
            document.getElementById("yellowpiece1").style.visibility = 'visible';
            document.getElementById("yellowpiece2").style.visibility = 'visible';
            document.getElementById("yellowpiece3").style.visibility = 'visible';
            document.getElementById("yellowpiece4").style.visibility = 'visible';
            d=4;
         }
         if(khel1.value.trim()!="" )
         {
            document.getElementById("rolldice").style.backgroundColor = 'red';
            document.getElementById("namedice").style.color = 'red';
         }
         else if (khel2.value.trim()!="" )
         {
            document.getElementById("rolldice").style.backgroundColor = 'green';
            document.getElementById("namedice").style.color = 'green';
         }
         else if(khel3.value.trim()!="" )
         {
            document.getElementById("rolldice").style.backgroundColor = 'blue';
            document.getElementById("namedice").style.color = 'blue';
         }
     }
     else
     {
         alert("minimum 2 players required  to start the game"); 
     }     
 });

   // here the coding of the random dice is given .

 $("#rolldice").click(function()
 {

        dicesound.play();
        setTimeout(imagedice,800);
        function imagedice()
        {
   const randomnumber = Math.floor(Math.random()*6) + 1;
   const randomimage = 'dice'+ randomnumber + '.png';
   document.getElementById("diceimage").src=randomimage;

   if(i>=4)
   {
      i=0;
   }
  while(i<4)
  {
     i++;

     // here it is for the color changing of dice according to turns
   if(i==a)
   {
      document.getElementById("player1onboardname").style.boxShadow = "10px 10px grey";
      document.getElementById("player2onboardname").style.boxShadow = "2px 2px grey";
      document.getElementById("player3onboardname").style.boxShadow = "2px 2px grey";
      document.getElementById("player4onboardname").style.boxShadow = "2px 2px grey";
      valuered = randomnumber;
      if(khel2.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'green';
         document.getElementById("namedice").style.color = 'green';
      }
      else if(khel3.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'blue';
         document.getElementById("namedice").style.color = 'blue';
      }
      else if (khel4.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'yellow';
         document.getElementById("namedice").style.color = 'yellow';
      }
     break;
   }
   if(i==b)
   {
      document.getElementById("player2onboardname").style.boxShadow = "10px 10px grey";
      document.getElementById("player1onboardname").style.boxShadow = "2px 2px grey";
      document.getElementById("player3onboardname").style.boxShadow = "2px 2px grey";
      document.getElementById("player4onboardname").style.boxShadow = "2px 2px grey";
      valuegreen = randomnumber;
      if(khel3.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'blue';
         document.getElementById("namedice").style.color = 'blue';
      }
      else if(khel4.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'yellow';
         document.getElementById("namedice").style.color = 'yellow';
      }
      else if (khel1.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'red';
         document.getElementById("namedice").style.color = 'red';
      }
      break;
   }
     if(i==c)
   {
      document.getElementById("player3onboardname").style.boxShadow = "10px 10px grey";
      document.getElementById("player2onboardname").style.boxShadow = "2px 2px grey";
      document.getElementById("player1onboardname").style.boxShadow = "2px 2px grey";
      document.getElementById("player4onboardname").style.boxShadow = "2px 2px grey";
      valueblue = randomnumber;
      if(khel4.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'yellow';
         document.getElementById("namedice").style.color = 'yellow';
      }
      else if(khel1.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'red';
         document.getElementById("namedice").style.color = 'red';
      }
      else if (khel2.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'green';
         document.getElementById("namedice").style.color = 'green';
      }
      break;
   }
     if(i==d)
   {
      document.getElementById("player4onboardname").style.boxShadow = "10px 10px grey";
      document.getElementById("player2onboardname").style.boxShadow = "2px 2px grey";
      document.getElementById("player3onboardname").style.boxShadow = "2px 2px grey";
      document.getElementById("player1onboardname").style.boxShadow = "2px 2px grey";
      valueyellow = randomnumber;
      if(khel1.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'red';
         document.getElementById("namedice").style.color = 'red';
      }
      else if(khel2.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'green';
         document.getElementById("namedice").style.color = 'green';
      }
      else if (khel3.value.trim()!="")
      {
         document.getElementById("rolldice").style.backgroundColor = 'blue';
         document.getElementById("namedice").style.color = 'blue';
      }
      break;
   }
   if(i>=4)
   {
      i=0;
   }
 } 

 if((valuered==6 && r11==0) ||(valuered==6 && r22==0))
 {
   document.getElementById("rolldice").disabled = true ;
 }
 else if((valuered==6 && r33==0) ||(valuered==6 && r44==0))
 {
   document.getElementById("rolldice").disabled = true ;
 }
 else if((valuegreen==6 && g11==0) ||(valuegreen==6 && g22==0))
 {
   document.getElementById("rolldice").disabled = true ;
 }
 else if((valuegreen==6 && g33==0) ||(valuegreen==6 && g44==0))
 {
   document.getElementById("rolldice").disabled = true ;
 }
 else if((valueblue==6 && b11==0) ||(valueblue==6 && b22==0))
 {
   document.getElementById("rolldice").disabled = true ;
 }
 else if((valueblue==6 && b33==0) ||(valueblue==6 && b44==0))
 {
   document.getElementById("rolldice").disabled = true ;
 }
 else if((valueyellow==6 && y11==0) ||(valueyellow==6 && y22==0))
 {
   document.getElementById("rolldice").disabled = true ;
 }
 else if((valueyellow==6 && y33==0) ||(valueyellow==6 && y44==0))
 {
   document.getElementById("rolldice").disabled = true ;
 }
 else
 {
   document.getElementById("rolldice").disabled = false ;
 }
}
 });
});

// now here goes the main movement logic of the game after thr board is ready.

function redpiece1(){
   if(valuered==6 && r11==0)
   {
   document.getElementById(rp[0]).innerHTML = "<img onclick='mover1()'  id ='redpiece1' src='redpiece.jpg' />";
   valuered=0;
   r11=1;
   reds++;
   document.getElementById("red11").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function redpiece2(){
   if(valuered==6 && r22==0)
   {
   document.getElementById(rp[0]).innerHTML = "<img onclick='mover2()' id ='redpiece2' src='redpiece.jpg' />";
   valuered=0;
   r22=1;
   reds++;
   document.getElementById("red22").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function redpiece3(){
   if(valuered==6 && r33==0)
   {
   document.getElementById(rp[0]).innerHTML = "<img onclick='mover3()' id ='redpiece3' src='redpiece.jpg' />";
   valuered=0;
   r33=1;
   reds++;
   document.getElementById("red33").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function redpiece4(){
   if(valuered==6 && r44==0)
   {
   document.getElementById(rp[0]).innerHTML = "<img onclick='mover4()' id ='redpiece4' src='redpiece.jpg' />";
   valuered=0;
   r44=1;
   reds++;
   document.getElementById("red44").innerHTML = "";
   document.getElementById("rolldice").disabled = fasle ;
   }
}

function greenpiece1(){
   if(valuegreen==6 && g11==0)
   {
   document.getElementById(gp[0]).innerHTML = "<img onclick='moveg1()'  id ='greenpiece1' src='greenpiece.jpg' />";
   valuegreen=0;
   g11=1;
   greens++;
   document.getElementById("green11").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function greenpiece2(){
   if(valuegreen==6 && g22==0)
   {
   document.getElementById(gp[0]).innerHTML = "<img onclick='moveg2()' id ='greenpiece2' src='greenpiece.jpg' />";
   valuegreen=0;
   g22=1;
   greens++;
   document.getElementById("green22").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function greenpiece3(){
   if(valuegreen==6 && g33==0)
   {
   document.getElementById(gp[0]).innerHTML = "<img onclick='moveg3()' id ='greenpiece3' src='greenpiece.jpg' />";
   valuegreen=0;
   g33=1;
   greens++;
   document.getElementById("green33").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function greenpiece4(){
   if(valuegreen==6 && g44==0)
   {
   document.getElementById(gp[0]).innerHTML = "<img onclick='moveg4()' id ='greenpiece4' src='greenpiece.jpg' />";
   valuegreen=0;
   g44=1;
   greens++;
   document.getElementById("green44").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function bluepiece1(){
   if(valueblue==6 && b11==0)
   {
   document.getElementById(bp[0]).innerHTML = "<img onclick='moveb1()' id ='bluepiece1' src='bluepiece.jpg' />";
   valueblue=0;
   b11=1;
   blues++;
   document.getElementById("blue11").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}

function bluepiece2(){
   if(valueblue==6 && b22==0)
   {
   document.getElementById(bp[0]).innerHTML = "<img onclick='moveb2()' id ='bluepiece2' src='bluepiece.jpg' />";
   valueblue=0;
   b22=1;
   blues++;
   document.getElementById("blue22").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function bluepiece3(){
   if(valueblue==6 && b33==0)
   {
   document.getElementById(bp[0]).innerHTML = "<img onclick='moveb3()' id ='bluepiece3' src='bluepiece.jpg' />";
   valueblue=0;
   b33=1;
   blues++;
   document.getElementById("blue33").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function bluepiece4(){
   if(valueblue==6 && b44==0)
   {
   document.getElementById(bp[0]).innerHTML = "<img onclick='moveb4()' id ='bluepiece4' src='bluepiece.jpg' />";
   valueblue=0;
   b44=1;
   blues++;
   document.getElementById("blue44").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function yellowpiece1(){
   if(valueyellow==6 && y11==0)
   {
   document.getElementById(yp[0]).innerHTML = "<img onclick='movey1()' id ='yellowpiece1' src='yellowpiece.jpg' />";
   valueyellow=0;
   y11=1;
   yellows++;
   document.getElementById("yellow11").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function yellowpiece2(){
   if(valueyellow==6 && y22==0)
   {
   document.getElementById(yp[0]).innerHTML = "<img onclick='movey2()' id ='yellowpiece2' src='yellowpiece.jpg' />";
   valueyellow=0;
   y22=1;
   yellows++;
   document.getElementById("yellow22").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function yellowpiece3(){
   if(valueyellow==6 && y33==0)
   {
   document.getElementById(yp[0]).innerHTML = "<img onclick='movey3()' id ='yellowpiece3' src='yellowpiece.jpg' />";
   valueyellow=0;
   y33=1;
   yellows++;
   document.getElementById("yellow33").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
function yellowpiece4(){
   if(valueyellow==6 && y44==0)
   {
   document.getElementById(yp[0]).innerHTML = "<img onclick='movey4()' id ='yellowpiece4' src='yellowpiece.jpg' />";
   valueyellow=0;
   y44=1;
   yellows++;
   document.getElementById("yellow44").innerHTML = "";
   document.getElementById("rolldice").disabled = false ;
   }
}
// here goes the movement of pieces on the board code
function mover1()
{
   if((rp[rpv1]=="2" || rp[rpv1]=="49") || (rp[rpv1]=="15" || rp[rpv1]=="10"))
   {
      document.getElementById(rp[rpv1]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((rp[rpv1]=="23" || rp[rpv1]=="28") || (rp[rpv1]=="36" || rp[rpv1]=="41"))
    {
      document.getElementById(rp[rpv1]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(rp[rpv1]).innerHTML = "";
   }

   if(rpv1==rpv2 && r22==2)
   {
    document.getElementById(rp[rpv2]).innerHTML = "<img onclick='mover2()' id='redpiece2' src = 'redpiece.jpg'/>";
   }
   else if(rpv1==rpv3 && r33==2)
   {
    document.getElementById(rp[rpv3]).innerHTML = "<img onclick='mover3()' id='redpiece3' src = 'redpiece.jpg'/>";
   }
   else if(rpv1==rpv4 && r44==2)
   {
    document.getElementById(rp[rpv4]).innerHTML = "<img onclick='mover4()' id='redpiece4' src = 'redpiece.jpg'/>";
   }

    rpv1 = rpv1 + valuered;
    valuered = 0;
    document.getElementById(rp[rpv1]).innerHTML="<img onclick='mover1()'  id ='redpiece1' src='redpiece.jpg' />"; 
    document.getElementById("rolldice").disabled = false ;
    reds--; 
    r11=2;  
    if(reds>0 && r22==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover2()' id='redpiece2' src = 'redpiece.jpg'/>";
    }
    else if(reds>0 && r33==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover3()' id='redpiece3' src = 'redpiece.jpg'/>";
    }
    else if(reds>0 && r44==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover4()' id='redpiece4' src = 'redpiece.jpg'/>";
    }
// here goes the different color overlapping logic.
}
function mover2()
{
   if((rp[rpv2]=="2" || rp[rpv2]=="49") || (rp[rpv2]=="15" || rp[rpv2]=="10"))
   {
      document.getElementById(rp[rpv2]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
   else if((rp[rpv2]=="23" || rp[rpv2]=="28") || (rp[rpv2]=="36" || rp[rpv2]=="41"))
   {
      document.getElementById(rp[rpv2]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
   else{
   document.getElementById(rp[rpv2]).innerHTML = "";
   }

   if(rpv2==rpv1 && r11==2)
   {
    document.getElementById(rp[rpv1]).innerHTML = "<img onclick='mover1()' id='redpiece1' src = 'redpiece.jpg'/>";
   }
   else if(rpv2==rpv3 && r33==2)
   {
    document.getElementById(rp[rpv3]).innerHTML = "<img onclick='mover3()' id='redpiece3' src = 'redpiece.jpg'/>";
   }
  else if(rpv2==rpv4 && r44==2)
   {
    document.getElementById(rp[rpv4]).innerHTML = "<img onclick='mover4()' id='redpiece4' src = 'redpiece.jpg'/>";
   }

    rpv2 = rpv2 + valuered;
    valuered = 0;
    document.getElementById(rp[rpv2]).innerHTML="<img onclick='mover2()'  id ='redpiece2' src='redpiece.jpg' />";    
    document.getElementById("rolldice").disabled = false ;
    reds--;
    r22=2;
    if(reds>0 && r11==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover1()' id='redpiece1' src = 'redpiece.jpg'/>";
    }
    else if(reds>0 && r33==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover3()' id='redpiece3' src = 'redpiece.jpg'/>";
    }
   else if(reds>0 && r44==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover4()' id='redpiece4' src = 'redpiece.jpg'/>";
    }  
}
function mover3()
{
   if((rp[rpv3]=="2" || rp[rpv3]=="49") || (rp[rpv3]=="15" || rp[rpv3]=="10"))
   {
      document.getElementById(rp[rpv3]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((rp[rpv3]=="23" || rp[rpv3]=="28") || (rp[rpv3]=="36" || rp[rpv3]=="41"))
  {
   document.getElementById(rp[rpv3]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
  }
   else{
   document.getElementById(rp[rpv3]).innerHTML = "";
   }
   if(rpv3==rpv1 && r11==2)
    {
     document.getElementById(rp[rpv1]).innerHTML = "<img onclick='mover1()' id='redpiece1' src = 'redpiece.jpg'/>";
    }
   else if(rpv3==rpv2 && r22==2)
    {
     document.getElementById(rp[rpv2]).innerHTML = "<img onclick='mover2()' id='redpiece2' src = 'redpiece.jpg'/>";
    }
   else if(rpv3==rpv4 && r44==2)
    {
     document.getElementById(rp[rpv4]).innerHTML = "<img onclick='mover4()' id='redpiece4' src = 'redpiece.jpg'/>";
    } 

    rpv3 = rpv3 + valuered;
    valuered = 0;
    document.getElementById(rp[rpv3]).innerHTML="<img onclick='mover3()'  id ='redpiece3' src='redpiece.jpg' />";
    document.getElementById("rolldice").disabled = false ;
    reds--;   
    r33 = 2;
    if(reds>0 && r11==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover1()' id='redpiece1' src = 'redpiece.jpg'/>";
    }
   else if(reds>0 && r22==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover2()' id='redpiece2' src = 'redpiece.jpg'/>";
    }
   else if(reds>0 && r44==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover4()' id='redpiece4' src = 'redpiece.jpg'/>";
    } 
}
function mover4()
{
   if((rp[rpv4]=="2" || rp[rpv4]=="49") || (rp[rpv4]=="15" || rp[rpv4]=="10"))
   {
      document.getElementById(rp[rpv4]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((rp[rpv4]=="23" || rp[rpv4]=="28") || (rp[rpv4]=="36" || rp[rpv4]=="41"))
  {
   document.getElementById(rp[rpv4]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";

  }
   else{
   document.getElementById(rp[rpv4]).innerHTML = "";
   }

   if(rpv4==rpv1 && r11==2)
    {
     document.getElementById(rp[rpv1]).innerHTML = "<img onclick='mover1()' id='redpiece1' src = 'redpiece.jpg'/>";
    }
   else if(rpv4==rpv2 && r22==2)
    {
     document.getElementById(rp[rpv2]).innerHTML = "<img onclick='mover2()' id='redpiece2' src = 'redpiece.jpg'/>";
    }
   else if(rpv4==rpv3 && r33==2)
    {
     document.getElementById(rp[rpv3]).innerHTML = "<img onclick='mover3()' id='redpiece3' src = 'redpiece.jpg'/>";
    }

    rpv4 = rpv4 + valuered;
    valuered = 0;
    document.getElementById(rp[rpv4]).innerHTML="<img onclick='mover4()'  id ='redpiece4' src='redpiece.jpg' />";
    document.getElementById("rolldice").disabled = false ;
    reds--;    
    r44=2;
    if(reds>0 && r11==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover1()' id='redpiece1' src = 'redpiece.jpg'/>";
    }
   else if(reds>0 && r22==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover2()' id='redpiece2' src = 'redpiece.jpg'/>";
    }
   else if(reds>0 && r33==1)
    {
     document.getElementById(rp[0]).innerHTML = "<img onclick='mover3()' id='redpiece3' src = 'redpiece.jpg'/>";
    }
    
}

function moveg1()
{
   if((gp[gpv1]=="2" || gp[gpv1]=="49") || (gp[gpv1]=="15" || gp[gpv1]=="10"))
   {
      document.getElementById(gp[gpv1]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((gp[gpv1]=="23" || gp[gpv1]=="28") || (gp[gpv1]=="36" || gp[gpv1]=="41"))
    {
      document.getElementById(gp[gpv1]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(gp[gpv1]).innerHTML = "";
   }

   if(gpv1==gpv2 && g22==2)
   {
    document.getElementById(gp[gpv2]).innerHTML = "<img onclick='moveg2()' id='greenpiece2' src = 'greenpiece.jpg'/>";
   }
   else if(gpv1==gpv3 && g33==2)
   {
    document.getElementById(gp[gpv3]).innerHTML = "<img onclick='moveg3()' id='greenpiece3' src = 'greenpiece.jpg'/>";
   }
   else if(gpv1==gpv4 && g44==2)
   {
    document.getElementById(gp[gpv4]).innerHTML = "<img onclick='moveg4()' id='greenpiece4' src = 'greenpiece.jpg'/>";
   }
    gpv1 = gpv1 + valuegreen;
    valuegreen = 0;
    document.getElementById(gp[gpv1]).innerHTML="<img onclick='moveg1()'  id ='greenpiece1' src='greenpiece.jpg' />"; 
    document.getElementById("rolldice").disabled = false ;
    greens--;   
    g11=2;
    if(greens>0 && g22==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg2()' id='greenpiece2' src = 'greenpiece.jpg'/>";
    }
   else if(greens>0 && g33==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg3()' id='greenpiece3' src = 'greenpiece.jpg'/>";
    }
   else if(greens>0 && g44==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg4()' id='greenpiece4' src = 'greenpiece.jpg'/>";
    }
    
}
function moveg2()
{
   if((gp[gpv2]=="2" || gp[gpv2]=="49") || (gp[gpv2]=="15" || gp[gpv2]=="10"))
   {
      document.getElementById(gp[gpv2]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((gp[gpv2]=="23" || gp[gpv2]=="28") || (gp[gpv2]=="36" || gp[gpv2]=="41"))
    {
      document.getElementById(gp[gpv2]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(gp[gpv2]).innerHTML = "";
   }

   if(gpv2==gpv1 && g11==2)
   {
    document.getElementById(gp[gpv1]).innerHTML = "<img onclick='moveg1()' id='greenpiece1' src = 'greenpiece.jpg'/>";
   }
   else if(gpv2==gpv3 && g33==2)
   {
    document.getElementById(gp[gpv3]).innerHTML = "<img onclick='moveg3()' id='greenpiece3' src = 'greenpiece.jpg'/>";
   }
   else if(gpv2==gpv4 && g44==2)
   {
    document.getElementById(gp[gpv4]).innerHTML = "<img onclick='moveg4()' id='greenpiece4' src = 'greenpiece.jpg'/>";
   }
    gpv2 = gpv2 + valuegreen;
    valuegreen = 0;
    document.getElementById(gp[gpv2]).innerHTML="<img onclick='moveg2()'  id ='greenpiece2' src='greenpiece.jpg' />"; 
    document.getElementById("rolldice").disabled = false ;
    greens--;   
    g22=2;
    if(greens>0 && g11==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg1()' id='greenpiece1' src = 'greenpiece.jpg'/>";
    }
   else if(greens>0 && g33==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg3()' id='greenpiece3' src = 'greenpiece.jpg'/>";
    }
   else if(greens>0 && g44==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg4()' id='greenpiece4' src = 'greenpiece.jpg'/>";
    }
}
function moveg3()
{

   if((gp[gpv3]=="2" || gp[gpv3]=="49") || (gp[gpv3]=="15" || gp[gpv3]=="10"))
   {
      document.getElementById(gp[gpv3]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((gp[gpv3]=="23" || gp[gpv3]=="28") || (gp[gpv3]=="36" || gp[gpv3]=="41"))
    {
      document.getElementById(gp[gpv3]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(gp[gpv3]).innerHTML = "";
   }

   if(gpv3==gpv1 && g11==2)
   {
    document.getElementById(gp[gpv1]).innerHTML = "<img onclick='moveg1()' id='greenpiece1' src = 'greenpiece.jpg'/>";
   }
   else if(gpv3==gpv2&& g22==2)
   {
    document.getElementById(gp[gpv2]).innerHTML = "<img onclick='moveg2()' id='greenpiece2' src = 'greenpiece.jpg'/>";
   }
   else if(gpv3==gpv4 && g44==2)
   {
    document.getElementById(gp[gpv4]).innerHTML = "<img onclick='moveg4()' id='greenpiece4' src = 'greenpiece.jpg'/>";
   }
    gpv3 = gpv3 + valuegreen;
    valuegreen = 0;
    document.getElementById(gp[gpv3]).innerHTML="<img onclick='moveg3()'  id ='greenpiece3' src='greenpiece.jpg' />";
    document.getElementById("rolldice").disabled = false ;
    greens--;  
    g33=2;  
    if(greens>0 && g11==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg1()' id='greenpiece1' src = 'greenpiece.jpg'/>";
    }
   else if(greens>0 && g22==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg2()' id='greenpiece2' src = 'greenpiece.jpg'/>";
    }
   else if(greens>0 && g44==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg4()' id='greenpiece4' src = 'greenpiece.jpg'/>";
    }
}
function moveg4()
{
   if((gp[gpv4]=="2" || gp[gpv4]=="49") || (gp[gpv4]=="15" || gp[gpv4]=="10"))
   {
      document.getElementById(gp[gpv3]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((gp[gpv4]=="23" || gp[gpv4]=="28") || (gp[gpv4]=="36" || gp[gpv4]=="41"))
    {
      document.getElementById(gp[gpv4]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(gp[gpv4]).innerHTML = "";
   }

   if(gpv4==gpv1 && g11==2)
   {
    document.getElementById(gp[gpv1]).innerHTML = "<img onclick='moveg1()' id='greenpiece1' src = 'greenpiece.jpg'/>";
   }
   else if(gpv4==gpv2&& g22==2)
   {
    document.getElementById(gp[gpv2]).innerHTML = "<img onclick='moveg2()' id='greenpiece2' src = 'greenpiece.jpg'/>";
   }
   else if(gpv4==gpv3 && g33==2)
   {
    document.getElementById(gp[gpv3]).innerHTML = "<img onclick='moveg3()' id='greenpiece3' src = 'greenpiece.jpg'/>";
   }
    gpv4 = gpv4 + valuegreen;
    valuegreen = 0;
    document.getElementById(gp[gpv4]).innerHTML="<img onclick='moveg4()'  id ='greenpiece4' src='greenpiece.jpg' />"; 
    document.getElementById("rolldice").disabled = false ;
    greens--; 
    g44=2;  
    if(greens>0 && g11==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg1()' id='greenpiece1' src = 'greenpiece.jpg'/>";
    }
   else if(greens>0 && g22==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg2()' id='greenpiece2' src = 'greenpiece.jpg'/>";
    }
   else if(greens>0 && g33==1)
    {
     document.getElementById(gp[0]).innerHTML = "<img onclick='moveg3()' id='greenpiece3' src = 'greenpiece.jpg'/>";
    }
}
function moveb1()
{
   if((bp[bpv1]=="2" || bp[bpv1]=="49") || (bp[bpv1]=="15" || bp[bpv1]=="10"))
   {
      document.getElementById(bp[bpv1]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((bp[bpv1]=="23" || bp[bpv1]=="28") || (bp[bpv1]=="36" || bp[bpv1]=="41"))
    {
      document.getElementById(bp[bpv1]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(bp[bpv1]).innerHTML = "";
   }

   if(bpv1==bpv2 && b22==2)
   {
    document.getElementById(bp[bpv2]).innerHTML = "<img onclick='moveb2()' id='bluepiece2' src = 'bluepiece.jpg'/>";
   }
   else if(bpv1==bpv3 && b33==2)
   {
    document.getElementById(bp[bpv3]).innerHTML = "<img onclick='moveb3()' id='bluepiece3' src = 'bluepiece.jpg'/>";
   }
   else if(bpv1==bpv4 && b44==2)
   {
    document.getElementById(bp[bpv4]).innerHTML = "<img onclick='moveb4()' id='bluepiece4' src = 'bluepiece.jpg'/>";
   }
    bpv1 = bpv1 + valueblue;
    valueblue = 0;
    document.getElementById(bp[bpv1]).innerHTML="<img onclick='moveb1()'  id ='bluepiece1' src='bluepiece.jpg' />"; 
    document.getElementById("rolldice").disabled = false ;
    blues--;
    b11=2;  
    if(blues>0 && b22==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='moveb2()' id='bluepiece2' src = 'bluepiece.jpg'/>";
    }
   else if(blues>0 && b33==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='moveb3()' id='bluepiece3' src = 'bluepiece.jpg'/>";
    }
   else if(blues>0 && b44==1)
    {
     document.getElementById(bp[0]).innerHTML ="<img onclick='moveb4()' id='bluepiece4' src = 'bluepiece.jpg'/>";
    }
}
function moveb2()
{
   if((bp[bpv2]=="2" || bp[bpv2]=="49") || (bp[bpv2]=="15" || bp[bpv2]=="10"))
   {
      document.getElementById(bp[bpv2]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((bp[bpv2]=="23" || bp[bpv2]=="28") || (bp[bpv2]=="36" || bp[bpv2]=="41"))
    {
      document.getElementById(bp[bpv2]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(bp[bpv2]).innerHTML = "";
   }

   if(bpv2==bpv1 && b11==2)
   {
    document.getElementById(bp[bpv1]).innerHTML = "<img onclick='moveb1()' id='bluepiece1' src = 'bluepiece.jpg'/>";
   }
   else if(bpv2==bpv3 && b33==2)
   {
    document.getElementById(bp[bpv3]).innerHTML = "<img onclick='moveb3()' id='bluepiece3' src = 'bluepiece.jpg'/>";
   }
   else if(bpv2==bpv4 && b44==2)
   {
    document.getElementById(bp[bpv4]).innerHTML = "<img onclick='moveb4()' id='bluepiece4' src = 'bluepiece.jpg'/>";
   }
    bpv2 = bpv2 + valueblue;
    valueblue = 0;
    document.getElementById(bp[bpv2]).innerHTML="<img onclick='moveb2()'  id ='bluepiece2' src='bluepiece.jpg' />";
    document.getElementById("rolldice").disabled = false ;
    blues--; 
    b22=2; 
    if(blues>0 && b11==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='moveb1()' id='bluepiece1' src = 'bluepiece.jpg'/>";
    }
   else if(blues>0 && b33==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='moveb3()' id='bluepiece3' src = 'bluepiece.jpg'/>";
    }
   else if(blues>0 && b44==1)
    {
     document.getElementById(bp[0]).innerHTML ="<img onclick='moveb4()' id='bluepiece4' src = 'bluepiece.jpg'/>";
    }   
}
function moveb3()
{
   if((bp[bpv3]=="2" || bp[bpv3]=="49") || (bp[bpv3]=="15" || bp[bpv3]=="10"))
   {
      document.getElementById(bp[bpv3]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((bp[bpv3]=="23" || bp[bpv3]=="28") || (bp[bpv3]=="36" || bp[bpv3]=="41"))
    {
      document.getElementById(bp[bpv3]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(bp[bpv3]).innerHTML = "";
   }

   if(bpv3==bpv2 && b22==2)
   {
    document.getElementById(bp[bpv2]).innerHTML = "<img onclick='moveb2()' id='bluepiece2' src = 'bluepiece.jpg'/>";
   }
   else if(bpv3==bpv1 && b11==2)
   {
    document.getElementById(bp[bpv1]).innerHTML = "<img onclick='moveb1()' id='bluepiece1' src = 'bluepiece.jpg'/>";
   }
   else if(bpv1==bpv4 && b44==2)
   {
    document.getElementById(bp[bpv4]).innerHTML = "<img onclick='moveb4()' id='bluepiece4' src = 'bluepiece.jpg'/>";
   }
    bpv3 = bpv3 + valueblue;
    valueblue = 0;
    document.getElementById(bp[bpv3]).innerHTML="<img onclick='moveb3()'  id ='bluepiece3' src='bluepiece.jpg' />";
    document.getElementById("rolldice").disabled = false ;
    blues--; 
    b33=2;    
    if(blues>0 && b22==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='moveb2()' id='bluepiece2' src = 'bluepiece.jpg'/>";
    }
   else if(blues>0 && b11==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='moveb1()' id='bluepiece1' src = 'bluepiece.jpg'/>";
    }
   else if(blues>0 && b44==1)
    {
     document.getElementById(bp[0]).innerHTML ="<img onclick='moveb4()' id='bluepiece4' src = 'bluepiece.jpg'/>";
    }
}
function moveb4()
{
   if((bp[bpv4]=="2" || bp[bpv4]=="49") || (bp[bpv4]=="15" || bp[bpv4]=="10"))
   {
      document.getElementById(bp[bpv4]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((bp[bpv4]=="23" || bp[bpv4]=="28") || (bp[bpv4]=="36" || bp[bpv4]=="41"))
    {
      document.getElementById(bp[bpv4]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(bp[bpv4]).innerHTML = "";
   }

   if(bpv4==bpv2 && b22==2)
   {
    document.getElementById(bp[bpv2]).innerHTML = "<img onclick='moveb2()' id='bluepiece2' src = 'bluepiece.jpg'/>";
   }
   else if(bpv4==bpv3 && b33==2)
   {
    document.getElementById(bp[bpv3]).innerHTML = "<img onclick='moveb3()' id='bluepiece3' src = 'bluepiece.jpg'/>";
   }
   else if(bpv4==bpv1 && b11==2)
   {
    document.getElementById(bp[bpv1]).innerHTML = "<img onclick='moveb1()' id='bluepiece1' src = 'bluepiece.jpg'/>";
   }
    bpv4 = bpv4 + valueblue;
    valueblue = 0;
    document.getElementById(bp[bpv4]).innerHTML="<img onclick='moveb4()'  id ='bluepiece4' src='bluepiece.jpg' />";
    document.getElementById("rolldice").disabled = false ;
    blues--;   
    b44=2;  
    if(blues>0 && b22==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='moveb2()' id='bluepiece2' src = 'bluepiece.jpg'/>";
    }
   else if(blues>0 && b33==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='moveb3()' id='bluepiece3' src = 'bluepiece.jpg'/>";
    }
   else if(blues>0 && b11==1)
    {
     document.getElementById(bp[0]).innerHTML ="<img onclick='moveb1()' id='bluepiece1' src = 'bluepiece.jpg'/>";
    }
}
function movey1()
{
   if((yp[ypv1]=="2" || yp[ypv1]=="49") || (yp[ypv1]=="15" || yp[ypv1]=="10"))
   {
      document.getElementById(yp[ypv1]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((yp[ypv1]=="23" || yp[ypv1]=="28") || (yp[ypv1]=="36" || yp[ypv1]=="41"))
    {
      document.getElementById(yp[ypv1]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(yp[ypv1]).innerHTML = "";
   }

   if(ypv1==ypv2 && y22==2)
   {
    document.getElementById(yp[ypv2]).innerHTML = "<img onclick='movey2()' id='yellowpiece2' src = 'yellowpiece.jpg'/>";
   }
   else if(ypv1==ypv3 && y33==2)
   {
    document.getElementById(yp[ypv3]).innerHTML = "<img onclick='movey3()' id='yellowpiece3' src = 'yellowpiece.jpg'/>";
   }
   else if(ypv1==ypv4 && y44==2)
   {
    document.getElementById(yp[ypv4]).innerHTML = "<img onclick='movey4()' id='yellowpiece4' src = 'yellowpiece.jpg'/>";
   }
    ypv1 = ypv2 + valueyellow;
    valueyellow = 0;
    document.getElementById(yp[ypv1]).innerHTML="<img onclick='movey1()'  id ='yellowpiece1' src='yellowpiece.jpg' />";
    document.getElementById("rolldice").disabled = false ;
    yellows--;   
    y11=2; 
    if(yellows>0 && y22==1)
    {
     document.getElementById(yp[0]).innerHTML = "<img onclick='movey2()' id='yellowpiece2 ' src = 'yellowpiece.jpg'/>";
    }
   else if(yellows>0 && y33==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='movey3()' id='yellowpiece3' src = 'yellowpiece.jpg'/>";
    }
   else if(yellows>0 && y44==1)
    {
     document.getElementById(yp[0]).innerHTML ="<img onclick='movey4()' id='yellowpiece4' src = 'yellowpiece.jpg'/>";
    }
}
function movey2()
{
   if((yp[ypv2]=="2" || yp[ypv2]=="49") || (yp[ypv2]=="15" || yp[ypv2]=="10"))
   {
      document.getElementById(yp[ypv2]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((yp[ypv2]=="23" || yp[ypv2]=="28") || (yp[ypv2]=="36" || yp[ypv2]=="41"))
    {
      document.getElementById(yp[ypv2]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(yp[ypv2]).innerHTML = "";
   }

   if(ypv2==ypv1 && y11==2)
   {
    document.getElementById(yp[ypv1]).innerHTML = "<img onclick='movey1()' id='yellowpiece1' src = 'yellowpiece.jpg'/>";
   }
   else if(ypv2==ypv3 && y33==2)
   {
    document.getElementById(yp[ypv3]).innerHTML = "<img onclick='movey3()' id='yellowpiece3' src = 'yellowpiece.jpg'/>";
   }
   else if(ypv2==ypv4 && y44==2)
   {
    document.getElementById(yp[ypv4]).innerHTML = "<img onclick='movey4()' id='yellowpiece4' src = 'yellowpiece.jpg'/>";
   }
    ypv2 = ypv2 + valueyellow;
    valueyellow = 0;
    document.getElementById(yp[ypv2]).innerHTML="<img onclick='movey2()'  id ='yellowpiece2' src='yellowpiece.jpg' />";
    document.getElementById("rolldice").disabled = false ;
    yellows-- ; 
    y22=2;  
    if(yellows>0 && y11==1)
    {
     document.getElementById(yp[0]).innerHTML = "<img onclick='movey1()' id='yellowpiece1 ' src = 'yellowpiece.jpg'/>";
    }
   else if(yellows>0 && y33==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='movey3()' id='yellowpiece3' src = 'yellowpiece.jpg'/>";
    }
   else if(yellows>0 && y44==1)
    {
     document.getElementById(yp[0]).innerHTML ="<img onclick='movey4()' id='yellowpiece4' src = 'yellowpiece.jpg'/>";
    }
}
function movey3()
{
   if((yp[ypv3]=="2" || yp[ypv3]=="49") || (yp[ypv3]=="15" || yp[ypv3]=="10"))
   {
      document.getElementById(yp[ypv3]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((yp[ypv3]=="23" || yp[ypv3]=="28") || (yp[ypv3]=="36" || yp[ypv3]=="41"))
    {
      document.getElementById(yp[ypv3]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(yp[ypv3]).innerHTML = "";
   }

   if(ypv3==ypv2 && y22==2)
   {
    document.getElementById(yp[ypv2]).innerHTML = "<img onclick='movey2()' id='yellowpiece2' src = 'yellowpiece.jpg'/>";
   }
   else if(ypv3==ypv1 && y11==2)
   {
    document.getElementById(yp[ypv1]).innerHTML = "<img onclick='movey1()' id='yellowpiece1' src = 'yellowpiece.jpg'/>";
   }
   else if(ypv3==ypv4 && y44==2)
   {
    document.getElementById(yp[ypv4]).innerHTML = "<img onclick='movey4()' id='yellowpiece4' src = 'yellowpiece.jpg'/>";
   }
    ypv3 = ypv3 + valueyellow;
    valueyellow = 0;
    document.getElementById(yp[ypv3]).innerHTML="<img onclick='movey3()'  id ='yellowpiece3' src='yellowpiece.jpg' />";
    document.getElementById("rolldice").disabled = false ;
    yellows--;    
    y33=2;
    if(yellows>0 && y22==1)
    {
     document.getElementById(yp[0]).innerHTML = "<img onclick='movey2()' id='yellowpiece2 ' src = 'yellowpiece.jpg'/>";
    }
   else if(yellows>0 && y11==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='movey1()' id='yellowpiece1' src = 'yellowpiece.jpg'/>";
    }
   else if(yellows>0 && y44==1)
    {
     document.getElementById(yp[0]).innerHTML ="<img onclick='movey4()' id='yellowpiece4' src = 'yellowpiece.jpg'/>";
    }
}
function movey4()
{
   if((yp[ypv4]=="2" || yp[ypv4]=="49") || (yp[ypv4]=="15" || yp[ypv4]=="10"))
   {
      document.getElementById(yp[ypv4]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
   }
  else if((yp[ypv4]=="23" || yp[ypv4]=="28") || (yp[ypv4]=="36" || yp[ypv4]=="41"))
    {
      document.getElementById(yp[ypv4]).innerHTML=" <div class='steps onebackpath'>&#9728;</div>";
    }
   else{
   document.getElementById(yp[ypv4]).innerHTML = "";
   }

   if(ypv4==ypv2 && y22==2)
   {
    document.getElementById(yp[ypv2]).innerHTML = "<img onclick='movey2()' id='yellowpiece2' src = 'yellowpiece.jpg'/>";
   }
   else if(ypv4==ypv3 && y33==2)
   {
    document.getElementById(yp[ypv3]).innerHTML = "<img onclick='movey3()' id='yellowpiece3' src = 'yellowpiece.jpg'/>";
   }
   else if(ypv4==ypv1 && y11==2)
   {
    document.getElementById(yp[ypv1]).innerHTML = "<img onclick='movey1()' id='yellowpiece1' src = 'yellowpiece.jpg'/>";
   }
    ypv4 = ypv4 + valueyellow;
    valueyellow = 0;
    document.getElementById(yp[ypv4]).innerHTML="<img onclick='movey4()'  id ='yellowpiece4' src='yellowpiece.jpg' />";
    document.getElementById("rolldice").disabled = false ;
    yellows--;    
    y44=2;
    if(yellows>0 && y22==1)
    {
     document.getElementById(yp[0]).innerHTML = "<img onclick='movey2()' id='yellowpiece2 ' src = 'yellowpiece.jpg'/>";
    }
   else if(yellows>0 && y33==1)
    {
     document.getElementById(bp[0]).innerHTML = "<img onclick='movey3()' id='yellowpiece3' src = 'yellowpiece.jpg'/>";
    }
   else if(yellows>0 && y11==1)
    {
     document.getElementById(yp[0]).innerHTML ="<img onclick='movey1()' id='yellowpiece1' src = 'yellowpiece.jpg'/>";
    }
}
