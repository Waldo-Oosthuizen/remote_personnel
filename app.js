/*Navbar */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");


hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

/*Close Navbar */
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  hamburger.classList.remove("toggle");
});

const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

//Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get all elements with the class name "nav-btn"
var btns = document.getElementsByClassName("nav-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When any of the buttons with class "nav-btn" is clicked, open the modal
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    modal.style.display = "block";
  };
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const marquees = document.querySelectorAll(".marquee-wrapper");

marquees.forEach((marquee) => {
  const cardsContainer = marquee.querySelector(".cards-container");

  let isDragging = false;
  let startX;
  let scrollLeft;

  // Handle mouse and touch interactions
  const startDrag = (e) => {
    isDragging = true;
    startX = e.touches ? e.touches[0].pageX : e.pageX - marquee.offsetLeft;
    scrollLeft = marquee.scrollLeft;
    cardsContainer.style.cursor = "grabbing";
  };

  const stopDrag = () => {
    isDragging = false;
    cardsContainer.style.cursor = "grab";
  };

  const drag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches ? e.touches[0].pageX : e.pageX - marquee.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    marquee.scrollLeft = scrollLeft - walk;
  };

  // Event listeners for both mouse and touch
  cardsContainer.addEventListener("mousedown", startDrag);
  cardsContainer.addEventListener("touchstart", startDrag);

  cardsContainer.addEventListener("mouseleave", stopDrag);
  cardsContainer.addEventListener("mouseup", stopDrag);
  cardsContainer.addEventListener("touchend", stopDrag);

  cardsContainer.addEventListener("mousemove", drag);
  cardsContainer.addEventListener("touchmove", drag);
});
