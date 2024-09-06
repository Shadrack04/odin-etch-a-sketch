const content = document.querySelector('.content');
const popUpBtn =document.querySelector('.pop-up');
let numberOfGrid;


popUpBtn.addEventListener('click', () => {
  numberOfGrid = prompt('Enter a number between 2 and 100');
  createGrid(numberOfGrid)
})

function createGrid(num) {
  for(let i = 1; i<=num*num; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridDiv.classList.add(`gridDiv-${i}`);
    gridDiv.style.height = `calc(100%/${num})`; 
    gridDiv.style.width = `calc(100%/${num})`;
  
    content.appendChild(gridDiv);
  }

}

