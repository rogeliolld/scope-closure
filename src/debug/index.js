var a = 'Hello';

function hello() {
    let b = 'Hello World';
    const c = 'Hello World !';

    if (true) {
        let d = 'Hello World !!';
        debugger
    }
}

hello();


const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins
}
let myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(13);
