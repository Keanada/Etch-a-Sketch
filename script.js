const canvas = document.querySelector('.canvas');
const reset = document.querySelector('#reset');
const red = document.querySelector('#red');
const orange = document.querySelector('#orange');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const purple = document.querySelector('#purple');
const white = document.querySelector('#white');
const rColor = document.querySelector('#random');
const startButton = document.querySelector('.getSize');
const colorPicker = document.querySelector('#colorpicker');

const buttons = document.querySelector('.ColorContainer');

buttons.style.display = 'none';

startButton.addEventListener('click', () => {
    
    getSize();
})

getSize = () => {
        let x = prompt("Type grid width + height!");
        startButton.style.display = 'none';
        buttons.style.display = 'block';
        createGrid(x);
    };


createGrid = (x) => {
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
                })
            });

            orange.addEventListener('click', () => {
                div.addEventListener('mouseover', () => {
                    div.setAttribute('style', 'background-color: orange;');
                })
            });
            yellow.addEventListener('click', () => {
                div.addEventListener('mouseover', () => {
                    div.setAttribute('style', 'background-color: yellow;');
                })
            });
    

        blue.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', 'background-color: blue;');
            })
        });

        green.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', 'background-color: green;');
                console.log('green');
            })
        });

        purple.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', 'background-color: purple;');
            })
        });
        white.addEventListener('click', () => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', 'background-color: white;');
            })
        });

        colorPicker.addEventListener('change', () => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', 'background-color: ' + colorPicker.value + ";");
            })
            console.log(colorPicker.value);
        })

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

showColors = () => {
    
}

reset.addEventListener('click', () => {
    canvas.innerHTML = "";
    canvas.style.setProperty("grid-template-columns", `repeat(16, 25px);`);
    canvas.style.setProperty("grid-template-rows", `repeat(16, 25px);`);
    getSize();
});



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



