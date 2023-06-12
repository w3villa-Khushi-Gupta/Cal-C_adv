let string = ""
let buttons = document.querySelectorAll(".btn")
Array.from(buttons).forEach((btn)=> {
    btn.addEventListener("click",(e) => {
        if(e.target.innerHTML == '='){
            string = evaluateExpression(string);
            document.querySelector('input').value = string;
          }
          else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
          }
          else{ 
          console.log(e.target)
          string = string + e.target.innerHTML;
          document.querySelector('input').value = string;
            }
    })
}
)
  
  function evaluateExpression(expression) {
    var tokens = expression.split("");
    console.log(tokens)
    var numbers = [];
    var operators = [];
  
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
  
      if (!isNaN(parseFloat(token))) {
        numbers.push(parseFloat(token));
      } else {
        operators.push(token);
      }
    }
  
    var result = numbers[0];
  
    for (var j = 0; j < operators.length; j++) {
      var operator = operators[j];
      var nextNumber = numbers[j + 1];
  
      if (operator === "+") {
        result += nextNumber;
      } else if (operator === "-") {
        result -= nextNumber;
      } else if (operator === "*") {
        result *= nextNumber;
      } else if (operator === "/") {
        result /= nextNumber;
      }
    }
  
    return result;
  }
  