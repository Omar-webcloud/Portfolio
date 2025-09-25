// Toggle sidebar on mobile
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");

// Open sidebar
hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
  hamburger.style.display = "none"; // hide hamburger
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  hamburger.style.display = "block"; // show hamburger again
});

// Close sidebar when link is clicked (on mobile)
document.querySelectorAll(".sidebar ul li a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
    hamburger.style.display = "block"; // show hamburger again
  });
});