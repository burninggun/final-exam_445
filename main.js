window.addEventListener('load', attachEventHandlers)

function attachEventHandlers(){
    let button = document.getElementById('submit');
    button.addEventListener('click', handleSubmit)
}

function handleSubmit(){
    let input1 = document.getElementById('num1').value;
    let input2 = document.getElementById('num2').value;

    checkValid(input1, input2)
}


function checkValid(input1, input2){
    let num1;
    let num2;
    if (input1 > input2){
        num1 = input1;
        num2 = input2;
    } else {
        num1 = input2;
        num2 = input1;
    }
    let isValid = true;
    const inputArr = [input1, input2]

    for(let i = 0; i < inputArr.length; i++){
        if( isNaN(parseInt(inputArr[i], 10)) ){
            var invalidMsg = document.createElement('p')
            invalidMsg.setAttribute('class', 'text-danger m-0')
            var output = document.getElementById('output')
            invalidMsg.textContent = `Number ${i+1} input ${inputArr[i]} is not a valid number`
            output.appendChild(invalidMsg)
            isValid = false;
        }

        
        if(inputArr[i] < 2 || inputArr[i] > 100){
            var invalidMsg = document.createElement('p')
            invalidMsg.setAttribute('class', 'text-danger m-0')
            var output = document.getElementById('output')
            invalidMsg.textContent = `Number ${i+1} input ${inputArr[i]} is not in the range of 2 and 100`
            output.appendChild(invalidMsg)
            isValid = false;
        }
    }
    
}

function findEvenNums(num1, num2){

}
