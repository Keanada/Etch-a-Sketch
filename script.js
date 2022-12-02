const canvas = document.querySelector('.canvas');
const reset = document.querySelector('.reset');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const rColor = document.querySelector('#random');


createGrid = () => {
    let x = prompt("Type grid width + height!");
    let y = x * x;
    const canvas = document.querySelector('.canvas');
    for (let i = 0; i < y; i++) {
        const div = document.createElement("div");

       canvas.style.gridTemplateColumns = `repeat(` + x + `, 25px)`;
       canvas.style.gridTemplateRows = `repeat(` + x + `, 25px)`;
        div.classList.add('item');
        canvas.appendChild(div);

        div.addEventListener('mouseover', () => {
            div.setAttribute('style', 'background-color: white;');
            console.log('blue');
        });

            red.addEventListener('click', () => {
                div.addEventListener('mouseover', () => {
                    div.setAttribute('style', 'background-color: red;');
                    console.log('blue');
                })
            });

        blue.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', 'background-color: blue;');
                console.log('blue');
            })
        });

        green.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', 'background-color: green;');
                console.log('green');
            })
        });

        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        rColor.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', `background-color: rgb(` + r + `, ` + g + `, ` + b + `);`);

            })
        });
    }
}





reset.addEventListener('click', () => {
    canvas.innerHTML = "";
    canvas.style.setProperty("grid-template-columns", `repeat(16, 25px);`);
    canvas.style.setProperty("grid-template-rows", `repeat(16, 25px);`);
    createGrid();
})


createGrid();



/*
const grid = document.createElement('div');
grid.classList.add('item');
grid.textContent = '4';
canvas.appendChild(grid);

const grid1 = document.createElement('div');
grid1.classList.add('itemz');
grid1.textContent = '45';
canvas.appendChild(grid1);


const grid3 = document.createElement('div');
grid3.classList.add('item');
grid3.textContent = '45';
canvas.appendChild(grid3);


*/



