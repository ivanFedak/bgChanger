
const blockChange = ()=>{
    
    const btns = document.querySelectorAll('.main-block__item'),
          wrap = document.querySelector('.body-html'),
          randomBtn = document.querySelector('.main-block__btn');


    
    function randomColor(e) { //genetate random color
        // color: rgb(red, green, blue)
        // color: rgb(255, 255, 255) --- white
        // color: rgb(0, 0, 0) --- black



        // let first = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
        // let second = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
        // let third = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
        // let forth = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
        // let fiveth = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';

        // btns[0].style.backgroundColor = first
        // btns[1].style.backgroundColor = second
        // btns[2].style.backgroundColor = third
        // btns[3].style.backgroundColor = forth
        // btns[4].style.backgroundColor = fiveth

        btns.forEach(item => {
            let rand = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';

            item.style.backgroundColor = rand
        });

        // for (let i = 0; i < btns.length; i++) {
        //     let rand = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
            
        //     btns[i].style.backgroundColor = rand
        // }

    }

    randomColor();


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
    


    


}
export default blockChange; 