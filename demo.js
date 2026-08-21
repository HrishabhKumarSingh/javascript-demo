var x = 10;                // difference b/w let, var and const
let y = 20;                //let is used for declaring a variable that can be reassigned
const z = 30;              //const is used for declaring a variable that cannot be reassigned

console.log("Hello, World!");

function add(a, b) {
    return a + b;           //difference b/w return and print
}
console.log(add(5, 10));

// Arrow Function
const sub = (a, b) => {        //difference b/w traditional function and arrow function:- 
    return a - b;
}
console.log(sub(10, 5));

const mul = (a, b) => a * b;      //difference b/w implicit and explicit return
console.log(mul(5, 10));

//Array :- collection of similar data types
const arr = [1, 2, 3, 4, 5];        
arr.push(6);            
console.log(arr);       
 
const age = arr.map((el) => {  //map use for iterating over an array and returning a new array
    console.log(el);        
}) 

const age1 = arr.filter((el) => {
    return el > 3;          //filter use for filtering the array based on condition
})
console.log(age1);

const age2 = arr.find((el) => {
    return el > 3;          //find use for finding the first element that satisfies the condition
})
console.log(age2);

const marks = arr.reduce((total, marks) => {   //total is the accumulator and marks is the current value
    return total + marks;     //reduce use for reducing the array to a single value
}, 0)
console.log(marks);

class Student {                //class is a blueprint for creating objects
    setter(name, age) {        //setter function  is used to assign the value to the property of the class
        this.name = name;      //this keyword is used to refer to the current object
        this.age = age;     
    }                          
    getter() {                  //getter function is used to get the value of the property of the class
        console.log(this.name, this.age);   
    }                  
}

const obj = new Student();      //new keyword is used to create an object of the class
obj.setter("XYZ", 27);
obj.getter();

const arr2 = [17, 3, 5, 8, 12, 45];
const arr3 = [3, 4, 6, 87, 38];

console.log(arr2.concat(arr3));    //concat use for merging two arrays

const every = arr2.every((el) => el>2);    //every use for checking if all elements in the array satisfy the condition
console.log(every);

const freach = arr2.forEach((el) => console.log(el));    //forEach use for iterating over an array and performing an action on each element

const spl = "Hello";
const arrfrom = Array.from(spl);    //Array.from use for creating an array from a string
console.log(arrfrom);

console.log(spl.indexOf("o"));    //indexOf use for finding the index of the first occurrence of an element in the array

console.log(arr2.reverse());    //reverse use for reversing the order of the elements in the array

const teacher = {
    name: "XYZ",
    age: 27,
    course: "CSE"
}
console.log(teacher.age)
console.log(teacher.course)
console.log(teacher.name)
const { name: teacherName, age: teacherAge, course: teacherCourse } = teacher;    //destructuring use for extracting values from an object and assigning them to variables
console.log(teacherName, teacherAge, teacherCourse);

const numbers = [1, 2, 3, 4, 5];
const newNum = [...numbers];
console.log(newNum);    //spread operator use for spreading the elements of an array into a new array   

const abc = (...num) => { 
    console.log(num);    //rest operator use for collecting all the remaining elements into an array
}
console.log(abc(10, 15, 45, 76, 89)); //it show undefined because the function does not return anything, it only logs the array to the console


//Es6 Modules:-  import and export are used for importing and exporting modules in ES6

import addition from './add.js';    //import use for importing a single value from a module

console.log("Addition: " + addition(10, 5));

const subtract = (a,b) => a - b;
console.log("Subtraction: " + subtract(10, 5));

import multiply from './multiply.js';
console.log("Multiplication: " + multiply(10, 5));

const div = (a,b) => a/b;
console.log("divide: " + div(10, 5));

//Object :- collection of key-value pairs
const student = {
    name: "XYZ",
    age: 21
}
console.log(student.age); 
student.age = 30;
console.log(student.age); //object is mutable but primitive data types are immutable
                          //mutable means the value can be changed and immutable means the value cannot be changed
const newStudent = {
    ...student,           //spread operator use for spreading the properties of an object into a new object
    age:35
}
console.log(student.age);   

//what is component in reactjs:-  A component is a block of code that is reusable

//There are two type of copy:- 1. Shallow Copy 2. Deep Copy
//shallow copy is the copy in which we copy the reference of the object and not the values of the object
//deep copy is the copy in which we copy the values of the object and not the reference of the object
const deepcpy = structuredClone(student);    //structuredClone use for creating a deep copy of an object

//The difference between pure and impure function:-
//Impure function:-  A function is said to be impure if it modifies the state of the program or has side effects.
//Pure function:-  A function is said to be pure if it does not modify the state of the program or has no side effects.

let ab = 27;
const addWithAb = (a, b) => {
    return a + b + ab;    //impure function because it modifies the state of the program by using the variable ab which is defined outside the function
}
console.log(addWithAb(23, 45));

let ac = 23;
let ad = 23;
console.log(ac === ad); 