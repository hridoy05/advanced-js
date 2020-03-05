function add(num1, num2) {
    console.log([...arguments])
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum;
}
const result = add(3, 3, 5, 8)
console.log(result);