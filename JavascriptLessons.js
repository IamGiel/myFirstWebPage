




var name = prompt("Name?");
var age = prompt("Age?");


function * quiz() {
  console.log(name + " is " + age + " years old");
}


var myQuiz = quiz();
myQuiz.next();
myQuiz.next();

// function* foo() {
//   var name = prompt("what is your name");
//   var age = prompt("what is your age");
//   console.log(name);
  

  
//     yield index++;
// }

// var iterator = foo();
// console.log(iterator.next()); // { value: 0, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

/**-------FUNCTIONS--------**/

// function profile(model, make) {
// 	return model+make;
// }
// var customer = profile(1, 2);
// alert(customer);


// function profile(model, make, year){
// 	alert(model);
// 	alert(make);
// 	alert(year);
// }

// profile("honda","accord","2017");


/**----------functions--------------**/


// var myList = ["alpha","Giel","De","Asis"];

// myList.forEach(function(a,b) {
// 	alert("my name is "+a)
// });

/**------------while loop--------------**/


// var counter = 5;
// var result = 2;

// while ( counter < 20){
// 	alert("this is the "+counter+"th time.");
// 	counter++;
// } 

/**------------FOR LOOP--------------**/

// function goPro(){
// 	alert("you go pro!");
// }

// function justDoit(){
// 	console.log("you did it!");
// }

// function callingList(){
// 	prompt("calling list");

// }

// var yourList = ['marbles', 'legos', 'toys', 'balls', 'shoes'];
// var myList = ['notebooks', 'umbrella', prompt(goPro), alert(justDoit), yourList[2], yourList];

// for (var i=0; i < myList.length; i++){
// 	console.log(myList[i]);
// }

