//add event listener on all buttons, change color 

//select all buttons
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

//loop for all buttons
buttons.forEach((button)=>{

    button.addEventListener('click', (e)=>{

        if(e.target.id === 'blue')
            body.style.backgroundColor = e.target.id;

        else if(e.target.id === 'yellow')
            body.style.backgroundColor = e.target.id;

        else if(e.target.id === 'purple')
            body.style.backgroundColor = e.target.id;

        else if(e.target.id === 'red')
            body.style.backgroundColor = e.target.id;
    })
})