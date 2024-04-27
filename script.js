const body=document.querySelector("body");
const ecrann = document.querySelector(".ecran");
const calc=document.querySelector(".calc");
const dell =document.getElementById("del");
const ressset =document.getElementById("resset");
const egall =document.getElementById("egal");
const custotoglle=document.getElementById('custom-toggle');
const numm=document.querySelectorAll('.num1');

function filterme(value) {
    value = parseInt(value, 10); // Convert to an integer
    var customToggle = document.getElementById('custom-toggle');
    var spanElements = document.querySelectorAll('span');
  
    if (value === 1) {
      customToggle.classList.remove('tgl-off', 'tgl-def');
      customToggle.classList.add('tgl-on');
      spanElements.forEach(function(span) {
        span.textContent = 'Enabled';
      });
      body.style.color="#FCFFFB";
      body.style.background="#3B4664";
      ecrann.style.background="#181F32";
      calc.style.background="#252D44";
      dell.style.background="#647299";
      resset.style.background="#647299";
      egall.style.background="#D13F30";
      egall.style.color="white";
      custotoglle.style.background="#252D44";

      numm.forEach(nu=>{
        nu.style.background="#EAE3DB";
        nu.style.color="#3C4353";
        nu.classList.remove('trois');
      })

      egall.classList.remove("egalt");
      ressset.classList.remove("ressett");
      dell.classList.remove("ressett");
      egall.classList.remove("egald");
      ressset.classList.remove("ressetd");
      dell.classList.remove("ressetd");
    } else if (value === 2) {
      customToggle.classList.remove('tgl-on', 'tgl-off');
      customToggle.classList.add('tgl-def');
      spanElements.forEach(function(span) {
        span.textContent = 'Undetermined';
      });
      body.style.color="#37372D";
      body.style.background="#E6E6E6";
      ecrann.style.background="#EEEEEE";
      calc.style.background="#D3CDCD";
      dell.style.background="#62B5BD";
      resset.style.background="#62B5BD";
      egall.style.background="#FF8B38";
      egall.style.color="white";
      custotoglle.style.background="#D3CDCD";

      numm.forEach(nu=>{
        nu.style.background="#E5E4E0";
        nu.style.color="#3A3A32";
        nu.classList.remove('trois');
      })

      egall.classList.remove("egalt");
      ressset.classList.remove("ressett");
      dell.classList.remove("ressett");
      egall.classList.add("egald");
      ressset.classList.add("ressetd");
      dell.classList.add("ressetd");
    } else if (value === 3) {
      customToggle.classList.remove('tgl-def', 'tgl-on');
      customToggle.classList.add('tgl-off');
      spanElements.forEach(function(span) {
        span.textContent = 'Disabled';
      });
      body.style.color="#FFE53C";
      body.style.background="#17062A";
      ecrann.style.background="#1E0836";
      calc.style.background="#1E0836";
      dell.style.background="#822DAE";
      ressset.style.background="#822DAE";
      egall.style.background="#94FFF9";
      egall.style.color="#2B5E62";
      custotoglle.style.background="#1E0837";
  
      numm.forEach(nu=>{
        nu.style.background="#331B4D";
        nu.style.color="#FFE93F";
        nu.classList.add('trois');
      })

      egall.classList.add("egalt");
      ressset.classList.add("ressett");
      dell.classList.add("ressett");
      egall.classList.remove("egald");
      ressset.classList.remove("ressetd");
      dell.classList.remove("ressetd");
      
    }
  }

  /*********** */

 