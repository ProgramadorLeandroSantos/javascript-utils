
// Array of objets
const pessoas = [
    {name: 'Leandro Santos',age: 23},
    {name: 'Angel Layon',age: 5},
    {name: 'Rebecca Santos',age: 3},
]

// ">" increase order
// "<" decrease order
const arrFiltered = pessoas.sort((prev,next) => {
    return prev.age > next.age ? 1 : next.age > prev.age ? -1 : 0;
})

console.log(arrFiltered)

// [
//     { name: 'Rebecca Santos', age: 3 },
//     { name: 'Angel Layon', age: 5 },
//     { name: 'Leandro Santos', age: 23 }
// ]

