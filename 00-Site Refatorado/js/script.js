//  Smooth Scroll:
const links = document.querySelectorAll("ul a[href^='#']");

function getDistanceFromTheTop(element){
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop
}

// Não funciona no opera
//  nativeScroll =(distanceFromTheTop)=>{
//   window.scroll({
//     top: distanceFromTheTop,
//     behavior: "smooth"
//   })
// }

 scrollToSection =(item) =>{
  item.preventDefault();

  const distanceFromTheTop = getDistanceFromTheTop(item.target) -90;
  smoothScrollTo(0,distanceFromTheTop)
  
}

links.forEach((link)=>{
  link.addEventListener("click",scrollToSection);
})

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.scrollX;
  const startY = window.scrollY || window.scrollY;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

// ------------ Smooth Scroll Fim ------------

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

  expandText()
  function expandText(){
    const  txtContinue = document.querySelectorAll(".txt-part-1 a");
    
    txtContinue.forEach((x,pos)=>{
      x.addEventListener('click',()=>{
       
     const getTxtPart2 = x.parentNode.parentNode.parentNode.querySelector(".txt-part-2  ");


    //  getTxtPart2.style.display='inline-block';
     getTxtPart2.style.height='70vh'

     getTxtPart2.style.opacity='1'
     getTxtPart2.style.transform='rotate(0deg)'
    
    
     x.style.display='none'
     

     const closeTxt = document.createElement("div");
     closeTxt.className ='closeTxt';
     getTxtPart2.appendChild(closeTxt).innerHTML='X';
     closeTxt.classList.add("flex_center");

     closeExpandText(x,getTxtPart2);
      });
    });

  };

   closeExpandText = (x,getTxtPart2) =>{

    const cloExpTxt =  document.querySelectorAll(".closeTxt");
    cloExpTxt.forEach((item)=>{
      item.addEventListener('click',()=>{
        x.style.display='flex';

        getTxtPart2.style.height='0';
        getTxtPart2.style.opacity='0';
        getTxtPart2.style.transform='rotate(10deg)';
  
  
      
      })

    })



    
  
   }






