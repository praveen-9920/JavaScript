// console.log(document);
// let a =document.getElementById("demo")
// a.innerText="Praveen";
// let button = document.getElementsByTagName("button");
//store.addEventListener("click",div1)
// console.log(button);
// let store = button[0];
// let body = document.body;


// function color(){
//     store.style.backgroundColor="aqua";
//     a.style.color="red";
//     store.style.fontFamily = "Arial black"
//     store.style.width = "150px"
//     body.style.backgroundColor = "Yellow"
// }


let circle = document.getElementsByTagName("div")
circle[0].addEventListener("click", () => {

    circle[0].style.borderRadius = "50%"
})
console.log(circle)



function div1() {
    circle[0].style.borderRadius = "50%"
}

let array1 = Array.isArray(circle)
console.log(array1);


