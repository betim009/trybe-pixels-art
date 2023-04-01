// function primeiraCorDaPaleta(color) {
//   const corDaPaleta = document.querySelectorAll('.color')[0];
//   corDaPaleta.style.backgroundColor = color;
//   corDaPaleta.classList.add('selected');
// }
// window.primeiraCorDaPaleta('black');

// trocaSelected();
// function trocaSelected() {
//   const divColorPallet = document.getElementById('color-palette');
//   const arrayColors = document.getElementsByClassName('color');
//   divColorPallet.addEventListener('click', function (event) {
//     for (let index = 0; index < arrayColors.length; index += 1) {
//       arrayColors[index].classList.remove('selected');
//     }
//     event.target.classList.add('selected');
//   });
// }

// colorsRandom();
// function colorsRandom() {
//   const chars = '0123456789ABCDEF';
//   let color = '#';
//   const paletaDeCores = document.querySelectorAll('.color');
//   for (let index = 1; index < 4; index += 1) {
//     for (let index = 1; index < paletaDeCores.length; index += 1) {
//       color += chars.charAt(Math.floor(Math.random() * chars.length));
//       console.log(color);
//       paletaDeCores[index].style.backgroundColor = color;
//     }
//   }
// }
// function pixelsColor() {
//   const pixelBoard = document.getElementById('pixel-board');
//   let classeColorSelected = document.querySelector('.selected');
//   let newColor = classeColorSelected.style.backgroundColor;
//   pixelBoard.addEventListener('click', function (event) {
//     if (event.target.style.backgroundColor !== newColor) {
//       classeColorSelected = document.querySelector('.selected');
//       newColor = classeColorSelected.style.backgroundColor;
//       event.target.style.backgroundColor = newColor;
//     } else {
//       classeColorSelected = document.querySelector('.selected');
//       newColor = classeColorSelected.style.backgroundColor;
//       event.target.style.backgroundColor = newColor;
//     }
//   });
// }
// pixelsColor();

// function limpandoPixels() {
//   const botaoReset = document.getElementById('clear-board');
//   const pixels = document.getElementsByClassName('pixel');
//   const resetColor = 'white';
//   botaoReset.addEventListener('click', function (event) {
//     for (let index = 0; index < pixels.length; index += 1) {
//       pixels[index].style.backgroundColor = resetColor;
//     }
//   });
// }
// limpandoPixels();

// function botaoVerificaValores() {
//   const btnInput = document.getElementById('board-size');
//   const btnVQV = document.getElementById('generate-board');
//   btnVQV.addEventListener('click', function (event) {
//     if (btnInput.value === '') {
//       alert('Board inválido!');
//     } else if (btnInput.value < 5) {
//       btnInput.value = 5;
//     } else if (btnInput.value > 50) {
//       btnInput.value = 50;
//     }
//   });
// }
// botaoVerificaValores();

// function defineNovoTamanho() {
//   const btnVQV = document.getElementById('generate-board');
//   btnVQV.addEventListener('click', function (event) {
//     deletPixels();
//     createColun();
//     createLine();
//   });
// }
// defineNovoTamanho();

// function createColun() {
//   const inputValue = document.getElementById('board-size');
//   const pixelBoard = document.getElementById('pixel-board');

//   if (inputValue.value > 4 && inputValue.value < 51) {
//     console.log('TESTANDO');
//     for (let index = 0; index < inputValue.value; index += 1) {
//       const newColun = document.createElement('div');
//       newColun.className = 'container-pixel';
//       pixelBoard.appendChild(newColun);
//     }
//   }
// }

// function createLine() {
//   const inputValue = document.getElementById('board-size').value;
//   const divContainerPixel = document.querySelectorAll('.container-pixel');
//   for (const element of divContainerPixel) {
//     for (let index = 0; index < inputValue; index += 1) {
//       const newLine = document.createElement('div');
//       newLine.className = 'pixel';
//       element.appendChild(newLine);
//     }
//   }
// }

// function deletPixels() {
//   const divPixels = document.querySelectorAll('.container-pixel');
//   for (const element of divPixels) {
//     element.remove();
//   }
// }
