document.addEventListener("DOMContentLoaded", function(event) {
  nos = ["Nope", "No", "Not Yet"]
  setTimeout(function() {
    console.log('a');
    document.getElementById('answer').innerHTML = nos[Math.floor(Math.random()*nos.length)];
  }, 3000);
});
