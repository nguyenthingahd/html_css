function ptb1() {
  var a = document.form.hsa.value;
  //   a = document.getElementById("a").value()
  //   a = document.getElementsByName("a")[0].value() chỉ có 1ptu
  // a = document.querySelector("form input[name = 'hsa']")
  var b = document.form.hsb.value;

  var ketqua = "Phương trình: " + a + "x + " + b + " = 0 <br>";

  if (a == 0 && b == 0) {
    ketqua += "Phương trình vô số nghiệm";
  } else if (a != 0 && b == 0) {
    ketqua += "Phương trình có nghiệm x = 0";
  } else if (a == 0 && b != 0) {
    ketqua += "Phương trình vô nghiệm";
  } else {
    ketqua += "Phương trình có nghiệm x = " + -b / a;
  }
  document.getElementsByClassName("ketqua")[0].innerHTML = ketqua;
}
