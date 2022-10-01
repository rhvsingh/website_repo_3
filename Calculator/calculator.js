let display= document.getElementById('display');
let buttons= document.querySelectorAll('button');
let displayvalue="";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('button text is ',buttonText);
        if(buttonText=='X'){
            buttonText='*';
            displayvalue +=buttonText;
            display.value=displayvalue;
        }
        else if(buttonText== 'C')
        {
            displayvalue ="";
            display.value=displayvalue;
        }
        else if(buttonText =='=')
        {
            display.value=eval(displayvalue);
            displayvalue="";
        }
        else{
            displayvalue +=buttonText;
            display.value=displayvalue;
        }
    })
}