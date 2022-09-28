function displayNumber(num){
    
    result.value += num;
}
function displayClear(){
    result.value="";
}
function displayOperator(num){
    result.value+=num;
}
function equalClick(){
    let text = result.value;
    let equ = eval(text);
    result.value=equ;
}
function removeLastItem(){
      let expression = result.value;
      result. value= expression.slice(0,-1)
}