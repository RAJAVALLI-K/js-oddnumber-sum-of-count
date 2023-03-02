//odd number using in sum of number and count 

let number = [1, 2, 4, 5, 7, 8, 12, 15, 25];
function odd(number) {
    let oddNum = [], sum = 0, count = 0;
    for (i = 0; i < number.length; i++) {
        if (number[i] % 2 != 0) {
            sum += number[i];
            count++
            console.log("odd number:" + number[i]);
        }
    }
    return sum / count;
}

console.log(odd(number));
