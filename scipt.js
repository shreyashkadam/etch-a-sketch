const container = document.getElementById('container');

const newRowDiv = [];
const newColumnDiv = [];

//using cssGrid
function createGrid(row,column){
    container.style.setProperty('--gridRow', row);
    container.style.setProperty('--gridColumn', column);
    for(let i=0; i<(row*column); i++){
        let newRowDiv = document.createElement('div');
        newRowDiv.classList.add("new-div");
        container.appendChild(newRowDiv);
    }
    
}

function hoverEffect(){
    [...document.querySelectorAll('.new-div')].forEach(function(item){
        item.addEventListener('mouseover',function(){
            item.classList.add('black-div');
        });
    });
}

createGrid(10,10);
hoverEffect();

// using flexbox
// function createGrid(row,column){
//     for(let i=0; i<column; i++){
//         newRowDiv[i] = document.createElement('div');
//         newRowDiv[i].classList.add("new-div");
//         container.appendChild(newRowDiv[i]);
//         for(let j=0; j<row; j++){
//             newColumnDiv[j] = document.createElement('div');
//             newColumnDiv[j].classList.add("more-new-div");
//             newRowDiv[i].appendChild(newColumnDiv[j]);
//         }
//     }
    
// }
