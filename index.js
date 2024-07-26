const display = document.getElementById("display");

// get input from user 
function appendToDisplay(input){
  display.value += input;
}

// clear the console or Display 
function clearToDisplay(){
  display.value = "";
}

// calculate the Operations 
function calculate(){
  try{
    display.value = eval(display.value);
  }catch(error){
    display.value = error;
  }
}