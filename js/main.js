$( document ).ready(function() {

    var swiperTeam = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
    });

});


window.addEventListener("scroll", function(){
  window.scrollY>100
    ?
    document.querySelector(".main-nav-outer").classList.add("main-nav-outer--sticky")
    :
    document.querySelector(".main-nav-outer").classList.remove("main-nav-outer--sticky")
})




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