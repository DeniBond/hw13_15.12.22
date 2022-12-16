// 1
const res_calc = document.getElementById('res_calc')
const first_value = document.getElementById('first_value')
const second_value = document.getElementById('second_value')
const operator = document.getElementById('operator')
//2
const item_input = document.getElementById('item_input')
const sum_item = document.getElementById('sum_item')
const array_result = document.getElementById('array_result')
//3
const number_input = document.getElementById('number_input')
const reverse_result = document.getElementById('reverse_result')

function isNumber(x) {
    if (x === '') {
        return false;
    }
    const numX = +x;
    if (isNaN(numX)) {
        return false;
    } else {
        return true
    }
}

// Function calculator
function calc() {
    switch (operator.value) {
        case "+":
            res_calc.textContent = Number(first_value.value) + Number(second_value.value)
            break
        case "-":
            res_calc.textContent = Number(first_value.value) - Number(second_value.value)
            break
        case "/":
            res_calc.textContent = Number(first_value.value) / Number(second_value.value)
            break
        case "*":
            res_calc.textContent = Number(first_value.value) * Number(second_value.value)
            break
    }
}

// Function summary
const task2_arr = []

function addItem() {
    if (isNumber(item_input.value)) {
        task2_arr.push(item_input.value)
        sum_item.textContent = Number(sum_item.textContent) + Number(item_input.value)
        array_result.textContent = JSON.stringify(task2_arr)
    } else {
        alert('Sorry, try again with number :)')
    }
}

//Function reverse
function reverseNumber() {
    if (number_input.value<0){
        alert('I did that too :D')
        return
    }
    if (isNumber(number_input.value)) {
        //If you enter a number with a zero at the end, it is not
        // displayed. You can create an additional condition
        // if zero comes to num
        let reverse = 0;
        let num = number_input.value;
        let lastDigit;
        while(num !== 0){
            lastDigit = num % 10;
            reverse = reverse * 10 + lastDigit;
            // Brain burnt out
            num = Math.floor(num/10);
        }
        reverse_result.textContent = reverse
    } else {
        alert('Sorry, try again with number :)')
    }
}


