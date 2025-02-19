// stack(primitive) & heap(non-primitive)

// let name="Devansh Sharma" // here the copy of name is store in sName
// let sName=name;
// sName="Ms dhoni"
// console.log(name);
// console.log(sName);


let userOne={
name:"devansh",
email:"abc@gmail.com"
}

let userTwo=userOne // here the original value of userOne is assigned to the userTwo 

userTwo.email="123@gmail.com" // making any changes in userTwo will reflect in the userOne

console.log(userOne);
console.log(userTwo);
