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

//const message = "Hi, my name is deep shrestha!!!";

// message = false;

//var person = (param) => console.log(param);

// function person(userMessage){
//     console.log(userMessage);
// }

//person(message);

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

// var obj = {
//     name: 'Deep Shrestha',
//     address: 'Lalipur, Nepal',
//     email: 'deepshrestha83@gmail.com',
//     getInfo(){
//         console.log(
//             "My name is " + obj.name + ", and I live in " + obj.address + ", and my email address is " + obj.email
//         );
//     }
// };

//console.log(obj);

//obj.getInfo();

// Object literal

//var obj = {};

//callback function

// let greet = function(callback, callback1){
//     console.log("Hi");
//     callback();
//     callback1();
// }

// let greetName = function(){
//     console.log("Deep Shrestha");
// }

// let status = function(){
//     console.log("You are doing good!");
// }

// greet(greetName, status);

// let add = function(num1, num2){
//     console.log(num1 + num2);
// }

// let mul = function(num1, num2){
//     console.log(num1 * num2);
// }

// let calc = function(num1, num2, callback){
//      callback(num1, num2);
// }

// calc(10, 5, add);

//async & promise

let register = () => console.log("Please register!");

// let emailConfirmation = () => {
//     setTimeout(() => { 
//         console.log("Email has been sent!")
//     }, 5000);
// }

// let registrationConfirmed = () => console.log("Your registration has been completed!");

// let hasRegistered = true;
// let emailConfirmation = () => {
//     return new Promise((resolve, reject) => {
//         if(hasRegistered)
//         {
//             resolve(
//                 "Email has been sent!"
//             )
//         }
//         else{
//             reject(
//                 "Email failed! Please check your internet connection."
//             );
//         }        
//     })
// }


// register();
// registrationConfirmed();

// emailConfirmation()
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.error(new Error(err));
// })

//Spread & Rest operators

// let arr = [
//     {id: 1, fname: "Digesh"},
//     {id: 2, fname: "Nina"},
//     {id: 3, fname: "Deep"}
// ];

// // arr.push(
// //     {id: 4, fname: "Ram"}
// // );

// arr = [...arr, {id: 4, fname: "Ram"}, {id: 5, fname: "Hari"}];

// console.log(arr);


//Rest operators

// let toArray = function(...arg){
//     console.log(arg);
// }

// toArray({id: 1}, {id: 2}, [1,2], true, "Hello", 1);

//Destructuring

let person = {
    name: 'Deep Shrestha',
    address: 'Lalipur, Nepal',
    email: 'deepshrestha83@gmail.com',
    getInfo(){
        console.log(
            "My name is " + obj.name + ", and I live in " + obj.address + ", and my email address is " + obj.email
        );
    }
};

//console.log(person);

// let name = person.name;
// let email = person.email;

// let {name, email} = person;

// console.log(name, email);

// let personDetail = ({name, email}) => {
//     console.log(name, email);
// }

// personDetail({name, email});

let fname = "Deep Shrestha";

let message = `Hello ${fname} I am doing good!`;

console.log(message);