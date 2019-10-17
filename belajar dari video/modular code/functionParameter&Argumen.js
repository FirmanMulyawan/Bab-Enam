function addTwoNumbers(a,b) { // nama fungsinya adalah addTwoNumbers, parameter per-1 = a, parameter ke-2 =  b
  var result = a + b;
  alert(result);
}

addTwoNumbers(5,10); // argumen per-1 = 5, argumen ke-2=10;
addTwoNumbers(500,100);
addTwoNumbers(7,-2323);

alert("Hello, world!");

// +++++++++++++++++++++++++++++++ belajar variabel global ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // Declare your variable here
// var myGlobal = 10;

// function fun1() {
//   // Assign 5 to oopsGlobal Here
//   oopsGlobal = 5;
// }

// // Only change code above this line
// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }
// fun1();
// fun2();

// ======================================= variabel local  =================================================
// function myLocalScope() {
//   'use strict'; // you shouldn't need to edit this line
//   var myVar;
//   console.log(myVar);
// }
// myLocalScope();


// ======================================= variabel local dan global ===========================================
// Setup
// var outerWear = "T-Shirt";

// function myOutfit() {
//   // Only change code below this line

//   var outerWear = "sweater";  

//   // Only change code above this line
//   return outerWear;
// }

// myOutfit();

// ============================================= Return a Value from a Function with Return =====================
// Example
// function minusSeven(num) {
//   return num - 7;
// }

// console.log(minusSeven(10));
// // Only change code below this line
// function timesFive(num) {
//   return num * 5;
// }

// console.log(timesFive(10));

// ========================================== Undefined Value returned from a Function ============================
// var sum = 0;
// function addThree() {
//   sum = sum + 3;
// }

// // Only change code below this line
// function addFive () {
//   sum =sum + 5;
// }
// // Only change code above this line
// addThree();
// addFive();


// ======================================== Assignment with a Returned Value ======================================
// Example
// var changed = 0;

// function change(num) {
//   return (num + 5) / 3;
// }

// changed = change(10);

// // Setup
// var processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }
// processed = processArg(7);
// Only change code below this line
