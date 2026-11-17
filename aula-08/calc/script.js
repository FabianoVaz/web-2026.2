const visor = document.querySelector("#visor");
const buttons = document.querySelectorAll("button");

let num1 = num2 = 0;
let op = ""
let ultimoBtnNum = "C";
visor.textContent = "0"

buttons.forEach( (b) =>{
    b.addEventListener('click', (e)=>{
        let btn = e.target.textContent
        if(!isNaN(btn)){
            visor.textContent = !isNaN(ultimoBtnNum) || ultimoBtnNum == "." ? visor.textContent + btn : btn;
        }else{
            switch(btn){
                case "C":
                    num1 = num2 = 0
                    op = ""
                    visor.textContent = "0"
                    break
                case "x":
                    visor.textContent = visor.textContent.length==1 ? "0" : visor.textContent.slice(0,-1)
                    break;
                case ".":
                    visor.textContent = visor.textContent.includes(".") ? visor.textContent : visor.textContent + btn
                    break;
                case "=":
                    resultado();
                    op = ""
                    break;
                default:
                    resultado();
                    op = btn;
                    break;
                }
            }
            ultimoBtnNum = btn
        });
    } )
    
function resultado(){
    num2 = parseFloat(visor.textContent);
    switch (op) {
        case "+": num1 += num2; break;
        case "-": num1 -= num2; break;
        case "/": num1 /= num2; break;
        case "*": num1 *= num2; break;
        default: num1 = num2; break;
    }
    visor.textContent = num1;
}