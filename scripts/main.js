function init(squaresPerSide=16){

    let gridContainer = document.querySelector('#grid-container');
    gridContainer.style['grid-template-columns'] = `repeat(${squaresPerSide}, 1fr)`;
    gridContainer.style['grid-template-rows'] = `repeat(${squaresPerSide}, 1fr)`;
    
    for(let i = squaresPerSide*squaresPerSide; i > 0; i--){
        let childDiv = document.createElement('div');
        childDiv.classList.add('field');
        childDiv.addEventListener('mouseover', () => {
            childDiv.classList.add('painted-field');
        });
        gridContainer.appendChild(childDiv);
    }
}

function clear() {
    let paintedFields = document.querySelectorAll('div.painted-field');
    paintedFields.forEach(paintedField => {
        paintedField.classList.remove('painted-field');
    });
}

function startNewSketch(){
    let squaresPerSide = prompt('How many squares do you want per side?');
    let squaresPerSideNumber = parseInt(squaresPerSide);

    if(typeof squaresPerSideNumber != "number"){
        init();
        return;
    }
    
    init(squaresPerSideNumber);
}

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', clear);
clearBtn.addEventListener('click', startNewSketch);

init();