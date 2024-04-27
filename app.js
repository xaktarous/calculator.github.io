const ecran = document.querySelector(".ecran");
const b7 =document.getElementById("b7");
const b8 =document.getElementById("b8");
const b9 =document.getElementById("b9");
const del =document.getElementById("del");

const b4 =document.getElementById("b4");
const b5 =document.getElementById("b5");
const b6 =document.getElementById("b6");
const plus =document.getElementById("plus");

const b1 =document.getElementById("b1");
const b2 =document.getElementById("b2");
const b3 =document.getElementById("b3");
const moins =document.getElementById("moins");

const point =document.getElementById("point");
const zero =document.getElementById("zero");
const slach =document.getElementById("slach");
const multiple =document.getElementById("multiple");

const resset =document.getElementById("resset");
const egal =document.getElementById("egal");
let num=1;
let numberClick="";
let addm=0;
let operation="";
b7.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">7</h1>`;   
    numberClick+="7";
})

b8.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">8</h1>`; 
    numberClick+="8";  
})

b9.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">9</h1>`;
    numberClick+="9";    
})

del.addEventListener("click",()=>{
    if(operation =="x"||operation =="-"||operation =="+"||operation =="/"){
        return;
    }
    if(ecran.textContent=="ERROR" || ecran.textContent=="NaN" ){
        ecran.innerHTML='';
        numberClick ="";
    }else{
        const nb=Array.from(document.querySelectorAll(".ecran h1"));
        let stringNum="";
        nb.forEach(nbr => {
            stringNum+=nbr.textContent;
       
        });
        
        ecran.innerHTML =`<h1 class="affichage">${stringNum.slice(0,stringNum.length-1)}</h1>`;
        
        numberClick=numberClick.slice(0,numberClick.length-1);
    }
  
        
})



b4.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">4</h1>`; 
    numberClick+="4";   
})

b5.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">5</h1>`;  
    numberClick+="5";  
})

b6.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">6</h1>`; 
    numberClick+="6";   
})

plus.addEventListener("click",()=>{
    
    if(ecran.textContent=="ERROR" ||ecran.textContent=="NaN" ){
        ecran.innerHTML=`<h1 class="plus" style="margin-right:2px; margin-left:2px;"">+</h1>`;
    }else{
        ecran.innerHTML+=`<h1 class="plus" style="margin-right:2px; margin-left:2px;"">+</h1>`;
        numberClick+='+';
    }

   

})

b1.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">1</h1>`; 
    numberClick+="1";    
})

b2.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">2</h1>`;   
    numberClick+="2";  
})

b3.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">3</h1>`;
    numberClick+="3";     
})

moins.addEventListener("click",()=>{
 
    if(ecran.textContent=="NaN"){
        ecran.innerHTML=`<h1 class="plus" style="margin-right:2px; margin-left:2px;"">-</h1>`;
    }else{
        ecran.innerHTML+=`<h1 class="plus" style="margin-right:2px; margin-left:2px;"">-</h1>`;
        numberClick+="-"
    }

 

})



point.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">,</h1>`;
    numberClick+=".";     
})

zero.addEventListener("click",()=>{
    ecran.innerHTML +=`<h1 class="affichage">0</h1>`;
    numberClick+="0";     
})

slach.addEventListener("click",()=>{
 
    if(ecran.textContent=="NaN"){
        ecran.innerHTML=`<h1 class="plus" style="margin-right:2px; margin-left:2px;"">/</h1>`;
    }else{
        ecran.innerHTML+=`<h1 class="plus" style="margin-right:2px; margin-left:2px;"">/</h1>`;
        numberClick+="/";
    }


    
})

multiple.addEventListener("click",()=>{
  
    if(ecran.textContent=="NaN"){
        ecran.innerHTML=`<h1 class="plus" style="margin-right:2px; margin-left:2px;"">x</h1>`;
    }else{
        ecran.innerHTML+=`<h1 class="plus" style="margin-right:2px; margin-left:2px;"">x</h1>`;
      numberClick+="*";
    }

    
})

resset.addEventListener("click",()=>{
    ecran.innerHTML =``;  
    numberClick ="";
    
})



function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }
  





egal.addEventListener("click",()=>{

  
    solstr=`${parse(numberClick)}`;
      if(solstr.includes('.')){
        solarr=solstr.replace('.',",");
        ecran.innerHTML =`<h1 class="affichage">${solarr}</h1>`;
    }else{
        ecran.innerHTML =`<h1 class="affichage">${solstr}</h1>`;
    }
        numberClick=solstr;


})

