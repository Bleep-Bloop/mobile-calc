

//GLOBAL
var operator;
var firstNumber;
var secondNumber;
var product;

//Clears the calculator screen (does not clear var (firstNumber/secondNumebr) so you can use if you make a mistake on the secondNumber)
function clearButton() {

    document.getElementById("calcScreen").value = "";
}


//Clears the calculator sceen and clears var firstNumber & var secondNumber (used to reset calculator)
function allClearButton() {

    document.getElementById("calcScreen").value = "";

    firstNumber = '';
    secondNumber = '';

    //Come back here
    console.log(firstNumber);
    console.log(secondNumber);
}


//Adds/appends number/decimal to calculator screen
function appendNumber(number) {
 
var calcScreen = document.getElementById("calcScreen");
calcScreen.value = calcScreen.value + number;

}

//Preps number to be added
function addButton() {

    console.log("add button running");

    var calcScreen = document.getElementById("calcScreen");
    firstNumber = calcScreen.value;
    
    
    operator = '+'
    
    calcScreen.value = '';


}

//Preps number to be subtracted
function subtractButton() {

    console.log("subtract button running");

    var calcScreen = document.getElementById("calcScreen");
    firstNumber = calcScreen.value;
    
    
    operator = '-'
    
    calcScreen.value = '';


}

//Preps number to be divided
function divideButton() {

    console.log("divide button running");

    var calcScreen = document.getElementById("calcScreen");
    firstNumber = calcScreen.value;
    
    
    operator = '/'
    
    calcScreen.value = '';


}

//preps number to be multiplied
function multiplyButton() {

    console.log("multiply button running");

    var calcScreen = document.getElementById("calcScreen");
    firstNumber = calcScreen.value;
    
    
    operator = '*'
    
    calcScreen.value = '';
    
}

//make the current number (calculatorScreen) negative
function negative(){

    console.log("make negative");

     var calcScreen = document.getElementById("calcScreen");

calcScreen.value = calcScreen.value * -1;

console.log(calcScreen.value);


}



//change to return later
//does the math and displays result on calculator screen
function equals() {

    var calcScreen = document.getElementById("calcScreen");

    secondNumber = calcScreen.value;


        console.log("we are going to " + operator);


if(operator == '+')
{

    console.log("The first number is " + firstNumber);
    console.log("The second Number is " + secondNumber);

    console.log("This makes");

    product = parseFloat(firstNumber) + parseFloat(secondNumber); //REMEMBER TO TRIM DECIMALS OF FLOATS! .00
    
    console.log(product);
 
    calcScreen.value = product; //Might add this outside of if statements

}

if(operator == '-')
{
    
    console.log("The first number is " + firstNumber);
    console.log("The second Number is " + secondNumber);

    console.log("This makes");

    product = parseFloat(firstNumber) - parseFloat(secondNumber);
    
    console.log(product);
 
    calcScreen.value = product; //Might add this outside of if statements

}

if(operator == '/')
{
    
    console.log("The first number is " + firstNumber);
    console.log("The second Number is " + secondNumber);

    console.log("This makes");

    product = parseFloat(firstNumber) / parseFloat(secondNumber);
    
    console.log(product);
 
    calcScreen.value = product; //Might add this outside of if statements

}

if(operator == '*')
{
    
    console.log("The first number is " + firstNumber);
    console.log("The second Number is " + secondNumber);

    console.log("This makes");

    product = parseFloat(firstNumber) * parseFloat(secondNumber);
    
    console.log(product);
 
    calcScreen.value = product; //Might add this outside of if statements

}



}//End equals()


