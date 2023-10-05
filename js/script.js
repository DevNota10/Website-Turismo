//  Smooth Scroll:
const links = document.querySelectorAll("ul a[href^='#']");

function getDistanceFromTheTop(element){
  toggleMenu()
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

  const distanceFromTheTop = getDistanceFromTheTop(item.target) -140;
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
     getTxtPart2.style.height='100%'

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
  
      });

    });
   };

    // ClickSidenav:
    const sidenavLink = document.querySelectorAll(".sidenav li");
springtime = ()=>{
      
sidenavLink.forEach((li,idx)=>{
// Seasons Springtime:
  li.addEventListener('click', ()=>{
  let curIdx = document.querySelectorAll(".sidenav")[0].parentElement;
  
  
    switch(idx){
        case 0:  
        curIdx.style.backgroundImage= "url(./landscape/flores.jpg)"
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 1</h2>`
        break;
        case 1:  
        curIdx.style.background=' #ccc'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 2</h2>`
        break;
        case 2: 
        curIdx.style.background=' #ff0000'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 3</h2>`
        break;
        case 3: 
        curIdx.style.background=' #ccc'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 4</h2>`
        break;
        case 4: 
        curIdx.style.background=' #ff0000'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 5</h2>`
        break;
        case 5: 
        curIdx.style.background=' #ccc'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 6</h2>`
        break;
        case 6: 
        curIdx.style.background=' #ff0000'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 7</h2>`
        break;
        case 7: 
        curIdx.style.background=' #ccc'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 8</h2>`
        break;
        case 8: 
        curIdx.style.background=' #ff0000'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 9</h2>`
        break;
        case 9: 
        curIdx.style.background=' #ccc'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 10</h2>`
        break;

    };
  
  });
        
    });
};
                          // ------- fim----------
springtime();

summer = ()=>   {
    // Seasons Summer:;
    sidenavLink.forEach((li,idx)=>{
  li.addEventListener('click', ()=>{
    let curIdx = document.querySelectorAll(".sidenav")[1].parentElement;


    switch(idx){
        case 10:  
        curIdx.style.backgroundImage= "url(./landscape/beach-1838501_1920.jpg)"
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 1</h2>`;
        break;
        case 11:  
        curIdx.style.background=' #ccc'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 2</h2>`;
        break;
        case 12: 
        curIdx.style.background=' #ff0000'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 3</h2>`;
        break;
        case 13: 
        curIdx.style.background=' #ccc'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 4</h2>`;
        break;
        case 14: 
        curIdx.style.background=' #ff0000'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 5</h2>`;
        break;
        case 15: 
        curIdx.style.background=' #ccc'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 6</h2>`;
        break;
        case 16: 
        curIdx.style.background=' #ff0000'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 7</h2>`;
        break;
        case 17: 
        curIdx.style.background=' #ccc'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 8</h2>`;
        break;
        case 18: 
        curIdx.style.background=' #ff0000'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 9</h2>`;
        break;
        case 19: 
        curIdx.style.background=' #ccc'
        curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 10</h2>`;
        break;

    };
  
  });
        
  });

  };
  summer();
                              // ------- fim----------

// Seasons Fall:
fall = () =>{
  sidenavLink.forEach((li,idx)=>{
    li.addEventListener('click', ()=>{
      let curIdx = document.querySelectorAll(".sidenav")[2].parentElement;

      switch(idx){
          case 20:  
          curIdx.style.backgroundImage= "url(./landscape/beach-1838501_1920.jpg)";
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 1</h2>`;
          break;
          case 21:  
          curIdx.style.background=' #ccc'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 2</h2>`;
          break;
          case 22: 
          curIdx.style.background=' #ff0000'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 3</h2>`;
          break;
          case 23: 
          curIdx.style.background=' #ccc'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 4</h2>`;
          break;
          case 24: 
          curIdx.style.background=' #ff0000'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 5</h2>`;
          break;
          case 25: 
          curIdx.style.background=' #ccc'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 6</h2>`;
          break;
          case 26: 
          curIdx.style.background=' #ff0000'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 7</h2>`;
          break;
          case 27: 
          curIdx.style.background=' #ccc'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 8</h2>`;
          break;
          case 28: 
          curIdx.style.background=' #ff0000'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 9</h2>`;
          break;
          case 29: 
          curIdx.style.background=' #ccc'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 10</h2>`;
          break;

      };

    });
          
  });

};

fall()
           // ------- fim----------

           // Seasons Winter:

winter = ()=>{

    sidenavLink.forEach((li,idx)=>{
        // Seasons Springtime:
    li.addEventListener('click', ()=>{
    let curIdx = document.querySelectorAll(".sidenav")[3].parentElement;


      switch(idx){
          case 30:  
          curIdx.style.backgroundImage= "url(./landscape/temple-5909803_1920.jpg)"
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 1</h2>`;
          break;
          case 31:  
          curIdx.style.background=' #ccc'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 2</h2>`;
          break;
          case 32: 
          curIdx.style.background=' #ff0000'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 3</h2>`;
          break;
          case 33: 
          curIdx.style.background=' #ccc'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 4</h2>`;
          break;
          case 34: 
          curIdx.style.background=' #ff0000'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 5</h2>`;
          break;
          case 35: 
          curIdx.style.background=' #ccc'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 6</h2>`;
          break;
          case 36: 
          curIdx.style.background=' #ff0000'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 7</h2>`;
          break;
          case 37: 
          curIdx.style.background=' #ccc'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 8</h2>`;
          break;
          case 38: 
          curIdx.style.background=' #ff0000'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 9</h2>`;
          break;
          case 39: 
          curIdx.style.background=' #ccc'
          curIdx.getElementsByClassName("idx-place")[0].innerHTML= `<h2>Lugar 10</h2>`;
          break;

      };

    });

  });
};
winter();
          



        


      
       
   
      
   
  
    

    





