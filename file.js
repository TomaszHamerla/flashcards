const cards = document.querySelectorAll(".flashcard");
cards.forEach((card) => card.addEventListener("mouseenter", getCardsEn));
cards.forEach((card) => card.addEventListener("mouseout", getCardsPl));

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
function getCardsPl(event) {
  const cardIndex = Array.from(cards).indexOf(event.currentTarget);
  const { polish } = flashcardsData[cardIndex];
  cards[cardIndex].innerHTML = polish;
}
function getCardsEn(event) {
  const cardIndex = Array.from(cards).indexOf(event.currentTarget);
  const { english } = flashcardsData[cardIndex];
  console.log(english);
  cards[cardIndex].innerHTML = english;
}
