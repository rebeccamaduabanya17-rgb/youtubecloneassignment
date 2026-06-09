// =========================
// DARK MODE TOGGLE
// =========================
document.getElementById("theme-btn")
.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// =========================
// GET ELEMENTS ONCE (faster + cleaner)
// =========================
const search = document.querySelector(".searchbar input");
const videos = document.querySelectorAll(".video");
const categories = document.querySelectorAll(".category");

let activeCategory = ""; // stores clicked category


// =========================
// FILTER FUNCTION (CORE FIX)
// =========================
function filterVideos() {

    const searchValue = search.value.toLowerCase();

    videos.forEach(video => {

        const text = video.innerText.toLowerCase();

        const matchesSearch = text.includes(searchValue);
        const matchesCategory = activeCategory === "" || text.includes(activeCategory);

        // show only if BOTH match
        if (matchesSearch && matchesCategory) {
            video.style.display = "";
        } else {
            video.style.display = "none";
        }
    });
}


// =========================
// SEARCH INPUT
// =========================
search.addEventListener("keyup", filterVideos);


// =========================
// CATEGORY FILTER
// =========================
categories.forEach(cat => {

    cat.addEventListener("click", () => {

        activeCategory = cat.innerText.toLowerCase();
        filterVideos();

    });
});

// =========================
// ADVANCED CURSOR RESPONSIVENESS
// =========================

// Track mouse position for responsive effects
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Add hover effects to interactive elements
const interactiveElements = document.querySelectorAll('button, a, .category, .video, .material-icons, input[type="text"], input[type="submit"]');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
        this.style.userSelect = 'none';
    });

    element.addEventListener('mouseleave', function() {
        this.style.cursor = 'auto';
    });

    // Add click feedback
    element.addEventListener('mousedown', function() {
        this.style.transition = 'all 0.05s ease';
    });

    element.addEventListener('mouseup', function() {
        this.style.transition = 'all 0.2s ease';
    });
});

// Enhance video card cursor interaction
videos.forEach(video => {
    video.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
        this.classList.add('active-hover');
    });

    video.addEventListener('mouseleave', function() {
        this.classList.remove('active-hover');
    });

    video.addEventListener('click', function() {
        // Add tactile feedback
        this.style.opacity = '0.9';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 100);
    });
});

// Add cursor feedback on search input focus
search.addEventListener('focus', function() {
    this.style.cursor = 'text';
});

search.addEventListener('blur', function() {
    this.style.cursor = 'default';
});

// Smooth cursor transitions on category click
categories.forEach(cat => {
    cat.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });

    cat.addEventListener('click', function() {
        // Remove active class from all categories
        categories.forEach(c => c.classList.remove('active'));
        // Add active class to clicked category
        this.classList.add('active');
    });
});

// Improve navbar icon responsiveness
document.querySelectorAll('.navigation-icons i, .navbar .logo i, .searchbar i').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });

    icon.addEventListener('click', function(e) {
        // Prevent default behavior if needed
        e.stopPropagation();
    });
});

// Add keyboard navigation for accessibility and better UX
document.querySelectorAll('.category, .video, button').forEach(element => {
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            this.click();
            this.style.cursor = 'pointer';
        }
    });
});

// Optimize cursor response on window focus/blur
window.addEventListener('focus', function() {
    document.body.style.opacity = '1';
});

window.addEventListener('blur', function() {
    document.body.style.opacity = '0.95';
});
