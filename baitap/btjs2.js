function time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  setTimeout("time()", 1000);
  document.getElementById("hvn").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("btn1").onclick = function () {
    document.getElementById("hvn").style.display = "none";
  };

  document.getElementById("btn2").onclick = function () {
    document.getElementById("hvn").style.display = "block";
  };
}
