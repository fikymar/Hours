const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const digital = document.getElementById('thistime');

  

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
    
    //document.write(`${h}:${m}:${s}`)  
}

setInterval(time,1000);

