const fruits = () =>{

    if(true){
        var fruits1='apple';
        let fruits2='banana';
        const fruits3='kiwi';
        // Const y let, solo se ejecuta dentro del ambito de bloque
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}

fruits();
/*   VAR */
// let x = 1;
// {
//     let x = 2;
//     console.log(x);
// }
// console.log(x);

/*   LET */
var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () =>{

    /*   VAR */
    // for(var i =0; i<10; i++){
    //     setTimeout(()=>{
    //         console.log(i);
    //     }, 1000)
    // }

    /*   LET */
    for(let i =0; i<10; i++){
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }

}

anotherFunction();