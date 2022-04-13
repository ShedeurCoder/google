document.getElementById('input').onsubmit = function() {
    const sv = document.getElementById('s').value;
      window.location.href = "https://www.google.com/search?q=" + sv.replace(" ", "+");
      return false;
  };
function darkMode() {
    var element = document.body;
    element.classList.toggle("darkmode");
}