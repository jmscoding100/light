const onBtn = document.getElementById('onBtn')
const offBtn = document.getElementById('offBtn')
// const main = document.getElementById('main')
const body = document.getElementById('body')

onBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    // console.log('click')
    body.style.backgroundColor = 'white'
})


offBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    // console.log('click')
    body.style.backgroundColor = 'black'
})

