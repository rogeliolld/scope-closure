const person = () =>{
    let saveName ="Name";
    return{
        getName: ()=>{
            return saveName;
        },
        setName: (name)=>{
            saveName = name;
        }
    };
}

newPerson = person();

console.log(newPerson.getName());
newPerson.setName('Rogelio');
console.log(newPerson.getName());