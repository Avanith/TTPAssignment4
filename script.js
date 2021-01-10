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

function validatePw() {
  let username = document.getElementById("UN").value;
  let eid = document.getElementById("EID").value;
  let pw = document.getElementById("passwordID").value;

  console.log("The username entered is: ", username);
  console.log("The email is: ", eid);
  console.log("The password is: ", pw);
  console.log(typeof pw);
  if (pw != "12345678") {
    alert("Incorrect password");
  } else {
    let header1 = document.querySelector("h1");
    header1.innerText = "Password is correct";
  }
}
