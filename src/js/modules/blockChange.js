
const blockChange = ()=>{
    
    const btns = document.querySelectorAll('.main-block__item'),
          wrap = document.querySelector('.body-html'),
          result = document.querySelector('.main-block__result'),
          randomBtn = document.querySelector('.main-block__btn');


    
    function randomColor(e) { //genetate random color
        // color: rgb(red, green, blue)
        // color: rgb(255, 255, 255) --- white
        // color: rgb(0, 0, 0) --- black

        btns.forEach(item => {
            let rand = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';

            item.style.backgroundColor = rand
        });
    }

    randomColor();

    // let inerval = setInterval(randomColor,5000)

    btns.forEach((item,i) => {
        item.addEventListener('click',function(e){
            wrap.style.backgroundColor =  window.getComputedStyle(e.target).backgroundColor;
            // randomColor();
            console.log(wrap.style.backgroundColor);
        })
    });

    randomBtn.addEventListener('click',function(e){
        randomColor();
    })
    

    document.addEventListener('click',function(e){
        result.textContent = wrap.style.backgroundColor
    })
    
    
    

}
export default blockChange; 