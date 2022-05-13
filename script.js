const container = document.querySelector('#container');

function makeGrid(size) {
    for (i=1; i <= size*size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.style.width = 500 / size + "px";
        square.style.height = 500 / size + "px";

        square.addEventListener('mouseenter', function(){
            square.classList.add(squareClass);
        });
    }

    container.style.width = "500px";
    container.style.height = "500px";
}

makeGrid(16, 20);

const gameBtn = document.querySelector('#newGame');
gameBtn.addEventListener('click', () => {
    
    function removeAllChildNodes(parent){
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(container);

    var quantity = prompt("Please enter a number between 1 and 100 to choose your pixel size:");

    if (quantity <= 100){
        makeGrid(quantity);
    } else {
        alert("Please try again with a number less than 100.")
    }
});

let button = false
let squareClass = "active"

const colourBtn = document.querySelector('#colour')
colourBtn.addEventListener('click', () => {
    if(button === true){
        button = !button
        colourBtn.textContent = "Blue again!"
        return squareClass = "active"
    } else {
        button = !button
        colourBtn.textContent = "Back to Black!"
        return squareClass = "colour"
    }    
})


