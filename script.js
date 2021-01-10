console.log(document);

button1 = document.body.getElementsByClassName("button1")[0];
button1.onclick = function () {
  document.getElementById("btn1").innerText = "I'm right";
};

button2 = document.body.getElementsByClassName("button2")[0];
button2.onclick = function () {
  document.getElementById("btn1").innerText = "No, I'm right!";
};

let dontHover = document.getElementById("dont-hover");

// Assignment 2 Alert
dontHover.addEventListener(
  "mouseenter",
  function (event) {
    // highlight the mouseenter target
    event.target.style.color = "red";

    //reset color after short delay
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);

    // send alert to user
    dontHover.onmouseover = function () {
      alert("Hey, I told you not to hover over me!");
    };
  },
  false
);

let divForm = document.getElementById("myForm");
function validatePw() {
  let x = document.forms["myForm"]["pw"].value;
  if (x != "12345678") {
    alert("Password is incorrect");
    return false;
  } else {
    let h2 = document.getElementsByName("h2");
    h2.innerText = "Correct PW";
  }
}
