let start = document.querySelector('#start')
let stop = document.querySelector('#stop')

//on click start button start changing color
//generate random hex color, #fffff

let randomColor = function(){

    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)]
    }
    // console.log(color);
    return color;
}

let currInterval;

function startColor(){

    if(currInterval==null)
    {
        currInterval = setInterval(function(){
    
            //attach changed color to background in setinterval
            document.body.style.backgroundColor = randomColor()
    
        }, 1000)
    }
}

function stopColor(){

    //clear curr interval and stop color changing
    clearInterval(currInterval)
    currInterval = null
}

start.addEventListener('click',startColor)
stop.addEventListener('click',stopColor)
    