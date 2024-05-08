let inputVal = ""  ;
let inputBox = document.getElementById('inputBox')
const buttons = document.querySelectorAll("button") ;
const operators=['+' , '*' , '-' , '/' ,'%' ]
const inputModifiers = ['=' , 'AC' ,'DEL' ]


buttons.forEach(button=>[
    button.addEventListener("click" , ()=>{
        let clickedVal = button.innerText ;
  
        if(inputVal==="" && (operators.includes(clickedVal) || inputModifiers.includes(clickedVal)) ){
        } else{
            clickHandler(button.innerText)

        }

    })
])


function clickHandler(clickedVal){

    //edge case h agar tune koi operation perform kia and uska ans zero aaya to agli baar phirse type lrega kuch to 01 02 esa aayega
    if(inputBox.value==="0"){
        inputVal=""
    }
    //first-case check kr del ac or = mese koi nahi hai na
    if(inputModifiers.includes(clickedVal)){
        if(clickedVal===inputModifiers[0]){
              inputVal=eval(inputVal)

            //   console.log(inputVal)
        } else if(clickedVal===inputModifiers[1]){
            inputVal="";
        }else{
            if(inputBox.value!=="Infinity"){
                inputVal=String(inputVal)
              inputVal=inputVal.substring(0 , inputVal.length-1) ;
            }else{
                inputVal="" ;
            }
        }
        //warna khaali append karta jaaa
    }else{
        inputVal+=clickedVal
    }
    //last me uppar value display

    inputBox.value=inputVal
    
    
    

}


