const btnOne = document.getElementById('btnOne')
const btnTwo = document.getElementById('btnTwo')
// const main = document.getElementById('main')

let body = document.getElementById('light')
body = false



btnOne.addEventListener('click', (e)=>{
    // e.preventDefault()
    body = !body
    if(body){
        document.body.style.backgroundColor = 'white'
    }else{
        document.body.style.backgroundColor = 'black'
    }
    // console.log('click')
})

btnTwo.addEventListener('click', (e)=>{
    // e.preventDefault()
    body = !body
    if(body){
        document.body.style.backgroundColor = 'white'
    }else{
        document.body.style.backgroundColor = 'black'
    }
    // console.log('click')
})