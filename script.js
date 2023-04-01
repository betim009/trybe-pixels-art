const colorPalette = document.getElementById('color-palette');
const colors = document.querySelectorAll('.color');
const boardSize = document.getElementById('board-size');
const generateBoard = document.getElementById('generate-board');

const firstCollor = (color) => {
  const corDaPaleta = document.querySelectorAll('.color')[0];
  corDaPaleta.style.backgroundColor = color;
  corDaPaleta.classList.add('selected');
};

const switchToSelected = () => {
  colorPalette.addEventListener('click', (e) => {
    colors.forEach((color) => {
      color.classList.remove('selected');
    });
    e.target.classList.add('selected');
  });
};

// função que gera uma cor aleatória em formato hexadecimal
const generateRandomColor = () => {
  const hexadecimais = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i += 1) {
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
};

// função que aplica a cor aleatória em todos os elementos com a classe 'color'
const applyRandomColors = () => {
  const paletaDeCores = document.querySelectorAll('.color');
  paletaDeCores.forEach((e) => {
    e.style.backgroundColor = generateRandomColor();
  });
};

const pixelsColor = () => {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.addEventListener('click', (e) => {
    const classeColorSelected = document.querySelector('.selected');
    const newColor = classeColorSelected.style.backgroundColor;
    e.target.style.backgroundColor = newColor;
  });
};

const clearPixels = () => {
  const clearBoard = document.getElementById('clear-board');
  const pixels = document.querySelectorAll('.pixel');

  clearBoard.addEventListener('click', () => {
    pixels.forEach((e) => {
      e.style.backgroundColor = 'white';
    });
  });
};

const botaoVerificaValores = () => {
  generateBoard.addEventListener('click', () => {
    const valor = boardSize.value;
    if (valor < 5 || valor > 50) {
      boardSize.value = Math.min(Math.max(valor, 5), 50);
      alert('Board inválido!');
    }
  });
};

const createColun = () => {
  const pixelBoard = document.getElementById('pixel-board');

  if (boardSize.value > 4 && boardSize.value < 51) {
    for (let index = 0; index < boardSize.value; index += 1) {
      const newColun = document.createElement('div');
      newColun.className = 'container-pixel';
      pixelBoard.appendChild(newColun);
    }
  }
};

const createLine = () => {
  const inputValue = boardSize.value;
  const containerPixel = document.querySelectorAll('.container-pixel');

  containerPixel.forEach((e) => {
    for (let index = 0; index < inputValue; index += 1) {
      const newLine = document.createElement('div');
      newLine.className = 'pixel';
      e.appendChild(newLine);
    }
  });
};

const deletPixels = () => {
  const divPixels = document.querySelectorAll('.container-pixel');
  divPixels.forEach((e) => {
    e.remove();
  });
};

const setNewSize = () => {
  generateBoard.addEventListener('click', () => {
    deletPixels();
    createColun();
    createLine();
    clearPixels();
  });
};

const main = () => {
  botaoVerificaValores();
  switchToSelected();
  setNewSize();
  applyRandomColors();
  pixelsColor();
  clearPixels();
};

window.addEventListener('load', () => {
  main();
  firstCollor('black');
});
