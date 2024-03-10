function updateTime() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = (("0" + dt.getDate()).slice(-2)) + "-" + (("0" + (dt.getMonth() + 1)).slice(-2)) + "-" + (dt.getFullYear()) + " [" + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2)) + ":" + (("0" + dt.getSeconds()).slice(-2)) +"]";//made by Aditya Jindal
}
  updateTime();
  setInterval(updateTime, 1000);

function increaseFontSize() {
  var rootElement = document.documentElement;
  var currentSize = parseFloat(window.getComputedStyle(rootElement, null).getPropertyValue('font-size'));
  rootElement.style.fontSize = (currentSize + 1) + "px";
}

function resetFontSize() {
    document.documentElement.style.fontSize = "16px"; // Set the default font size
}

function decreaseFontSize() {
    var rootElement = document.documentElement;
    var currentSize = parseFloat(window.getComputedStyle(rootElement, null).getPropertyValue('font-size'));
    rootElement.style.fontSize = (currentSize - 1) + "px";

  }

function toggleList(listId,buttonId) {
  var list = document.getElementById(listId);
  var button = document.getElementById(buttonId);
  if (list.style.display === "none" || list.style.display === "") {
    list.style.display = "block";
    button.textContent = "▴";

  } else {
    list.style.display = "none";
    button.textContent = "▾";
  }
}

window.addEventListener("DOMContentLoaded", function() {
  var hiddenLists = document.getElementsByClassName("hidden");
  for (var i = 0; i < hiddenLists.length; i++) {
    hiddenLists[i].style.display = "none";
  }
});
