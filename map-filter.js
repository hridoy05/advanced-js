const number = [3, 4, 5, 6, 7, 8]
    // const output = []
    // for (let i = 0; i < number.length; i++) {
    //     const element = number[i];
    //     const result = element * element;
    //     output.push(result);
    // }
    // console.log(output);
    // const square = element => element * element
    // const result = number.map(square);
    // const result1 = number.map(x => x * x)
    // console.log(result1)

// const result = number.map(function square(element) {
//     // console.log(element, index, array);
//     return element * element;
// })
// console.log(result);
const bigger = number.filter(x => x % 2 == 0)
const isThere = number.find(x => x > 5)
console.log(isThere);