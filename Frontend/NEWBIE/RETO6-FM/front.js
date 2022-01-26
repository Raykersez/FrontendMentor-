const block = document.querySelectorAll('.block')
const h2 = document.querySelectorAll('.h2')

h2.forEach((cH2 , i)=>{
    h2[i].addEventListener('click',()=>{
        block.forEach((cBlock , i)=>{
            block[i].classList.remove('activated')
        })
         block[i].classList.add('activated')
    })
})