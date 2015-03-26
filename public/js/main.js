document.addEventListener("DOMContentLoaded", function(event) {
  nos = ["Nope", "No", "Not Yet", "Maybe Tomorrow", "No Indeed", "Absolutely Not", "Under no circumstances", "Negative", "Not Today"]
  setTimeout(function() {
    console.log('a');
    document.getElementById('answer').innerHTML = nos[Math.floor(Math.random()*nos.length)];
  }, 3000);
});
