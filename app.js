
var count = 0;

var countEl = document.getElementById("count-el");
//console.log(countEl);

let saveEl = document.getElementById("save-el");

function increment() {
     count = count + 1;
     console.log(count);
     countEl.textContent = count;
}

function save() {
     var string = count + " - ";
     saveEl.textContent += string;
     console.log(count);
     countEl.textContent = 0;
     count = 0;
}
