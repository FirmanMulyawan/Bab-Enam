var  name = prompt("What is your name ?");
// return name.toUpperCase
/////////////////////////////////////////////////////////////////////////////////////

var phrase = "This is a simple phrase. ";
alert(phrase.length);
alert(phrase.toUpperCase());


// ++++++++++++++++++++++++++++++ belajar string comparison +++++++++++++++++++++++++
var str1 = "Hello";
var str2 = "hellos";

// str1 != str2 
if (str1.toLowerCase() == str2.toLowerCase() ){
    alert("Yes, Equal");
}
else {
    alert("Not equal");
}

/////////////////////////////////// index of //////////////////////////////////////////
var phrase = "we want a groovy keyword.";
var position = phrase.indexOf("groovy");
alert(position);


var  segment = phrase.slice(10,16);
alert(segment);

////////////////////////////// creating array //////////////////////////////////////////
var multipleValues = [];

multipleValues[0] = 50;
multipleValues[1] = 100;
// multipleValues[2] = "hello, World!";
multipleValues[2] = "hello, firman!";


alert(multipleValues[2]);
alert("array dimulai  dari 0 " +multipleValues.length);