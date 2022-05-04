document.querySelector(".button").addEventListener("click", getText);

function getText() {
  var str = document.querySelector(".input").value;
  var a = str.length;
  var b = 20-a;
  while(b--)
    str = str.concat(" ");
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
