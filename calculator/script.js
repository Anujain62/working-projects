let display = document.getElementById('display');
let numbers = document.querySelectorAll('#zero, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #point');
let operators = document.querySelectorAll('#addition, #sub, #multi, #division, #mod');
let ac = document.getElementById('ac');
let equal = document.getElementById('equal');
let remove = document.getElementById('remove');

let currNum = '';
let preNum = '';
let operator = '';
let is_on = true;

ac.addEventListener("click", function(){
 display.textContent = 0;
 currNum = '';
 preNum = '';
 operator = '';
});

numbers.forEach(button => {
 button.addEventListener("click", function(){
  if( operator === ''){
   currNum += button.textContent;
   display.textContent = currNum;
  }
  else{
   currNum += button.textContent;
   let result = preNum + operator + currNum; 
   display.textContent = result;
  }
 });
});

operators.forEach(button => {
 button.addEventListener("click",function(){
  if(currNum !== ''){
   preNum = currNum;
   currNum = '';
   operator = button.textContent;
   let result = preNum + operator;
   display.textContent = result;
  } 
 });
});

equal.addEventListener("click", function(){
 if(currNum!== '' && preNum!== ''){
  let result = calculate(preNum,currNum,operator);
  currNum = result;
  display.textContent = result;
 }
})

remove.addEventListener("click",function(){
 let len = currNum.length-1;
 if(currNum !== ''){
  // let newNum = currNum.substring(0,len);
  let newNum = currNum.slice(0,len-1)
  currNum = newNum;
  display.textContent = currNum;
 }
})


function calculate(preNum,currNum,operator){
 switch(operator){
  case '+':
   return parseFloat(preNum) + parseFloat(currNum);
   break;
  case '-':
   return  parseFloat(preNum) - parseFloat(currNum);
   break;
  case '*':
   return parseFloat(preNum) * parseFloat(currNum);
   break;
  case '%':
   return parseFloat(preNum) % parseFloat(currNum);
   break; 
  case '÷':
   if(currNum === 0)
    return 0;
   else
    return parseFloat(preNum) / parseFloat(currNum);   
   break;
  default: 
   return ''; 
 }
}















