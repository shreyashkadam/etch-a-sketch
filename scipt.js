const container = document.querySelector('.container');

const newRowDiv = [];
const newColumnDiv = [];

// using flexbox
function createGrid(row,column){
    for(let i=0; i<column; i++){
        newRowDiv[i] = document.createElement('div');
        newRowDiv[i].classList.add("new-div");
        container.appendChild(newRowDiv[i]);
        for(let j=0; j<row; j++){
            newColumnDiv[j] = document.createElement('div');
            newColumnDiv[j].classList.add("more-new-div");
            newRowDiv[i].appendChild(newColumnDiv[j]);
        }
    }
    
}

function hoverEffect(){
    [...document.querySelectorAll('.more-new-div')].forEach(function(item){
        item.addEventListener('mouseover',function(){
            item.classList.add('black-div');
        });
    });
}

createGrid(100,100);
hoverEffect();


