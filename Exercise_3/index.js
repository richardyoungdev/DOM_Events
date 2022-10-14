
const body = document.querySelector("body")
// body.style.background = "black"

const button = document.querySelector("button")

button.addEventListener("click", function(){
    // get input value 
    const searchTxt = document.getElementById('myInput').value;
    
    // if assigned input value is blank, do not change background color
    if(searchTxt === ""){
        alert("Please type your favorite color.")
    }

    // assign input value to value of background
    body.style.background = searchTxt
    console.log(searchTxt)
})

const inputOnEnter = document.getElementById("myInput")
inputOnEnter.addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        event.preventDefault()

        // get input value 
        const searchTxt = document.getElementById('myInput').value;

        // if assigned input value is blank, do not change background color
        if(searchTxt === ""){
            alert("Please type your favorite color.")
        }

        // assign input value to value of background
        body.style.background = searchTxt
        console.log(searchTxt)
        }
})