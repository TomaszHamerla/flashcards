const flashcardsData = [
  { polish: "kot", english: "cat" },
  { polish: "pies", english: "dog" },
  { polish: "dom", english: "house" },
  { polish: "telefon", english: "phone" },
  { polish: "muzyka", english: "music" },
];
const container = document.getElementById("container");

flashcardsData.forEach((flashcard) => {
  createFlashcards(flashcard.polish, flashcard.english);
});

function createFlashcards(polish, english) {
  const flashcard = document.createElement("div");
  flashcard.classList.add("flashcard");
  container.appendChild(flashcard);
  flashcard.textContent = polish;

  flashcard.addEventListener("mouseenter", () => {
    flashcard.textContent = english;
    flashcard.setAttribute("style", "color:blue");
  });

  flashcard.addEventListener("mouseout", () => {
    flashcard.textContent = polish;
    flashcard.setAttribute("style", "flashcard");
  });
}
