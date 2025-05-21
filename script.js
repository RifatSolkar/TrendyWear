// Modal control
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Switch between Sign In and Sign Up modals
function switchModal(currentId, targetId) {
  closeModal(currentId);
  openModal(targetId);
}

// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
  setTimeout(showSlides, 3000);
}
window.onload = () => {
  if (slides.length > 0) {
    slides[0].classList.add("active");
    setTimeout(showSlides, 3000);
  }
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
};

// Handle Sign Up
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (name && email && password) {
    const user = {
      name: name,
      email: email,
      password: password
    };
    localStorage.setItem("trendyUser", JSON.stringify(user));
    alert("Sign Up successful! You can now Sign In.");
    switchModal("signupModal", "signinModal");
  } else {
    alert("Please fill all fields.");
  }
});

// Handle Sign In
document.getElementById("signinForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("signinEmail").value;
  const password = document.getElementById("signinPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("trendyUser"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("Sign In successful! Welcome, " + storedUser.name);
    closeModal("signinModal");
  } else {
    alert("Invalid email or password.");
  }
});
