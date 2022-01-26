// create an empty array
let compositeNumbers = []
// iterate 0-1000
for (let i = 0; i <= 1000; i++) {
    // check if integer is a composite of 5
    if (i % 5 === 0) {
        // push target integers to array
        compositeNumbers.push(i)
    }
    // check if integer is a composite of 3
    else if (i % 3 === 0) {
        // push target integers to array
        compositeNumbers.push(i)
    }
}
// print array
console.log(compositeNumbers)