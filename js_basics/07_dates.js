let mydate = new Date()

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());

// console.log(typeof mydate);

let mineDate = new Date(1981,6,7,5,3) // month start with 0 in js
// console.log(mineDate.toDateString());
// console.log(mineDate.toLocaleString());

// Another way to create date
let mydate2 = new Date("1981-07-07")  // YYYY-MM-DD
// console.log(mydate2.toDateString());

let mydate3 = new Date("08-07-1981") // MM-DD-YYYY
// console.log(mydate3.toDateString());

let mytimestamp = Date.now() // for poll creation
// console.log(mytimestamp);

// console.log(mydate3.getTime()); // by default it shows in mili-second


// console.log(Math.floor(Date.now()/1000)); // to convert it to second

// date.now will give current date in mili-seconds


// MOre methods

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());

// console.log("2"==2);
// console.log("2">=2);
// console.log("2"<=2);
// console.log(null<=0);
// console.log(null>=0);
// console.log(null>-1);
// console.log(null==0);

console.log( newDate.toLocaleString('default',{
    weekday:"long"
}));




