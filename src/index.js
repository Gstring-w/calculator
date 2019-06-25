var show = document.getElementsByClassName("number")[0];
var options = document.getElementsByClassName("option")[0];
var current = 0;
var cache = "";
var last = 0;
var currentModel = null;
options.addEventListener(
  "click",
  function(e) {
    dealClick(e.target.innerHTML);
  },
  false
);

const hash = {
  "+": (a, b) => +a + +b,
  "-": (a, b) => +a - +b,
  "/": (a, b) => +a / +b,
  X: (a, b) => +a * +b,
  "%": (a, b) => +a % +b,
  ".": (a, b) => +(a + "." + b)
};

var dealClick = value => {
  if (current == 0 && value == "/") {
    alert("0不可除！");
  }

  //处理数字
  if (+value !== NaN && +value * 0 == 0) {
    cache += value;
    current = +cache;
    showResult(current);
  }

  if (value == ".") {
    cache += current + ".";
    last = current;
  }
  if (value == "+/-") {
    current = current * -1;
    showResult(current);
  }
  if (+value !== NaN && +value * 0 !== 0) {
    switch (value) {
      case "AC":
        current = 0;
        cache = "";
        currentModel = null;
        showResult(0);
        break;
      case "+":
        cache = "";
        last = current;
        currentModel = hash[value];
        break;
      case "-":
        cache = "";
        last = current;
        currentModel = hash[value];
        break;
      case "/":
        cache = "";
        last = current;
        currentModel = hash[value];
        break;
      case "X":
        cache = "";
        last = current;
        currentModel = hash[value];
        break;
      case "=":
        cache = "";
        current = currentModel(last, current);
        showResult(current);
        break;
      case "%":
        cache = "";
        last = current;
        currentModel = hash[value];
        break;
    }
  }
};

var showResult = value => {
  console.log((value + "").length);
  // 13
  if ((value + "").length > 13) {
    show.style.fontSize = 29 + "px";
    if ((value + "").length > 18) {
      show.style.fontSize = 22 + "px";
    }
  }
  show.innerHTML = value;
};
