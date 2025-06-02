//Assignment 17-20 chapter
// Arrays and Loop

//1.

// var arrays = [[], [], [], []]; 
// console.log(arrays);


//2.

// var manyNumbers = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// console.log(manyNumbers);


//3.

// for (var i = 1; i<= 10; i++) {
//     console.log(i);
// }


//4.

// var Number = prompt("Enter table number:");
// var Length = prompt("Enter table length:");

// for (var i = 1; i <= Length; i++) {
//     console.log(`${Number} x ${i} = ${Number * i}`);
// }


//5.

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// for (var i = 0; i < fruits.length; i++) {
//     console.log(`Element at index ${i} is ${fruits[i]}`);
// }


//6.

// for (var i = 1; i <= 15; i++) {
//     console.log(i);
// }

// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }

// for (var i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// for (var i = 1; i <= 19; i += 2) {
//     console.log(i);
// }
// for (var i = 2; i <= 20; i += 2) {
//     console.log(i + "k");
// }


//7.

// var fruits = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter item to search:");
// var match = 0;
// for (var i = 0; i < fruits.length; i++) {
//     if (userInput === fruits[i]) {
//         console.log(userInput + " is available at index " + i);
//         match = 1;
//     }
// }
// if (match === 0) {
//     console.log(userInput + " is not available");
// }


//8.

// var num = [24, 53, 78, 91, 12];
// var largest = num[0];

// for (var i = 1; i < num.length; i++) {
//     if (num[i] > largest) {
//         largest = num[i];
//     }
// }
// console.log("The largest number is " + largest);


//9.

// var num = [24, 53, 78, 91, 12];
// var smallest = num[0];

// for (var i = 1; i < num.length; i++) {
//     if (num[i] < smallest) {
//         smallest = num[i];
//     }
// }
// console.log("The smallest number is " + smallest);


//10.

for (var i = 5; i <= 100; i = i + 5) {
    console.log(i);
}


