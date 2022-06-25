let colors = [];
let pickColor;
const colorDisplay = document.querySelector("#colorDisplay");
const displayMessage = document.querySelector('#message');
const h1Display = document.querySelector("h1");
const restBtn = document.querySelector("#newColor");

const squares = document.querySelectorAll(".square");


initialize();

// generate new color
restBtn.addEventListener('click', () => {
    newColor.textContent = "New Color";
    displayMessage.textContent = "";
    h1Display.style.backgroundColor = 'steelblue';
    initialize();
   
    
});

//setup random colors for all squares
//compare the colors when clicked
function setSquareColor(){
    squares.forEach((square,index)=> {
        square.style.backgroundColor = colors[index];
        square.addEventListener('click', ()=> {
    
            let clickedColor = square.style.backgroundColor;
            console.log(clickedColor);
            if(pickColor === clickedColor){
                changeColor(clickedColor);
                h1Display.style.backgroundColor = clickedColor;
                displayMessage.textContent = 'Correct';
                newColor.textContent = "Play Again";
    
            }
            else{
                displayMessage.textContent = 'Try Again';
                square.style.backgroundColor = 'black';
            }
        })
    });
}


//generate Random colors
function initialize(){
    colors = getRandomColor();
    pickColor = setPickColor();
    setSquareColor();
    colorDisplay.textContent = pickColor;
    
    
}

//color change in background while find correct color
function changeColor(color){
    squares.forEach(square => {
        square.style.backgroundColor = color;
    })
}

function setPickColor(){
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function getRandomColor()
{
    let arr = [];
    for(let i of squares){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor() {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}