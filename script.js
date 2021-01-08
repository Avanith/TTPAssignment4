console.log(document);

button1 = document.body.getElementsByClassName("button1")[0];
button1.onclick = function () {
    document.getElementById("btn1").innerText = "I'm right";
}

button2 = document.body.getElementsByClassName("button2")[0];
button2.onclick = function () {
    document.getElementById("btn1").innerText = "No, I'm right!";
}