// const decreaseTextSize = ()=> {
//     document.getElementById("larger-text").innerHTML = 
//     console.log("The text size was decreased")
// };

// const increaseTextSize = ()=> {
//     document.getElementById("larger-text").innerText =
//     console.log("The text size was increased")
// };


// let count = 1;
// function increment() {
//   document.getElementById(“cookie_count”).innerText = count;
//   count += 1;
//   console.log(“The button was clicked”);
// }

// let count = 0;

// const button = document.querySelector("button");
// button.style.width = "40vw";
// button.style.height = "auto";
// button.addEventListener("click", function () {
//   count = count + 1;
//   console.log(count);
//   counter.textContent = count;
// });

// const counter = document.querySelector("h2");
// counter.style.color = "whitesmoke";
// counter.textContent = count;



let body = document.querySelector("body")
body.style.background = "lightpink"

let p = document.createElement("p")
p.textContent = "I like cookie!"
body.append(p)

let text = document.querySelector("p");
// text.style.fontSize = "100px"

const smallTextButton = document.querySelector("#small-text-button")
smallTextButton.addEventListener("click", function() {
    text.style.fontSize = "10px"
})

const largeTextButton = document.querySelector("#large-text-button")
largeTextButton.addEventListener("click", function() {
    text.style.fontSize = "100px"
})


