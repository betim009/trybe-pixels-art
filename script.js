//Variaveis gerais
/*
let divBlack = document.querySelectorAll('.color')[0];
let divBlue = document.querySelectorAll('.color')[1];
let divRed = document.querySelectorAll('.color')[2];
let divYellow = document.querySelectorAll('.color')[3];
divBlue.style.backgroundColor = 'blue';
divRed.style.backgroundColor = 'red';
divYellow.style.backgroundColor = 'yellow';
//
let divsPixels = document.querySelectorAll('.pixel');
//
function iniciarComPretao(){
    divBlack.classList.add('selected');
    divBlack.style.backgroundColor = 'black'
}
window.onload = iniciarComPretao()
//



function firstSquare(){
    let squareSelected = document.getElementsByClassName('color selected');
    let squares = document.getElementsByClassName('color')
    divBlack.addEventListener('click', function(event){   
        if(squareSelected.length === 0){
            event.target.className = 'color selected'
        } else {
            event.target.className = 'color'
        }    
    })
}
firstSquare()




function alteracor(){
    if(divsPixels[0].style.backgroundColor === 'blue'){
        divsPixels[0].style.backgroundColor = 'white'
    } else{
        divsPixels[0].style.backgroundColor = 'blue'
    }

}

divsPixels[0].addEventListener('click', alteracor)

*/

//1
function primeiraCorDaPaleta(color){
    const corDaPaleta = document.querySelectorAll('.color')[0]
    corDaPaleta.style.backgroundColor = color;
    corDaPaleta.classList.add("selected");
}
window.primeiraCorDaPaleta('black');

/*function trocaSelected(){
    const divColorPallet = document.getElementById('color-palette');
    let paletaClassSelected = document.getElementsByClassName('color selected');

    divColorPallet.addEventListener('click', function(event){
        if(event.target.className === 'color selected'){
            event.target.className = 'color';
        } else if (event.target.className === 'color'){
            event.target.className = 'color selected';
        }
        
    })
}
trocaSelected(); */

function trocaSelected(){
    const divColorPallet = document.getElementById('color-palette');
    const arrayColors = document.getElementsByClassName('color')
    let paletaClassSelected = document.getElementsByClassName('color selected');

    divColorPallet.addEventListener('click', function(event){
       for(let index = 0; index < arrayColors.length; index += 1){
        arrayColors[index].classList.remove('selected')
       }
       event.target.classList.add('selected')
        
    })
}
trocaSelected();

//

function addCoresNaPaleta(color){
    const paletaDeCores = document.querySelectorAll('.color');
    const UMpaletaDecores = document.querySelectorAll('.color')[0]

    for(let index = 1; index < paletaDeCores.length; index +=1){
        //console.log('teste')
        paletaDeCores[index].style.backgroundColor = color[index];
    }
}
addCoresNaPaleta(['undefined', 'red', 'blue', 'yellow']);



//const corSelected = document.getElementsByClassName('color selected')[0];
//let cor = corSelected.style.backgroundColor; //
//if(corSelected.style.backgroundColor != 'pink'){
//    console.log('oreti')
//}
/*
function pintarPixels(){
    const divsPixels = document.querySelectorAll('.pixel')
    const corSelected = document.getElementsByClassName('color selected')[0];
    let divPaletaDeCores = document.getElementById('color-palette')
    let cor = corSelected.style.backgroundColor; //

    for(let index = 0; index < divsPixels.length; index +=1){
        if(divsPixels[index].style.backgroundColor !== cor){
            divsPixels[index].style.backgroundColor = cor;
        }
        else {
            divsPixels[index].style.backgroundColor = 'white';
        }
    }
}
pintarPixels()
*/


function testando(){
    let divPaletaDeCores = document.getElementById('color-palette')
    const pixels = document.getElementsByClassName('pixel');
    const pixelBoard = document.getElementById('pixel-board');
    //let primeiroSquare = document.querySelectorAll('.pixel')[0];
    let classeColorSelected = document.querySelector('.selected');
    let newColor = classeColorSelected.style.backgroundColor;
    const color = 'white';
    // console.log(newColor)



    pixelBoard.addEventListener('click', function(event){
        if(event.target.style.backgroundColor !== newColor){
            classeColorSelected = document.querySelector('.selected');
            newColor = classeColorSelected.style.backgroundColor;
            event.target.style.backgroundColor = newColor;
        } else{
            classeColorSelected = document.querySelector('.selected');
            newColor = classeColorSelected.style.backgroundColor;
            event.target.style.backgroundColor = newColor;
        }
        
    })
}
testando()


function limpandoPixels(){
    const botaoReset = document.getElementById('clear-board');
    const pixels = document.getElementsByClassName('pixel');
    const resetColor = 'white';

    botaoReset.addEventListener('click', function(event){
        for(let index = 0; index < pixels.length; index +=1){
            pixels[index].style.backgroundColor = resetColor;
        }
    })
}   
limpandoPixels();

function botaoVerificaValores (){
    const btnInput= document.getElementById('board-size');
    const btnVQV = document.getElementById('generate-board')

    btnVQV.addEventListener('click', function(event){
        if(btnInput.value === ''){
            alert('Board inválido!');
        } else if(btnInput.value < 5){
            btnInput.value = 5;
        } else if(btnInput.value > 50){
            btnInput.value = 50;
        }
    })
}
botaoVerificaValores()

function defineNovoTamanho(){
    const btnVQV = document.getElementById('generate-board')

    btnVQV.addEventListener('click', function(event){
        deletPixels();
        createColun();
        createLine();
    })
}
defineNovoTamanho();



// function createColun (){
//     const btnVQV = document.getElementById('generate-board')
//     const inputValue = document.getElementById('board-size')
//     const pixelBoard = document.getElementById('pixel-board')

//     btnVQV.addEventListener('click', function(event){
//         if (inputValue.value > 4 && inputValue.value < 51) {
//             console.log('TESTANDO')
//             for(let index = 0; index < inputValue.value; index += 1){
//                 const newColun = document.createElement('div');
//                 newColun.className = 'container-pixel';
//                 pixelBoard.appendChild(newColun);
//             }
//             // createLine();
//             // testedoteste();
//         }
//     })
// }
// createColun();


function createColun(){
    const inputValue = document.getElementById('board-size');
    const pixelBoard = document.getElementById('pixel-board');

    if (inputValue.value > 4 && inputValue.value < 51) {
        console.log('TESTANDO')
        for(let index = 0; index < inputValue.value; index += 1){
            const newColun = document.createElement('div');
            newColun.className = 'container-pixel';
            pixelBoard.appendChild(newColun);
        }
}
}

function createLine() {
    const inputValue = document.getElementById('board-size').value
    const divContainerPixel = document.querySelectorAll('.container-pixel');
    for (const element of divContainerPixel) {
        for(let index = 0; index < inputValue; index += 1){
            const newLine = document.createElement('div'); 
            newLine.className = 'pixel';
            element.appendChild(newLine);
        }
        }
    } 

function testedoteste (){
    const teste = document.querySelectorAll('.teste'); //array
    const inputValue = document.getElementById('board-size').value //valor input
    for (const element of teste) {
        for(let index = 0; index < inputValue; index += 1){
            const newLine = document.createElement('p'); 
            element.appendChild(newLine);
        }
        
    }
}
// testedoteste();

function deletPixels(){
    const divPixels = document.querySelectorAll('.container-pixel');
    for (const element of divPixels) {
        element.remove() 
    }
}
// deletPixels()





