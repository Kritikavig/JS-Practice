// const container = document.querySelector("#container");
// const button = document.querySelector("button");
// const output = document.querySelector("#output");


// function handleClick(e) {
//     // e.stopPropagation()
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }


// button.addEventListener("click", handleClick,{capture:true});
// container.addEventListener("click", handleClick, {capture:true});
// document.body.addEventListener("click", handleClick,{capture:true});


const image = document.querySelector('#mainList')
const flower = document.querySelector('#flower')

// flower.addEventListener('click', (e)=>{
//     e.stopPropagation()
//     console.log(e.target.parentNode)
//     console.log('flower selected')
// })

image.addEventListener('click', (e)=>{
    
    //select list item 
    if(e.target.tagName === 'IMG')
    {
        let curr = e.target.parentNode
        console.log(curr)
        curr.remove()
    }
})

