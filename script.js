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
        console.log(event.target);
        arrayColors[index].classList.remove('selected')
       }
       event.target.classList.add('selected')
        
    })
}
trocaSelected();

//

function addCoresNaPaleta(color){
    const paletaDeCores = document.querySelectorAll('.color');

    for(let index = 1; index < paletaDeCores.length; index +=1){
        //console.log('teste')
        paletaDeCores[index].style.backgroundColor = color[index];
    }
}
addCoresNaPaleta([undefined, 'red', 'blue', 'yellow']);



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
    const classeColorSelected = document.getElementsByClassName('color selected')[0];
    const newColor = classeColorSelected.style.backgroundColor;
    const color = 'white';



    pixelBoard.addEventListener('click', function(event){
        if(event.target.style.backgroundColor !== newColor){
            event.target.style.backgroundColor = newColor;
        } else{
            event.target.style.backgroundColor = color;
        }
        
    })
}
testando()

