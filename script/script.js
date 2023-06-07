
window.onload = function(){
  
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

  // ScrollSuave:
  const links = document.querySelectorAll("nav a[href^='#']");
      function getDistanceFromTheTop(element){
        const id = element.getAttribute('href');
        if('active'){
          document.querySelector('nav').classList.remove('active');
        }
        return document.querySelector(id).offsetTop;
         
      }

      // function nativeScroll(distanceFromTheTop){
      //     window.scroll({
      //         top: distanceFromTheTop,
      //         behavior:"smooth"       
      //     });
      // };

      function  scrollToSection(event){
          event.preventDefault();
          const distanceFromTheTop = getDistanceFromTheTop(event.target) -90;
          smoothScrollTo(0, distanceFromTheTop)
 
      };

  links.forEach((link)=>{
      link.addEventListener('click', scrollToSection);
     
  })

  function smoothScrollTo(endX, endY, duration) {
      const startX = window.scrollX || window.pageXOffset;
      const startY = window.scrollY || window.pageYOffset;
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
    
//  ------------------------------------------------------
  // Animate div-Seasons
  animateBoxSeasons =()=>{
    const boxAnime = document.querySelectorAll("[data-anime]");
    const animationClass = 'animate';
  
    function animaScroll(){
      const windowTop = window.scrollY + window.innerHeight * 3 / 4;
  
      boxAnime.forEach(function(el){
       if((windowTop) > el.offsetTop){
        el.classList.add(animationClass);
      
       }else{
        el.classList.remove(animationClass);
       }
  
      })
    }
    window.addEventListener("scroll",function(){
      animaScroll();
    })
  }
  animateBoxSeasons()

}



