function hideshow(k) {
    var x = document.getElementById(k);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }