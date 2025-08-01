 let expression="";

function press(x){
let display=document.getElementById("display");


    switch(x){
        case"clear":
        expression="";
        
        display.innerText=expression||"0";
        break;
        case "1":
            expression = expression + "1"
              display.innerText=expression;
            break;
        case "2":
            expression = expression + "2"
              display.innerText=expression;
            break;
        case "3":
            expression = expression + "3"
              display.innerText=expression;
            break;
       
        case "/":
                    expression = expression + "/"
                    display.innerText=expression;
                    break;

        case "*":
                    expression = expression + "*"
                  display.innerText=expression;
                    break;

        case "4":
                    expression = expression + "4"
                    display.innerText=expression;
                    break;

        case "5":
                    expression = expression + "5"
                  display.innerText=expression;
                    break;

        case "6":
                    expression = expression + "6"
                    display.innerText=expression;
                    break;
        case "7":
                    expression = expression + "7"
            display.innerText=expression;
                    break;


        case "8":
                    expression = expression + "8"
                    display.innerText=expression;
                    break;

        case "9":
                    expression = expression + "9"
                    display.innerText=expression;
                    break;

        case "0":
                    expression = expression + "0"
                    display.innerText=expression;
                    break;

        case "-":
                    expression = expression + "-"
                    display.innerText=expression;
                    break;
        case ".":
                    expression = expression + "."
                      display.innerText=expression;
                    break;

        case "%":
        //     try {
        //         expression=(eval(expression) /100).toString();
        //         display.innerText=expression;
              
        //     }
        // catch{ 
        //     display.innerText="Error";
        //     expression="";
        // }


        expression = expression + "%"
        display.innerText=expression;



        break;
        case "=":
          try{
                    let operand = expression.split("%"); //arr[0] = NaN
                    if(isNaN(operand[0])){
                      expression = eval(expression).toString();
                      display.innerText=expression;
                    }
                    else{
                        console.log(operand[0]+"  "+operand[1])
                        let percentage = (operand[0]/operand[1]) * 100;
                        display.innerText = String(percentage);
                    }
                  }catch{
                    display.innerText="Error";
                    expression="";
                  }
                  break;
            
        case "+":
                    expression = expression + "+"
                      display.innerText=expression;
                    break;
        }
}