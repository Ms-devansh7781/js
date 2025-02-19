"use strict";

// alert("hello") --> Error cause we are using node js not browser....!

let name="devansh"
let rollno=12
let isLoggedIn=false

/*  number=> 2 ki power 53
bigint 
string=> " "
boolean=> true/false
NULL=> stand alone value{represents empty value}
undefined=>
    symbole=> unique

*/

// console.log(typeof null)


// summmary of datatypes L-9

/*

JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.


on the basis of there access and storage in memory->

# primitive - call by value . original data is not given instead the copy of the data is given. 
no direct allocation from the memory location
7- types => string, number, null, boolean, BigInt, undefined, symbol.


# reference(non-primitive) - call by reference - direct allocation from the memory location
=> array, functions, objects


Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function {object function}
       Object  =>  object


*/

let id=Symbol('123')
let secondId=Symbol('123')

//console.log(id===secondId);

const array=["hero","heroine","Villain"]

let object={
    name:"devansh",
    rollno:12
}

const functions=function(){
console.log("hello world");

}
