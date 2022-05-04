document.querySelector(".button").addEventListener("click", getText);

function getText() {
  var str = document.querySelector(".input").value;
  var a = str.length;
  var b = 20-a;
  while(b--)
    str = str.concat(" ");
      // document.querySelector(".A").innerHTML = str[0];
      // document.querySelector(".B").innerHTML = str[1];
      // document.querySelector(".C").innerHTML = str[2];
      // document.querySelector(".D").innerHTML = str[3];
      // document.querySelector(".E").innerHTML = str[4];
      // document.querySelector(".F").innerHTML = str[5];
      // document.querySelector(".G").innerHTML = str[6];
      // document.querySelector(".H").innerHTML = str[7];
      // document.querySelector(".I").innerHTML = str[8];
      // document.querySelector(".J").innerHTML = str[9];
      // document.querySelector(".K").innerHTML = str[10];
      // document.querySelector(".L").innerHTML = str[11];
      // document.querySelector(".M").innerHTML = str[12];
      // document.querySelector(".N").innerHTML = str[13];
      // document.querySelector(".O").innerHTML = str[14];
      // document.querySelector(".P").innerHTML = str[15];
      // document.querySelector(".Q").innerHTML = str[16];
      // document.querySelector(".R").innerHTML = str[17];
      // document.querySelector(".S").innerHTML = str[18];
      // document.querySelector(".T").innerHTML = str[19];

      const chars = document.querySelectorAll(".char");
      for (var i = 0; i < chars.length; i++)
        chars[i].innerHTML = str[i];
}

document.addEventListener("keypress", function (event) {
  click(event.key);
});

function click(a) {
  switch (a) {
    case "Enter":
      getText();
      break;
  }
}
