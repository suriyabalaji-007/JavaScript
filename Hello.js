console.log("Hello, World!");
console.log(2 + 2)
console.log(2 + "2")
const Name = "Suriya"
console.log(Name)
let age = 25
console.log(age)
age = 18
console.log(age)
const Age = 23
console.log(Age)
console.log(typeof Age)
console.log(typeof Name)

let a = 5
let b = 5
console.log(a == b)
console.log(typeof a)
console.log(typeof b)

let c = '5'
console.log(typeof c)
console.log(a == c)
console.log(a === c)

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NaN)

num2 = 10934580985757901791390539
console.log(num2)
console.log(typeof num2)

num3 = 932018709875019873019888899n         // n represent the BigNum
console.log(num3)
console.log(typeof num3)

user = "Suriya"
console.log(user)

let bool = 5 > 6
console.log(bool)
console.log(typeof bool)

let bool1 = 5 < 6
console.log(bool1)
console.log(typeof bool1)

let symbol = Symbol("hello")
console.log(symbol)
console.log(typeof symbol)

let object = { name: "John", age: 30 }
console.log(object)
console.log(typeof object)

let number = null
console.log(number)
console.log(typeof number)

let number1 = 5 / "Suriya"
console.log(number1)
console.log(typeof number1)

let number2 = 5 / 0
console.log(number2)
console.log(typeof number2)

let x
console.log(x)
console.log(typeof x)

let y = "123 suriya"
y = parseInt(y)
console.log(y)

z = 3
console.log(typeof z)
z = z + ""
console.log(z)
console.log(typeof z)
z = +z - 2
console.log(z)
console.log(typeof z)

// operational operators  
// =, <, >, ==, <=, >=, ===, !=, !==,

let numb1 = 3
let numb2 = "3"
console.log(numb1 == numb2)
console.log(numb1 === numb2)
console.log(numb1 !== numb2)
console.log(numb1 != numb2)
console.log(numb1 <= numb2)
console.log(numb1 >= numb2)
console.log(numb1 < numb2)
console.log(numb1 > numb2)


// logical operators
// and (&&) or (||) not (!)

let A = 3
let B = 4
let C = 5
console.log(A > B && A < C)
console.log(A > B && A > C)
console.log(A < B && A < C)
console.log(A < B && A > C)

console.log(A > B || A < C)
console.log(A > B || A > C)
console.log(A < B || A < C)
console.log(A < B || A > C)

console.log(!(A > B))
console.log(!(A > C))
console.log(!(A < B))
console.log(!(A < C))
console.log(A > B && A < C || A < B && A > C)
console.log(A > B && A < C || A < B && A > C || A > B && A < C || A < B && A > C)
console.log(A > B && A < C || A < B && A > C || A > B && A < C || A < B && A > C || A > B && A < C || A < B && A > C)


// conditional operators
// ? : 

// IF Else
let numb = 5
if (numb > 5) {
    console.log("numb is greater than 5")
} else if (numb < 5) {
    console.log("numb is less than 5")
} else {
    console.log("numb is equal to 5")
}

// Ternary conditional operator
// ?: 
numb = 5
console.log(numb > 5 ? "numb is greater than 5" : numb < 5 ? "numb is less than 5" : "numb is equal to 5")


// to find the numb is even or odd 

let numbe = 5


if (numbe % 2 === 0) {
    console.log(numbe  + " is even")
} else {
    console.log(numbe  + " is odd")
}


// Ternary conditional operator

console.log(numbe % 2 === 0 ? numbe + " is even" : numbe + " is odd")


// Alarm  using IF elif else

let day = "monday"

if (day == "monday")
    console.log("it's monday wake up 5am")
    else if (day == "tuesday")
        console.log("it's tuesday wake up 6am")
    else if (day == "wednesday")
        console.log("it's wednesday wake up 7am")
    else if (day == "thursday")
        console.log("it's thursday wake up 8am")
    else if (day == "friday")
        console.log("it's friday wake up 9am")
    else if (day == "saturday")
        console.log("it's saturday wake up 10am")
    else if (day == "sunday")
        console.log("it's sunday wake up 11am")
    else 
        console.log("invalid day")
        

// alarm using ternery operator

console.log(day == "monday" ? "it's monday wake up 5am" : day == "tuesday" ? "it's tuesday wake up 6am" : day == "wednesday" ? "it's wednesday wake up 7am" : day == "thursday" ? "it's thursday wake up 8am" : day == "friday" ? "it's friday wake up 9am" : day == "saturday" ? "it's saturday wake up 10am" : day == "sunday" ? "it's sunday wake up 11am" : "invalid day")   


// Alarm using Switch Case

switch (day) {
    case "monday":
        console.log("it's monday wake up 5am")
        break
    case "tuesday":
        console.log("it's tuesday wake up 6am")
        break
    case "wednesday":
        console.log("it's wednesday wake up 7am")
        break
    case "thursday":
        console.log("it's thursday wake up 8am")
        break
    case "friday":
        console.log("it's friday wake up 9am")
        break
    case "saturday":
        console.log("it's saturday wake up 10am")
        break
    case "sunday":
        console.log("it's sunday wake up 11am")
        break
    default:
        console.log("invalid day")
}


//Template literal
// `` ${value} ``   

m = 5
l = 2
Add = m  +l 
console.log("The Addition Of " + m + " and "+ l +" is "+ Add)
console.log(`The Addition Of ${m} and ${l} is ${Add}`)


// Loop

// While loop
let w =1
while(w <= 5){
    console.log(w + " Suriya")
    w++
}


// Do While loop

let d = 1
do {
    console.log(d + " Suriya")
    d++
}while(d <= 5)

// For  loop

for(let i = 5;i>=1;i--){
    console.log(i + " Suriya")
}

for(let v = 1; v <= 5; v++){
    console.log(v + " Suriya s")
}