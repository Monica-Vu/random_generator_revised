function pickOne() {
    var list = document.getElementById("list").value.trim();
    var list = document.getElementById("list").value.split(",");
    var randomnum = Math.floor((Math.random() * list.length ) )
    console.log(list + randomnum);
    document.getElementById('returnedText').innerHTML = list[randomnum];
}

function randomize() {
    var list = document.getElementById("list").value.trim();
    var list = document.getElementById("list").value.split(",");
    list.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById('returnedText').innerHTML = list;
}

function clearReturnedText() {
    document.getElementById("returnedText").innerHTML = " ";
}