const helloWorld = () =>{
   const hello = 'Hello World';
   console.log(hello);
};

helloWorld();
console.log(hello);

var scope = 'I am Global';

const functionScope = () =>{
    var scope = 'i am just a local';
    const func = () =>{
        return scope
    }
    console.log(func());
}