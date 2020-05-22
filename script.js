//sidenav


const navBar=document.querySelector(".nav"),
      navList=navBar.querySelectorAll("li"),
      totalNavList=navList.length;
      for(let i=0; i<totalNavList; i++){
          const a=navList[i].querySelector("a");
          a.addEventListener("click",function(){

            for(let j=0; j<totalNavList; j++){
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
          })
      }

const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelectorAll(".aside");
console.log(aside);
console.log(navTogglerBtn);
navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside[0].classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    console.log(aside);
    console.log(navTogglerBtn);
}
