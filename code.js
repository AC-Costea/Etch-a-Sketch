function createGrid(x){
    grid.style.setProperty("--grid-rows",x);
    grid.style.setProperty("--grid-cols",x);
    for(i=0;i<(x*x);i++){
        const square=document.createElement("div");
        square.classList.add("square");
        
        grid.appendChild(square);
    }
}

let r="background: rgb(192, 192, 192);";
function color(e){
    e.target.outerHTML=`<div class=\"square\" style=\"${r}\"></div>`;
}

function clearGrid(){
    const cells=document.querySelectorAll(".square");
    cells.forEach(cell=>{
        cell.remove();
    })

    createGrid(x);
    const squares=document.querySelectorAll(".square");
    squares.forEach(square=>square.addEventListener("mouseover",color));
}

let x=4

function gridSize(){
    y=prompt("Introduce the grid size(between 1 and 100): ");
    if(y===null){
    }else{
        x=parseInt(y)
        if(isNaN(x)){
            alert("Please introduce a number");
        }else if(x>100){
            alert("It has to be smaller than 100");
        }else if(x<1){
            alert("It has to be bigger than 0");
        }else{
            changeGrid.textContent=`${x} x ${x}`;
            clearGrid();
        }
    }
    
}

function chooseColor(){
    for(i=0;i<colors.length;i++){
        const colorSquare=document.createElement("div");
        colorSquare.classList.add("colorSquare");
        colorSquares.appendChild(colorSquare);
        colorSquare.style.background=colors[i];
    }

}



const colors=["#FFFFFF","#000000","#FF0000","#00FF00","#0000FF","#FFFF00","#00FFFF","#FF00FF","#C0C0C0","#A94B37"];
const colorSquares= document.querySelector(".colorSquares");
const clear=document.querySelector("#clear");
const grid=document.querySelector(".grid");

createGrid(4);
const squares=document.querySelectorAll(".square");
squares.forEach(square=>square.addEventListener("mouseover",color));

clear.addEventListener("click",clearGrid);

const changeGrid=document.querySelector("#changeGrid");

changeGrid.addEventListener("click",gridSize);

chooseColor();

const colorSquares2=document.querySelectorAll(".colorSquare");
colorSquares2.forEach(colorSquare=>colorSquare.addEventListener("click",(e)=>{
    r=e.target.attributes.style.value;
    const colorShow=document.querySelector(".color");
    colorShow.style=r;
}))