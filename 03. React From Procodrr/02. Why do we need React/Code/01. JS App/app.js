
let right = document.querySelector(".right")
let left = document.querySelector(".left")

let leftConatiner = document.querySelector(".left-container p")
let RightConatiner = document.querySelector(".right-container p")


let totalApples = 10 
let leftContainerApples = totalApples
let rightContainerApples = 0


function updateUI(){
      leftConatiner.textContent = `${leftContainerApples} Apples`
    RightConatiner.textContent = `${rightContainerApples} Apples`
}
updateUI()

right.addEventListener("click", (()=>{
    if(leftContainerApples > 0){
    leftContainerApples--
    rightContainerApples++
}
   updateUI()
}))

left.addEventListener("click", (()=>{
   if(rightContainerApples > 0){
     leftContainerApples++
    rightContainerApples--
   }
   updateUI()
}))