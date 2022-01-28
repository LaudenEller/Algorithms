// declare num array
const buildings = [ 1250, 800, 600, 1250, 750, 1250 ]

// make function that accepts numArray
const countTallestBuildings = (buildings) => {
    // make empty array
    let tallestBuildings = 0
    // iterate array and check each integer against all the other integers.
    for (i = 0; i < buildings.length; i++) {
        // conditional that checks if current integer is larger or equal to rest of integers
        if (buildings[i] > buildings[i-1]) {
            // add 1 to tall building variable
            tallestBuildings = tallestBuildings + 1
        }
    }
    // return num equal to the amount of integers that are highest
    return tallestBuildings
}

// print number of tallest buildings
console.log(countTallestBuildings(buildings))