function greet(name) {
    return `안녕하세요, ${name}님!`;
}
  
console.log(greet("버너스리")); // 안녕하세요, 버너스리님!

const person = {
    firstName: "홍",
    lastName: "길동",
    getFullName: function() {
        // 여기에 코드를 작성하세요.
        return `${this.firstName} ${this.lastName}`;
    }
};
    
console.log(person.getFullName()); // 출력: "홍 길동"   

const cart = [
    { name: "우유", price: 4700, quantity: 2 },
    { name: "양파", price: 1000, quantity: 3 },
    { name: "두부", price: 2500, quantity: 2 }
];

function getTotalPrice(shopList) {
    // 여기에 코드를 작성하세요.
    let sum = 0;

    for(let i = 0; i < shopList.length; i++) {
        sum += shopList[i].price * shopList[i].quantity;
    }

    return sum;
}

console.log(getTotalPrice(cart)); // 출력: 17400   

function Calculator() {
    // 여기에 코드를 작성하세요.
    this.value = 0;

    this.add = function(number) {
        this.value += number;
    }
    this.subtract = function(number) {
        this.value -= number;
    }
    this.reset = function() {
        this.value = 0;
    }
    this.getValue = function() {
        return this.value
    }
}

const calc = new Calculator();

calc.add(10);
console.log(calc.getValue()); // 출력: 10

calc.subtract(4);
console.log(calc.getValue()); // 출력: 6

calc.reset();
console.log(calc.getValue()); // 출력: 0