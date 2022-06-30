var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;


function increment() {

    if (currentNumber <= 1) {
        document.getElementById("subtrair").style.backgroundColor = 'brown';
        document.getElementById("subtrair").disabled = false;
    }

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber == 10) {
        document.getElementById("adicionar").style.backgroundColor = 'gray';
        document.getElementById("adicionar").disabled = true;

    }

}

function decrement() {


   
    if (currentNumber == 0) {

        document.getElementById("subtrair").style.backgroundColor = 'gray';

        document.getElementById("subtrair").disabled = true;

    }else{
        currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    }


        if (currentNumber <= 10) {
        document.getElementById("adicionar").style.backgroundColor = 'brown';
        document.getElementById("adicionar").disabled = false;
    }


}