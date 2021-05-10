const menubtn=document.getElementById('menu');
const menuclose=document.getElementById('menu_close');

const submit=document.getElementById('submit');
const anim=document.querySelector('.submit_anim p');
 
submit.addEventListener('click',()=>{
    anim.classList.add('test');
})
submit.addEventListener('click',function (a){
    a.preventDefault();
})



const nav=document.querySelector('nav');
   menubtn.addEventListener('click',()=>{
       nav.classList.add('menu_btn');
   })

   menuclose.addEventListener('click',()=>{
       nav.classList.remove('menu_btn');

   })

   const texts =["Learn","Develope","Create","Code"];
   let c =0;

   let i=0;
   let currenttext="";
   let l="";

   type();
   function type(){
       if(c==texts.length){
           c=0;
       }
       currenttext=texts[c];
       l=currenttext.slice(0, ++i);

       document.querySelector(".typing").textContent=l;

       if(l.length==currenttext.length){
           c++;
           i=0;
       }
       setTimeout(type,350);
   }







   