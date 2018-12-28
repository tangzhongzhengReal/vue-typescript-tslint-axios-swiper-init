// function Person(name){
//     this.name = name;

//     // 这样不能继承
//     // function getAge(){
//     //     console.log('age')
//     // }
// }

// Person.prototype.getName = function(){
//     console.log(this.name)
// }

// // 这样 不能继承
// // Person.getAge = function(){
// //     console.log('age')
// // }

// var person = new Person('marc')
// person.getName();

// function Student(name,grade){
//     Person.call(this, name);
//     // this.name = name;
//     this.grade = grade;
// }

// // 这样写，Student 和 Person指向了同一个地址，此时Student上的属性，Person也有
// Student.prototype = Person.prototype;

// Student.prototype.getGrade = function(){
//     console.log(this.grade)
// }

// var st = new Student('shawn', 100)
// st.getGrade()

// // person.getGrade();

// // p1的构造函数没有变，即使有了getGrade,也没有grade值
// // p1 = new Person('jack',1000)

// // p1.getName();
// // p1.getGrade();

// const util = require('util');

// function Person(name){
//     this.name = name;
// }

// Person.prototype.getName = function(){
//     console.log(this.name)
// }

// var person = new Person('marc')
// person.getName();

// function Student(name,grade){
//     Person.call(this, name);
//     this.grade = grade;
// }

// util.inherits(Student, Person)

// // Student.prototype = new Person();

// // Student.prototype.constructor = Student;

// Student.prototype.getGrade = function(){
//     console.log(this.grade)
// }

// var st = new Student('shawn', 100)
// st.getGrade()

// st.getName();

// person.getGrade();

// let arr = [9,8,7]

// for(let i in arr){
//     console.log(arr[i])
//     break;
// }

// for(let i of arr){
//     console.log(i)
//     break;
// }

