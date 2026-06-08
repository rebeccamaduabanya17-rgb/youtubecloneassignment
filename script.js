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