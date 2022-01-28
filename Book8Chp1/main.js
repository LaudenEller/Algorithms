// // create an empty array
// let compositeNumbers = []
// // iterate 1-1000
// for (let i = 1; i < 1000; i++) {
// // check if integer is a composite of 5
// if (i % 5 === 0) {
// // push target integers to array
// compositeNumbers.push(i)
// }
// // check if integer is a composite of 3
// else if (i % 3 === 0) {
// // push target integers to array
// compositeNumbers.push(i)
// }
// }
// // print array
// console.log(compositeNumbers)

// create a variable equal to zero
let sum = 0
// iterate 1-1000
for (let i = 1; i < 1000; i++) {
    // check if integer is a composite of 3 or 5
    if (i % 5 === 0 || i % 3 === 0) {
        // add composites to sum
        sum = sum + i
    }
}
// print sum
console.log(sum)