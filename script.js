const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const digital = document.getElementById('thistime');

//colors
const hoursFrame = document.querySelector('.hoursFrame');
const h2 = document.querySelector('h2');
const h1 = document.querySelector('h1');
const colorArr = ['#202C39', '#283845', '#B8B08D', '#ECADBE', '#F29559'];
const colorArr1 = ['#2D3142', '#4F5D75', '#EF8354', '#BFC0C0', '#FFFFFF'];
const colorArr2 = ['#022b3aff', '#1f7a8cff', '#bfdbf7ff', '#e1e5f2ff', '#ffffffff'];
const colorArr3 = ['#5F0F40', '#9A031E', '#FB8B24', '#E36414', '#0F4C5C'];
const colorArr4 = ["#0a0908","#22333b","#f2f4f3","#a9927d","#5e503f"];
const colorArr5 = ["#ffd9da","#ea638c","#89023e","#30343f","#1b2021"];
const colorArr6 = ["#b09e99","#fee9e1","#fad4c0","#64b6ac","#c0fdfb"];
let colors = [colorArr, colorArr1, colorArr2,colorArr3, colorArr4, colorArr5, colorArr6];

  
function time (){
    const timeNow = new Date();
    with (timeNow){
        h = getHours();
        m = getMinutes();
        s = getSeconds();
    }
   
    hours.style.transform = `rotate(${h*30+ 90 +30}deg)`
    minutes.style.transform = `rotate(${(m*6)+90}deg)`
    seconds.style.transform = `rotate(${(s*6)+90}deg)`
    const text = document.createElement('h2')
    digital.textContent = `${h}:${m}:${s}`;
}

setInterval(time, 1000);

function colorChange() {

    let randomColor = Math.floor(Math.random() * colors.length);

    hours.style.backgroundColor = colors[randomColor][1];
    console.log(colors[randomColor][3])
    minutes.style.backgroundColor = colors[randomColor][1];
    seconds.style.backgroundColor = colors[randomColor][3];
    hoursFrame.style.borderColor = colors[randomColor][3];
    hoursFrame.style.boxShadow = `0 0 10px 10px ${colors[randomColor][1]},
    inset 0 0 5px 10px ${colors[randomColor][2]}`;
    h2.style.backgroundColor = colors[randomColor][1];
    h1.style.color = colors[randomColor][0];

    document.body.style.background = `linear-gradient(1.25turn,${colors[randomColor][4]}, ${colors[randomColor][0]})`;
};

setInterval(colorChange, 4000);


