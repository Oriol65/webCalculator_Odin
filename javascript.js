const displayedNumber = document.querySelector("#displayedNumber")
const oldDisplay= document.querySelector('#past')
//Normal Numbers
document.querySelector("#numberOne").onclick = () => displayUpdate(first+='1');
document.querySelector("#numberTwo").onclick = () => displayUpdate(first+='2');
document.querySelector("#numberThree").onclick = () => displayUpdate(first+='3');
document.querySelector("#numberFour").onclick = () => displayUpdate(first+='4');
document.querySelector("#numberFive").onclick = () => displayUpdate(first+='5');
document.querySelector("#numberSix").onclick = () => displayUpdate(first+='6');
document.querySelector("#numberSeven").onclick = () => displayUpdate(first+='7');
document.querySelector("#numberEight").onclick = () => displayUpdate(first+='8');
document.querySelector("#numberNine").onclick = () => displayUpdate(first+='9');
document.querySelector("#numberZero").onclick = () => displayUpdate(first+='0');
document.querySelector("#sign").onclick = () => signChange();
document.querySelector("#period").onclick = () => console.log('.');
//Operators
document.querySelector("#divide").onclick = () => calculate( sign ="/");
document.querySelector("#multiply").onclick = () => calculate(sign='x');
document.querySelector("#minus").onclick = () => calculate(sign='-');
document.querySelector("#plus").onclick = () => calculate(sign='+');
document.querySelector("#equal").onclick = () => calculate(sign='=');
//Special
document.querySelector("#clear").onclick = () => clearAll();
document.querySelector("#erase").onclick = () => displayUpdate(first = first.slice(0,-1));
document.querySelector("#percentage").onclick = () => console.log('%');
let first='';
let second='';
let lastSign=''
let sign='';
//Add keyboard support


//Update display
function displayUpdate(x=0){
    if (x==''){
        x=0;
    }
    displayedNumber.textContent = x;
}
function pastUpdate(x){
    oldDisplay.textContent = x + ' '+ sign+'   ';
}
function clearAll(){
    first='';
    second='';
    lastSign=''
    sign='';
    displayUpdate(first);
    pastUpdate(0)
}
//Function to change the sign
function signChange(){
    first = (-1* parseFloat(first)).toString();
    displayUpdate(first);
}
//Function to add a period, but only one allowed.. could potentially block or give a visual sign once used. To be added
//Function to pass from number 1 to number 2
function result(){
    let secondOperand=0.0;
    let firstOperand=0.0;
    if (first!=''){
        secondOperand=parseFloat(first);
    }
    if (second!=''){
        firstOperand=parseFloat(second);
    }
    let total;
    if (lastSign=="/"){                     //divide by zero error message to be displayed
        total=firstOperand/secondOperand;
        console.log("it's dividing")
        console.log(total)
    } else if(lastSign=='x'){
        total=firstOperand*secondOperand;
        console.log("it's multiplying")
        console.log(total)
    } else if(lastSign=='-'){
        total=firstOperand-secondOperand;
        console.log("it's subtracting")
        console.log(total)
    } else if(lastSign=='+'){
        total=firstOperand+secondOperand;
        console.log("it's adding")
        console.log(total)
    } else {
        total=firstOperand; //equal needs more work since it's not working correctly.
    }
    return(total.toString());
}
function calculate(sign){
    if (second!=''){
        first = result()
    }
    second=first;
    first='';
    lastSign=sign;
    displayUpdate(second);
    pastUpdate(second);
}

displayUpdate(first)
