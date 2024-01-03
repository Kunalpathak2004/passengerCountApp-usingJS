//document.getElementById("count-el").innerText=5;

var count = 0;

var countEl = document.getElementById("count-el");
//console.log(countEl);

let saveEl = document.getElementById("save-el");

function increment() {
     count = count + 1;
     console.log(count);
     countEl.innerText = count;
}

function save() {
     var string = count + " - ";
     saveEl.innerText += string;
     console.log(count);

}