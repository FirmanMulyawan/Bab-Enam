var myArray = [10, 20, "test", "TRUE", 99];
var i = 0; //start the index at zero

while (i < myArray.length) { // check condition
    alert("The value is: " + myArray[i]);
    i++; // increment the index
}

var myArray2 = [500, 500, 500, 500, 500];

var total = 0;

for ( var i = 0; i < myArray2.length; i++) {
    // add the current element to the total
    total += myArray2[i];
}

// after we're done with the loop
alert("the total is: " + total);
