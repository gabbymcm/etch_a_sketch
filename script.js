const container = document.querySelector('#container');


for (i=1; i <= 256; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseenter', function(e){
        e.target.style.background = 'black';
    });

}

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
        for (i=1; i <= (quantity*quantity); i++){
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        
            square.addEventListener('mouseenter', function(e){
                e.target.style.background = 'black';
            });
        };
    } else {
        alert("Please try again with a number less than 100.")
    }
});


