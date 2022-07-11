window.onload = function cars() {
    var array = [];
    for (let i = 0; i < 15; i++) {
        var car = new Car();
        car.display()
        array.sort();
    }
    for(let i = 0; i < 15; i++){
        array[i].display;
    }
}
const VIEW = 5;
class Car{
    constructor(){
        this.distance = Math.random() * 100;
    }
    display() {
        var car = document.getElementById("car").cloneNode(true);
        car.removeAttribute('id');
        car.style.height = this.distance/VIEW + "rem";
        car.style.animationDuration = 1/this.distance * 30 + 1+  "s";
        //car.style.top = 35 + this.distance/VIEW +"%";
        var main = document.getElementById("main1");
        main.append(car);
    }
}