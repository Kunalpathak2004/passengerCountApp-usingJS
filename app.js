//document.getElementById("count-el").innerText=5;

var count = 0;

var countEl = document.getElementById("count-el");
//console.log(countEl);

function increment() {
     count = count + 1;
     console.log(count);
     countEl.innerText = count;
}

function save() {
     count = count + 1;
     console.log(count);
     document.getElementById("save-btn").innerText = count;
}