// Criar pixelboard

function createPixelBoard(size) {
  const boardContainer = document.querySelector('#pixel-board')

  if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }

  for (let indexLine = 0; indexLine < size; indexLine += 1) {
    let line = document.createElement('section');
    line.className = 'line-pixels'
    for (let indexColum = 0; indexColum < size; indexColum += 1) {
      let colum = document.createElement('div');
      colum.className = 'pixel'
      line.appendChild(colum);
    }
    boardContainer.appendChild(line);  
  }
}

createPixelBoard (5);

// Requisito 7 - escolher qual cor da paleta estará selecionada

const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');

function selectColor(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

color1.addEventListener('click', selectColor);
color2.addEventListener('click', selectColor);
color3.addEventListener('click', selectColor);
color4.addEventListener('click', selectColor);

// Requisito 8 - pintando os elementos com a classe pixels de acordo com a cor da classe selected

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('pixel')) {
    const selected = document.querySelector('.selected');
    const colorOfSelected = window.getComputedStyle(selected).getPropertyValue('background-color');
    
    event.target.style.backgroundColor = colorOfSelected;
  }
});

// Requisito 9 - adicionando botão de clear...

function addClearButton (string) {
  const buttonContainer = document.querySelector('.clear-button-container')
  const buttonClear = document.createElement('button');
  let buttonId = 'clear-board';

  buttonClear.innerHTML = string;
  buttonClear.id = buttonId;
  buttonContainer.appendChild(buttonClear);
};

addClearButton ('Limpar');

// ...atribuindo função de apagar ao botão

const clearButton = document.querySelector('#clear-board');

clearButton.addEventListener('click', function () {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    let pixelClear = pixels[index];
    pixelClear.style.backgroundColor = 'white';
  }
});

// Requisito 10 e 11 - adicionando gerador de tamanho de tabela

//adicionando botão e input...

function addBoardSizer (string) {
  const sizerContainer = document.querySelector('.board-size-container')
  
  const inputSize = document.createElement('input');
  let inputId = 'board-size';
  inputSize.id = inputId;
  inputSize.setAttribute('type', 'number');
  inputSize.setAttribute('min', '1');
  inputSize.setAttribute('max', '50');

  const buttonSize = document.createElement('button');
  let buttonId = 'generate-board';
  buttonSize.innerHTML = string;
  buttonSize.id = buttonId;

  sizerContainer.appendChild(inputSize);
  sizerContainer.appendChild(buttonSize);
};

addBoardSizer('VQV');

//...criando função que aplica os valores

const pixelsSizer = document.querySelector('#generate-board')

pixelsSizer.addEventListener('click', function() {
  const input = document.querySelector('#board-size');
  const value = input.value;

  if (value === '') {
    return window.alert('Board inválido!');
  }

  const boardContainer = document.querySelector('#pixel-board');
  const linesPixels = document.querySelectorAll('.line-pixels');
  
  for (let index = 0; index < linesPixels.length; index += 1) {
    const linesRemove = linesPixels[index];
    boardContainer.removeChild(linesRemove);
  }

  createPixelBoard(value);
});

// Requisito 12 - gerando cores aleatórias

function randomColors () {

  const hexArray = '0123456789ABCDEF'
  let color = '#'

  for (let index = 0; index < 6; index += 1) {
    color += hexArray[Math.floor(Math.random() * 16)];
  }
  return color
}

function aplyRandomColors () {
 const colorTwo = document.getElementById('color2');
 const colorThree = document.getElementById('color3');
 const colorFour = document.getElementById('color4');

 colorTwo.style.backgroundColor = randomColors();
 colorThree.style.backgroundColor = randomColors();
 colorFour.style.backgroundColor = randomColors();
}

aplyRandomColors();