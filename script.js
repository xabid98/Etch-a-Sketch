const container=document.getElementById('container')


let div = document.createElement("div");
div.classList.add('card')

for (let j = 0; j < 16; j++) {    
    for (let i = 0; i < 16; i++) {
        let m=480/16
        let div = document.createElement("div");
        div.classList.add('card')   
        div.style.width=`${m}px`
        container.appendChild(div)  

        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor='red';
        })
        div.addEventListener('mouseleave', () => {
            div.style.backgroundColor='white';
        })
        

    }
}
