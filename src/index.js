import './less/index.less'

// Your code goes here!
window.onload = function (evt){
    const heading = document.querySelector('h1')
    heading.textContent = "Ready To Roll"


window.addEventListener('copy', () =>{
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent +=  text
    })
})

document.body.addEventListener('click', evt =>{
    evt.target.classList.toggle('mirror')
})

document.body.addEventListener('dblclick', evt =>{
    evt.target.innerHTML = ''
})
window.addEventListener('keydown', evt =>{
    if (evt.key == 3) {
        document.body.innerHTML = '<h1>Executed Order 66</h1>'
    }
})

document.body.addEventListener('mousemove', evt =>{
    const { clientX, clientY} = evt
    // console.log(`mouse is at ${clientX}: ${clientY}`)
})

const destinations = document.querySelectorAll('.destination')
for(let destination of destinations){
    destination.addEventListener('mouseenter',evt =>{
        destination.style.fontWeight = 'bold'
        
    })
    destination.addEventListener('mouseleave' , () => {
        destination.style.fontWeight = 'initial'
    })
}

}



