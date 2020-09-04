function hideshow(k) {
    var x = document.getElementById(k);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function copyText(w) {
  /* Get the text field */
  var copyText = document.getElementById(w);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
}