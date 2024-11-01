function showMessage(){
    alert("This message is inside the function");
}

//showMessage();


function sum(x,y) {
    return x+y;
}

console.log(sum(5, 7));


// var arrowfunction = () => alert("Hello world!");

// arrowfunction();

var arrowfunction = name => alert(`Hello ${name}`);

//arrowfunction("Arijesa Muja");


function Firstname() {
    var localVar = "Arijesa";
    alert(localVar);
}
//Firstname();

function seconds(minutes) {
    return minutes * 60;
}

document.write(seconds(60) + "<br>");

//--------------------------------------------------------------
//OBJEKTET

var car = {
    name: "BMW",
    color: "Black",
    year: 2020,
    km: 20000,
    startEngine: function(){
        alert("Vrooom!")
    },
    get getKm(){
        return this.km;
    },
    set setKm(km){
        this.km=km;
    }
}

console.log(car.name)
console.log(car.color)
console.log(car.year)
console.log(car.km)
console.log(car['color'])

//car.startEngine()


var computer = new Object();

computer.name = "Lenovo"
computer.cpu = "Intel core i7"
computer.ram = "32GB"
computer.gpu = "GeForce GT730 2GB Dual DP HP"

computer.type = function(){
    return this.name + ", " + this.cpu + ", " + this.ram + ", " + this.gpu
}

document.write(computer.type())

delete computer.gpu
document.write("<br>")
document.write(computer.type())


console.log(car.getKm)
car.setKm = 25000
console.log(car.getKm)


function Computer(name, cpu, ram, gpu) {
    this.name = name;
    this.cpu = cpu;
    this.ram = ram;
    this.gpu = gpu;
}

var computer1 = new Computer("MAC", "M1 Chip", "8GB", "5600M GPU");
var computer2 = new Computer("HP", "Intel i3 Core", "4GB", "Integrated");
console.log("Computer 1: " + computer1);
console.log("Computer 2: " + computer2);
document.write("<br>")
document.write("Computer 1: " + computer1.name + ", " + computer1.cpu + ", " + computer1.ram + ", " + computer1.gpu)
document.write("<br>")
document.write("Computer 2: " + computer2.name + ", " + computer2.cpu + ", " + computer2.ram + ", " + computer2.gpu)

