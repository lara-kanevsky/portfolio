window.onload = function cars() {
    var array = [];
    var carNumber = 20;
    for (let i = 0; i < carNumber; i++) {
        var car = new Car();
        array.push(car);
        array.sort((a, b) => (a.distance > b.distance) ? 1 : -1)
    }
    for(let i = 0; i < carNumber; i++){
        array[i].display();
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
        car.style.animationDuration = 1/this.distance * 30 + Math.random() * 3 + 1+  "s";
        car.style.right=  -1/this.distance * Math.random() *2 - 80+ "vw";
        car.style.top = 35 + this.distance/VIEW +"%";
        var main = document.getElementById("main1");
        main.append(car);
    }
}
function getDotPosition(){
    let dot = document.getElementsByClassName('dot');
    //let a = dot.getBoundingClientRect();
    
   // for(var i = 0; i < dot.length; i++){
        
     //   window.alert(dot.item(i).getBoundingClientRect().left);
    //}
    return dot.item(0).getBoundingClientRect().left
}
function updateShadow(){
    var viewport_width = window. innerWidth;
    let character = document.getElementById("character");
    let a;
    let b;
    if(getDotPosition()>-900 && getDotPosition()<900){
        if(Math.abs(getDotPosition())/300>7){
            a = 8;
        }else{
            a= Math.abs(getDotPosition())/300;
        }
        if(Math.abs(1/a)> 2 ){
            b=-2;
        }else{
            b=-a;
        }
        character.style.filter ="drop-shadow(" + getDotPosition()/150 + "rem "+ -1+"rem "+  a+"rem rgba(255, 0, 0, "+Math.abs(1/a)+"))";
        console.log(Math.abs(1/a));
    
    }else{
        character.style.filter = "none";
    };
    
    //console.log(getDotPosition())
}
var myVar = setInterval(updateShadow, 10);

class node{
    constructor(id, parent){
        this.id = id;
        this.parent = parent;
    }
}