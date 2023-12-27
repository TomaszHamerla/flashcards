const cards = document.querySelectorAll(".flashcard");
const flashcardsData = [
  { polish: "kot", english: "cat" },
  { polish: "pies", english: "dog" },
  { polish: "dom", english: "house" },
  { polish: "telefon", english: "phone" },
  { polish: "muzyka", english: "music" },
];
cards.forEach((card, index) => {
  if (flashcardsData[index]) {
    const { polish } = flashcardsData[index];
    card.innerHTML = polish;
  } else {
    card.innerHTML = "No data available";
  }
});
