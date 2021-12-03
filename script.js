const container = document.querySelector('#container');

function makeGrid(size) {
    for (i=1; i <= size*size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.style.width = 500 / size + "px";
        square.style.height = 500 / size + "px";

        square.addEventListener('mouseenter', function(){
            square.classList.add("active");
        });
    }

    container.style.width = "500px";
    container.style.height = "500px";
}

makeGrid(16, 20);

const btn = document.querySelector('#newGame');
btn.addEventListener('click', () => {
    
    function removeAllChildNodes(parent){
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    removeAllChildNodes(container);

    var quantity = prompt("Please enter the number of squares for your grid:");

    if (quantity <= 100){
        makeGrid(quantity);
    } else {
        alert("Please try again with a number less than 100.")
    }
});
