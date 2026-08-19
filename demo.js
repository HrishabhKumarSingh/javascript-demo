var x = 10;                // difference b/w let, var and const
let y = 20;
const z = 30;

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
console.log(abc(10, 15));