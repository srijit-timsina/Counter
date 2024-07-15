let value=document.querySelector('.value');
let inc=document.querySelector('#i');
let dec=document.querySelector('.d');
let res=document.querySelector('.r');
let count=0;

inc.addEventListener("click",function(){
    value.innerHTML=count+1
    count=count+1;
    console.log("click");
})

dec.addEventListener("click",function(){
    value.innerHTML=count-1
    count=count-1;
    console.log("click");
})
res.addEventListener("click",function(){
    value.innerHTML="0";
    count=0;

})

