// add and remove the active class
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(function(e){
    e.addEventListener('click',(el)=>{
        li.forEach((ee)=>{
            ee.classList.remove("active");
        });
        el.target.parentElement.classList.add("active")
    })  
});
/*************************************************** */
// display the bar content
document.querySelector("button").addEventListener("click",function(){
    ul.classList.toggle('show')
})


// scroll to top
let btn = document.querySelector(".scrollTotop");
window.onscroll =function() {
    if (this.scrollY > 400){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
};
btn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth",
    })
})