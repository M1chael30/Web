// ========== Aside
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length


const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside")
navTogglerBtn.addEventListener("click",()=>{
 asideSectionTogglerBtn()
})


document.querySelector(".hire-me").addEventListener("click",function(){
 const sectionIndex = this.getAttribute("data-section-index")
 showSection(this)
 updateNav(this)
 removeBackSection()
 addBackSection(sectionIndex)
})


//loop nav list
for(let i = 0; i < totalNavList; i++){
 
 const a = navList[i].querySelector("a")

 a.addEventListener("click",function(){

  removeBackSection()

  for(let b = 0; b < totalNavList; b++){

   if(navList[b].querySelector("a").classList.contains("active")){
    
    addBackSection(b)
    //allSection[b].classList.add("back-section")
   }

   navList[b].querySelector("a").classList.remove("active")
  }
  this.classList.add("active")
  showSection(this)

  if(window.innerWidth < 1200){
   asideSectionTogglerBtn()
  }
 })
}

//remove back section
function removeBackSection(){
 for(let m = 0; m < totalSection; m++){
  allSection[m].classList.remove("back-section")
 }
}

//add back section
function addBackSection(num){
 allSection[num].classList.add("back-section")
}

//show section
function showSection(element){
 for(let m = 0; m < totalSection; m++){
  allSection[m].classList.remove("active")
 }
 const target = element.getAttribute("href").split("#")[1]
 document.querySelector("#" + target).classList.add("active")
}

//update nav
function updateNav(element){
 for(let i = 0; i < totalNavList; i++){
  navList[i].querySelector("a").classList.remove("active")
  const target = element.getAttribute("href").split("#")[1]
  if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
   navList[i].querySelector("a").classList.add("active")
  }
 }
}

//aside section btn
function asideSectionTogglerBtn(){
 aside.classList.toggle("open")
 navTogglerBtn.classList.toggle("open")
 for(let i = 0; i < totalSection; i++){
  allSection[i].classList.toggle("open")
 }
}