// string functions and there uses

const name="dev"
const repocount = 50

// console.log(name + repocount + " value")

// console.log('Hello my name is ${name} and my repo count is ${repocount}') 
// above is the best way to print the string as it is string interpolation method which will be used in websites

const gameName = new String('PUBG-BG-GAME')

console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__) //functions/method available 

console.log(gameName.toLowerCase())
console.log(gameName.indexOf('B'))
console.log(gameName.charAt(2))
console.log(gameName.length)
console.log(gameName.split("-"))



const newString = gameName.substring(0,3)
console.log(newString)

const anotherSt = gameName.slice(-12,2)
console.log(anotherSt)

const st= '   hello   '
console.log(st)
console.log(st.trim())
// console.log(st)

const url = "https://dev.com/dev%07sharma"
console.log(url)


console.log(url.replace('%07','-'))
