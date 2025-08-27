let increasebtn = document.getElementById("increasebtn");
let restartbtn = document.getElementById("restartbtn");
let decreasebtn = document.getElementById("decreasebtn");

let counterElem = document.getElementById("Counter");
let value;
value = Number(counterElem.textContent);

let msgtext = document.getElementById("msgtext");

increasebtn.onclick = function () {
  value++;
  counterElem.textContent = value;
  msgtext.textContent = "The counter was increased by one";
  setTimeout(function () {
    msgtext.textContent = "";
  }, 1000);
};

decreasebtn.onclick = function () {
  value--;
  counterElem.textContent = value;
  msgtext.textContent = "The counter was decreased by one";
  setTimeout(function () {
    msgtext.textContent = "";
  }, 1000);
};

restartbtn.onclick = function () {
  value = 0;
  counterElem.textContent = value;
  msgtext.textContent = "The counter was reset";
  setTimeout(function () {
    msgtext.textContent = "";
  }, 1000);
};
