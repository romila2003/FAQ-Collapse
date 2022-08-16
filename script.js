// const xIcon = document.querySelectorAll(".fa-xmark");
// const chevronDownIcon = document.querySelectorAll(".fa-chevron-down");
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    })
})
