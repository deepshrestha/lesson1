//core syntax with variables and primitive datatypes

//primitive datatypes
// String
// Number,
// undefined
// null,
// Boolean


/*
    function declaration vs function expression
*/

// function declaration

/*function person(){
    console.log("Hi, my name is deep shrestha!");
}

person();*/

// function expression

const message = "Hi, my name is deep shrestha!!!";

// message = false;

var person = (param) => console.log(param);

// function person(userMessage){
//     console.log(userMessage);
// }

person(message);

//Objects, Properties & Methods

// var obj = new Object(); // this will create an object

// obj.name = "Deep Shrestha";
// obj.address = "Lalitpur, Nepal";
// obj.email = "deepshrestha83@gmail.com";
// obj.getInfo = function(){
//     console.log(
//         "My name is " + obj.name + ", and I live in " + obj.address + ", and my email address is " + obj.email
//     );
// };

var obj = {
    name: 'Deep Shrestha',
    address: 'Lalipur, Nepal',
    email: 'deepshrestha83@gmail.com',
    getInfo(){
        console.log(
            "My name is " + obj.name + ", and I live in " + obj.address + ", and my email address is " + obj.email
        );
    }
};

//console.log(obj);

obj.getInfo();

// Object literal

//var obj = {};