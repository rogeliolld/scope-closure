var hello = "Hello";
let wolrd = 'Hello world';
const hellowolrd = 'Hello world!';

const anotherFunction = () =>{
    console.log(hello);
    console.log(wolrd);
    console.log(hellowolrd);

}

anotherFunction();


/*Mala Practicas */
const helloWorld = () =>{
    globalVar = 'im global';
}

helloWorld();
console.log(globalVar);


const anotherFunction =  () =>{
    var localVar = globalVar = 'Im Global';
}

anotherFunction();
console.log(globalVar);