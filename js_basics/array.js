// array

// in Js array size can be increase and it can contain non-HOmogeneous data in it 
// in Js array copy operation creates shallow copies. 
// example of heap {the copy and original both refer to the same data/memory}  share same references

const myarr = [1,2,3,4,5,"dev",[23,99]]

// console.log(myarr.length);

// another way to declare array

const newArr = new Array(1,2,3,4,5)
// console.log(newArr[0]);


// array methods

myarr.push(6)
// console.log(myarr);

//unshift -- insertion at first & shift -- delete from first position

// console.log(myarr.includes(7));

const newarr1= myarr.join()  // converted into string

// console.log(newarr1);
// console.log(typeof newarr1);

//slice & splice

console.log("A ", myarr);

const myn1 = myarr.slice(1,3) 
//  new array having the given range wiht not including the end point and this will not reflect on the original one

console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1,3) // removed that (elements) range from the original array
console.log("C ", myarr);

console.log(myn2);


