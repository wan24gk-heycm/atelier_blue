
const container = document.getElementById("container");
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".sidebar a");

let currentIndex = 0;
let isScrolling = false;

function showSection(index) {
    if (index < 0 || index >= sections.length) return;
    currentIndex = index;
    container.style.transform = `translateY(-${index * 100}vh)`;
    sections.forEach((s, i) => s.classList.toggle("visible", i === index));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

window.addEventListener("wheel", (e) => {
    if (isScrolling) return;
    isScrolling = true;
    if (e.deltaY > 0) {
        showSection(currentIndex + 1);
    } else {
        showSection(currentIndex - 1);
    }
    setTimeout(() => isScrolling = false, 900);
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(i);
    });
});

showSection(0);

// --- Lógica para cambiar imagen por tabla ---
const nombreInput = document.getElementById("nombres");
const imageSection = document.getElementById("image-section");
const tableSection = document.getElementById("table-section");
const nombreCell = document.getElementById("nombre-cell");

nombreInput.addEventListener("input", () => {
    if (nombreInput.value.trim() !== "") {
        imageSection.style.display = "none";
        tableSection.style.display = "flex";
        tableSection.style.flexDirection = "column";
        nombreCell.textContent = nombreInput.value;
    } else {
        imageSection.style.display = "block";
        tableSection.style.display = "none"; // desaparece si se borra
    }
});
