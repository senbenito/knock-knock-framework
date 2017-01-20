// Knock Knock JS Code:

// replace .hide within the HTML
 document.getElementById("joke-part2").classList.add("hide");
 document.getElementById("button2").classList.add("hide");
 document.getElementById("joke-part3").classList.add("hide");

// When user clicks first button, show second part
document.getElementById("button1").addEventListener("mouseover", function() {
  document.getElementById("joke-part2").classList.add("show");
  document.getElementById("button2").classList.add("show");
});

document.getElementById("button2").addEventListener("mouseover", function() {
  document.getElementById("joke-part3").classList.add("show");
  document.getElementById("button3").classList.add("show");
});


// replace .hide within the HTML
 document.getElementById("joke2-part2").classList.add("hide");
 document.getElementById("joke2-part3").classList.add("hide");
 document.getElementById("joke2-part4").classList.add("hide");
document.getElementById("joke2-part5").classList.add("hide");
 document.getElementById("joke2-part6").classList.add("hide");
 document.getElementById("joke2-part7").classList.add("hide");
  // document.getElementById("button21").classList.add("hide");
 document.getElementById("button22").classList.add("hide");
 document.getElementById("button23").classList.add("hide");
  document.getElementById("button24").classList.add("hide");
 document.getElementById("button25").classList.add("hide");
 document.getElementById("button26").classList.add("hide");

// When user clicks first button, show second part
document.getElementById("button21").addEventListener("mouseover", function() {
  document.getElementById("joke2-part2").classList.add("show");
  document.getElementById("button22").classList.add("show");
});

document.getElementById("button22").addEventListener("mouseover", function() {
  document.getElementById("joke2-part3").classList.add("show");
  document.getElementById("button23").classList.add("show");
});

document.getElementById("button23").addEventListener("mouseover", function() {
  document.getElementById("joke2-part4").classList.add("show");
  document.getElementById("button24").classList.add("show");
});

document.getElementById("button24").addEventListener("mouseover", function() {
  document.getElementById("joke2-part5").classList.add("show");
  document.getElementById("button25").classList.add("show");
});

document.getElementById("button25").addEventListener("mouseover", function() {
  document.getElementById("joke2-part6").classList.add("show");
  document.getElementById("button26").classList.add("show");
});

document.getElementById("button26").addEventListener("mouseover", function() {
  document.getElementById("joke2-part7").classList.add("show");
});
