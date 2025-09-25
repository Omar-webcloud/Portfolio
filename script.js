// Toggle sidebar on mobile
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Close sidebar when link is clicked (on mobile)
document.querySelectorAll(".sidebar ul li a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});
