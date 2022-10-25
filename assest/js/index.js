let dropDown = document.querySelector('.dropDown')
let dropMenu = document.querySelector('.dropMenu')
let xMenu = document.querySelector('.x-menu')
let closeMenu = document.querySelector('.drop-close')
dropDown.addEventListener('click', ()=>{
    dropMenu.classList.toggle('toggleNav')
    console.log(dropMenu.classList.contains('toggleNav'));
    if(dropMenu.classList.contains('toggleNav')){
        xMenu.classList.remove('fa-bars')
        xMenu.classList.add('fa-times')
        closeMenu.style.display = 'block'
    }else{
        xMenu.classList.add('fa-bars')
        xMenu.classList.remove('fa-times')
        closeMenu.style.display = 'none'
    }
})

closeMenu.addEventListener('click',()=>{
    dropMenu.classList.remove('toggleNav')
     xMenu.classList.add('fa-bars')
        xMenu.classList.remove('fa-times') 
    closeMenu.style.display = 'none'
})


let callModal = document.querySelector('.modal-calling-con')
let callModalClose = document.querySelector('.close-calling')
setTimeout(()=>{
    callModal.style.display = 'grid'
},200)
callModalClose.addEventListener('click',()=>{
    callModal.style.display = 'none'

})


let inputs = document.querySelectorAll('.l-f-input')
let inputLabel = document.querySelectorAll('.l-f-label')

inputs.forEach((input , index) => {
    input.parentElement.classList.remove('required')
    input.addEventListener("blur",()=>{
        if(input.value == ''){
            input.parentElement.classList.add('required');
        }else{
            console.log(input.value.length);
            input.parentElement.classList.remove('required');
            inputLabel[index].style.top = '14px'
        }
    })
    input.addEventListener('focus',()=>{
        input.parentElement.classList.remove('required');
    })
});