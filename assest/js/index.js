let dropDown = document.querySelector('.dropDown')
let dropMenu = document.querySelector('.dropMenu')
let xMenu = document.querySelector('.x-menu')

dropDown.addEventListener('click', ()=>{
    dropMenu.classList.toggle('toggleNav') 
    xMenu.classList.toggle('fa-bars')
    xMenu.classList.toggle('fa-times')
})

