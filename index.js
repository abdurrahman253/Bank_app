  let btn = document.getElementById('btn_login');
    btn.addEventListener('click', function(event){
        event.preventDefault();
        const numberInput = document.getElementById('number') ;
        const pinInput = document.getElementById('pin') ;

        const mobNum = numberInput.value ;
        const mobPin = pinInput.value; 
       
        const innerNumber = 19777678707 ;
        const innerPin = 1234;


        if(Number(mobNum) == innerNumber && Number(mobPin) == innerPin){
            window.location.href="./home.html"
        }
        else{
            alert("Invalid User Number or Pin")
        }
        
        numberInput.value = '' ;
        pinInput.value = '' ;
        
    });
