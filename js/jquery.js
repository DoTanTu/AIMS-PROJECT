window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  