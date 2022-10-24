    // 1. 
let facts = {numsPlanets: 8, yearNeptuneDiscovered: 1846}; 
let {numsPlanets, yearNeptuneDiscovered} = facts; 

console.log(numsPlanets); // 8 
console.log(yearNeptuneDiscovered); // 1846 

    // 2. 
let planetFacts = {
    numPlanets : 8, 
    yearNeptuneDiscovered : 1846,
    yearsMarsDiscovered : 1659 
}; 

let {numPlanets, ...discoveryYears} = planetFacts; 

console.log(discoveryYears); // {yearsNeptuneDiscovered : 1846, yearsMarsDiscovered : 1659}

    // 3. 
function getUserData({firstName, favoriteColor='green'}){
    return `Your name is ${firstName} and you like ${favoriteColor}`; 
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple 
getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green 
getUserData({}) // your name is undefined and you like green

    // 4. 
let [first, second, third] = ['Maya', 'Marisa', 'Chi']; 

console.log(first) // Maya 
console.log(second) // Marisa 
console.log(third) // Chi 

    // 5. 
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    'Raindrops on roses', 
    'Whiskers on kittens', 
    'Bright copper kettles', 
    'Warm woolen mittens', 
    'Brown paper packages tied up with strings'
]

console.log(raindrops) // ['Raindrops on roses']
console.log(whiskers) // ['Whiskers on kittens']
console.log(aFewOfMyFavoriteThings) // ['Bright copper kettles', 'Warm woolen mittens', 'Brown paper packages tied up with strings']

    // 6. 
let numbers = [10, 20, 30]; 
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

    // 7. 
var obj = {
    numbers: {
        a: 1, 
        b: 2
    }
}; 

let {numbers : {a, b}} = obj; 

    // 8. 
let arr = [1,2]; 
[arr[0], arr[1]] = [arr[1], arr[0]]

console.log(arr); 

    // 9. 
const raceResults = ([first, second, third, ...rest]) => {
    return {
        first, 
        second, 
        third, 
        rest
    }
}