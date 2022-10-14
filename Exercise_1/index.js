// let count = 1;

// function increment() {
//   document.getElementById("cookie_count").innerText = count;
//   count += 1;
//   console.log("The button was clicked");

// }


const body = document.querySelector("body");
body.style.background = "black";
body.style.display = "flex";
body.style.flexDirection = "column";

let count = 0;

const button = document.querySelector("button");
button.style.width = "40vw";
button.style.height = "auto";
button.addEventListener("click", function () {
  count = count + 1;
  console.log(count);
  counter.textContent = count;
});

const counter = document.querySelector("h2");
counter.style.color = "whitesmoke";
counter.textContent = count;
