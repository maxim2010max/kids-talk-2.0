var ret = document.getElementById("hi").addEventListener("click", onas);
function onas() {
   window.location = "onas.html";
};

var yesElements = document.getElementsByClassName("yes");
var noElements = document.getElementsByClassName("no")
if (yesElements.length > 0) {
   for (var i = 0; i < yesElements.length; i++) {
      yesElements[i].addEventListener("click", function () {
         var yest = document.getElementById("yest");
         var not = document.getElementById("not");
         yest.textContent = "Отлично";
         not.textContent = "";
      });
   }
}
if (noElements.length > 0) {
   for (var i = 0; i < noElements.length; i++) {
      noElements[i].addEventListener("click", function () {
         var yest = document.getElementById("yest");
         var not = document.getElementById("not");
         yest.textContent = "";
         not.textContent = "Жаль,если есть вопросы пишите в соц сети.";
      });
   }
}


var pod = document.getElementById("info").addEventListener("click", pod);

function pod() {
   window.location = "pod.html";
};

var elements = document.getElementsByClassName("more");

for (var i = 0; i < elements.length; i++) {
   elements[i].addEventListener("click", book);
}

function book() {
   window.location = "more.html";
}

var vk = document.getElementById("vk").addEventListener("click", vk);
function vk() {
   window.location = "https://vk.com/maximburtsev3";
};
var tg = document.getElementById("tg").addEventListener("click", tg);
function tg() {
   window.location = "https://t.me/max_python3"
};






