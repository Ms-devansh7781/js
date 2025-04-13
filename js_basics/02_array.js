// more basics of array 

const marvel = new Array("THOR","spider-man","Ironman","Loki","DareDevil")
const Dc = ["superman","batman","Harley Quin","Wonder-Woman","Blue beetle"]

// marvel.push(Dc)
// console.log(marvel[5]);
const all_heroes=marvel.concat(Dc) // combines two or more arrays and returns the new one
// console.log(all_heroes);

const all_heroes_new = [...marvel,...Dc] // spread operator another version of concat
// console.log(all_heroes_new);

const arr= [1,2,3,[4,5,[6,7],8],9,10]
// console.log(arr);

const re_arr = arr.flat(Infinity) // organize or concat the sub arrays given in arrays
// console.log(re_arr);


console.log(Array.isArray("Dev")); // check
console.log(Array.from("Dev")); // convert in array -- ['D','E','V']

console.log(Array.from({name:"Dev"}));
 // in Above case of object it will give []   INTERESTING -- converting keys or values should be declared
 // Array.of("returns new array from a set of elements(array,variables,etc)")

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

