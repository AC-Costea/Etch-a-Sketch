function createGrid(rows,cols){
    grid.style.setProperty("--grid-rows",rows)
    grid.style.setProperty("--grid-cols",cols)
    for(i=0;i<(rows*cols);i++){
        const square=document.createElement("div");
        square.classList.add("square")
        
        grid.appendChild(square)
    }
}

const grid=document.querySelector(".grid");

createGrid(20,20)







