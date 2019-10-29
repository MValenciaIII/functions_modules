//a module is a group of statements that exits within a prohram for the purpose of performing a specific task.
/*
module showMessage()
    Display "Hello World"

    tofixed 
*/


//Javascript function can be run anywhere. Before the function.\

//name(); Works as well.

// function name(first,last) {
//     last = last ? last : 'Mullican'; // ? == ternary operator is = if else. 
//     //if (last) {last}
//     // else {'Mullican'};
//     console.log(first, last);
// }

//name('Bryce', 'Peraza')

function name(first,last = 'Mullican' ) { //last = 'Mullican' is setting a default
    console.log(first, last);
}

name('Bryce'); // Will come out as mullican.

function scope(param1 = 'Hello', param2 = 'World') {
    newVar = 'hola'; // if no var, let , or const is set javascript will automactically make it a global scope variable
    newLet = 'mundo';
    newConst = '!';

    console.log(param1, param2, newConst);
}

scope();

console.log(newVar);
console.log(newLet);
console.log(newConst);

function sum(num1, num2) {
    return num1 + num2;
}
var add = sum(1,2);
add += 3; // adds 3 to function sum.
console.log(add);

var num = 2; // Global

function multipleByNum(num1, num) {
    return num1 * num
}

var result = multipleByNum(5, num);
console.log(result);

var divide = function divideByNumber(num1, num2) {
    return num1 / num2;
}

// var result2 = divide(10,5);
// console.log(result2);

// var hotel = {
//     rooms: 40,
//     booked:2,
//     checkedAvailability: function (params) {
//         return this.rooms - this.booked; //hotel.rooms 
//     }
// }

// var hotel  = new Object();
// hotel.rooms = 40; creats this object

function Hotel(name,rooms,booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function () {
        return this.rooms = this.booked
    }
}

var quayHotel = new Hotel('Quay', 40, 25);

quayHotel.booked += 1;

console.log(quayHotel.checkAvailablity());

function calc(num1,num2, type = 'add') { //uses strict comparison "==="
    let result = 0;
    switch (type) {
        case 'add':
            result= num1 + num2; 
            break;
        case 'subtraction':
            result= num1 - num2; 
        break;
        case 'multiply':
            result= num1 * num2; 
            break;
        case 'divide':
            result= num1 / num2; 
            break;
        default:
            //else statement
            break;
    }
    return result;
}

var result = calc(1,2);
console.log(result);


// var coins = {
//     pennies: 200,
//     nickels: 500,
//     dimes: 300,
//     quarters: 64
// };



function totalChange(pennies = 0,nickels = 0,dimes = 0,quarters = 0) {
    let penny = .01;
    let nickel = .05;
    let dime = .10;
    let quarter = .25;
    
    var change = {
    penny: pennies,
    nickel: nickels,
    dime: dimes,
    quarter: quarters
    }

    console.log(change.penny*penny + change.nickel*nickel + change.dime*dime + change.quarter*quarter + "$ is the the total amount of change altogether");
}


var result3 = totalChange(230,1500,235,83);


function totalChangeV2(pennies = 0,nickels = 0,dimes = 0,quarters = 0) {
    
}

function coinRolling(pennies = 0,nickels = 0,dimes = 0,quarters = 0) {
    var coins = {
        pennies: pennies,
        nickels: nickels,
        dimes: dimes,
        quarters: quarters
    }
    let coinWrapper1 = 50;
    let coinwrapper2 = 40;

    for(let coin in coins) {
        console.log(coins[coin]);
    }
}
var result4 = coinRolling(200,10,10,10);
console.log(result4);