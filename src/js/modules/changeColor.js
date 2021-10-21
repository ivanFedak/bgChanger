const change = ()=>{
    
    const wrap = document.querySelector('.body-html'),
          error = document.querySelector('.main__error'),
          changeBtn = document.querySelector('.main__change-btn'),
          inp = document.querySelector('.main__input'),
          btn = document.querySelector('.main__btn');



    function changeColorByClick(e) {
        // color: rgb(red, green, blue)
        // color: rgb(255, 255, 255) --- white
        // color: rgb(0, 0, 0) --- black


        wrap.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' 
                                            + Math.round(Math.random() * 255) + ',' 
                                            + Math.round(Math.random() * 255) + 
                                        ')';
    }

    function changeColorByInput(e) {
        let value = inp.value;

        let req = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/gi; //Проверка на hex

        if(!req.test(value)){//Якшо user ввiх не hex
            inp.value = ''
            error.classList.add('main__error_active'); //show error
        }else{   
            error.classList.remove('main__error_active');
        }

        wrap.style.backgroundColor = value;
    }




    
    changeBtn.addEventListener('click',function(e){//Random by btn
        changeColorByClick();
    })
    
    btn.addEventListener('click',function(e){ //Btn to chage hex
        changeColorByInput();
    })
    
    inp.addEventListener('click',function(e){ //Click by input 
        inp.value = '#'
        error.classList.remove('main__error_active');
    })

    inp.addEventListener('keydown', function(e){//Click enter
        if(e.code == 'Enter'){
            changeColorByInput();
        }
        if(e.code == 'Delete'){
            input.value = ''
        }
    })
    


}
export default change;