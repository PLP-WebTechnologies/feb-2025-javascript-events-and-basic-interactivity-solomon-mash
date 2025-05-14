// 1. Event Handling
document.getElementById("colorButton").addEventListener("click", () => {
  document.body.style.backgroundColor = 
    '#' + Math.floor(Math.random()*16777215).toString(16);
});

document.addEventListener("keydown", (e) => {
  document.getElementById("keyInfo").textContent = `You pressed: ${e.key}`;
});

document.getElementById("secretButton").addEventListener("dblclick", () => {
  alert("🎉 Secret Double Click Triggered!");
});

// 2. Image Gallery
const images = [
  "https://cdn.mos.cms.futurecdn.net/AoWXgnHSxAAPxqymPQMQYL-1200-80.jpg",
  "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?cs=srgb&dl=pexels-krisof-1252890.jpg&fm=jpg",
  "https://blog.gale.com/wp-content/uploads/2024/07/iStock-1693812103.jpg"
];
let currentImage = 0;

function showImage(index) {
  document.getElementById("galleryImage").src = images[index];
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}

// 3. Tabs
function showTab(id) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

// 4. Form Validation
document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const message = document.getElementById("formMessage");

  if (!email.value.includes("@") || password.value.length < 8) {
    message.textContent = "❌ Invalid email or password must be at least 8 characters!";
    message.style.color = "red";
  } else {
    message.textContent = "✅ Form submitted successfully!";
    message.style.color = "green";
  }
});
