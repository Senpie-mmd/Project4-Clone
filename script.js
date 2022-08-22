const searchIcon = document.querySelector(".search-icon");
const txtSearch = document.querySelector(".txt-search");

searchIcon.addEventListener("click", () => {
    if(txtSearch.classList.contains("active")) {
        txtSearch.classList.remove("active");
    } else {
        txtSearch.classList.add("active");
        txtSearch.focus();
    }
})