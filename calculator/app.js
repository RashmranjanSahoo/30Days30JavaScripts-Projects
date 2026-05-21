const display = document.querySelector('input[name="display"]');

function appendNumber(num){
    display.value += num;
}

function appendOperator(op){
    let value = display.value;

    if(value === "") return;

    let lastChar = value[value.length-1];

    if(['+','-','*','/'].includes(lastChar)){
        display.value = value.slice(0,-1) + op;
    } else {
        display.value += op;
    }
}

function appendDot(){
    let value = display.value;
    let lastChar = value[value.length-1];

    if(value === ""){
        display.value = "0.";
        return;
    }

    if(['+','-','*','/'].includes(lastChar)){
        display.value += "0.";
        return;
    }

    let parts = value.split(/[+\-*/]/);

    if(!parts[parts.length-1].includes('.')){
        display.value += '.';
    }
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        if(display.value !== ""){
            display.value = eval(display.value);
        }
    }
    catch{
        display.value = "Error";

        setTimeout(()=>{
            display.value="";
        },1000);
    }
}