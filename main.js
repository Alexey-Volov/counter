const btnMinus = document.querySelector('#btnMinus')
const btnPlus = document.querySelector('#btnPlus')
const inputCounter = document.querySelector('#inputCounter')

btnMinus.addEventListener('click', minusCounter)
btnPlus.addEventListener('click', plusCounter)

let counter = 0;
function minusCounter() {
    if (counter > 0) {
        counter--;
        inputCounter.value = Number(counter)
        console.log(inputCounter.value)
    }
    else {
        console.log("0 начальное число")
    }
    
}
function plusCounter() {
    counter++;
    inputCounter.value = Number(counter)
    console.log(inputCounter.value)

}