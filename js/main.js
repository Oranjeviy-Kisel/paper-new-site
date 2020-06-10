
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.firstElementChild.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  // console.log(element.dataset.descr);
  captionText.innerHTML = element.dataset.descr;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
}