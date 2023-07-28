// btn-Mobile:
 
const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(){

  const nav = document.querySelector("nav");
  nav.classList.toggle('active');
 
}
  btnMobile.addEventListener("click", toggleMenu);

const estacoes = document.getElementById("estacoes");
estacoes.addEventListener("click",()=>{
subMenuAct();
return 
})
function subMenuAct(){
const subMenu = document.querySelector(".sub-menu");
subMenu.classList.toggle("subMenuActivo");

}

// Text About the place:
const openTxt = document.querySelectorAll(".btn-open-txt");

 const mybtn = openTxt.forEach((x)=>{
  x.addEventListener('click',()=>{
    x.parentElement.parentElement.parentElement.classList.toggle("open-text-place");
    let getOpenTextPlace = document.querySelector(".open-text-place")
    if(getOpenTextPlace){
      x.innerHTML='close'
      x.style.borderRadius=' 50%'
    }else{
      x.innerHTML='open'
    }
  });
  
})



