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

openTxt.forEach((arrow)=>{
  arrow.addEventListener("click",()=>{
    openTxtBox(arrow)
    console.log('clicou')
  })
})


// Corrigir btn de abertura do texto:
function openTxtBox(arrow){
const scrollContainer = document.querySelectorAll(".scroll-container");
scrollContainer.forEach((item)=>{
  item.classList.toggle("open-text-place")
})

}