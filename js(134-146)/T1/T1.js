class Car{
    constructor(name, model, price){
        this.n = name;   
        this.m = model;
        this.p = price;
    }
    info(){
        return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`
    }
    run(){
        return `Car Is Running Now`
    }
    stop(){
        return `Car Is Stopped`
    }
}

let carOne=new Car("MG",2022,420000)
let carTwo=new Car("KM",2012,50000)
let carThree=new Car("LG",2021,90000)


// console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`)
console.log(carOne. info())
console.log(carOne.run())
