//let's carry some elements from html
let hrs = document.querySelector("#hrs")
let min = document.querySelector("#min")
let sec = document.querySelector("#sec")


setInterval(()=>{
    let currentTime = new Date(); //it is a like feature which gives a current time& Date.

    //now we use this time function for particular element
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)
// 1000 refer to one thousand milisec, in short one thousand milisec is 1s

let btn = document.querySelector('#btn');
let page = document.querySelector('.page');
let tap = 0;
let btn2 = document.querySelector('#btn2')


btn.addEventListener("click", function(){ // DARK MODE 
    if(tap == 0){
    page.style.backgroundColor = "#1c1d1c"
    page.style.color = "#00db92"
    btn.style.filter = "invert(1)"
    btn2.style.visibility = "visible"
    btn.style.opacity = "0%"

    tap = 1
    }
    else{
    page.style.backgroundColor = "#00db92" // LIGHT MODE 
    page.style.color = "#fff"
    btn.style.filter = "invert(0)"
    btn2.style.visibility = "hidden"
    btn.style.opacity = "100%"
    tap = 0
    }
})

//about
console.log("Update - Here I Also Added Dark Mode! Just click The Clock")
console.log("hey! if you find any bug then comment it")
console.log("Please like & Share")

