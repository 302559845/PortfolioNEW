 const buttons = document.querySelector("toggle-button")
if(buttons)
 buttons.addEventListener('click',function(){
     const body1 = document.querySelector('.body');
     body1.classList.toggle('dark')
     console.warn(buttons)
})
