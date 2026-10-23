let currentStory = 1;

let photo1 = document.getElementById("photo1");
let photo2 = document.getElementById("photo2");
let photo3 = document.getElementById("photo3");
let caption1 = document.getElementById("caption1");
let caption2 = document.getElementById("caption2");
let caption3 = document.getElementById("caption3");
let storyTitle = document.getElementById("story-title");
let storyNumber = document.getElementById("story-number");
let nextButton = document.getElementById("next-story");

function changeStory() {
  if (currentStory === 1) {
    currentStory = 2;
    storyTitle.textContent = "Story 2: One More Cup";
    photo1.src = "images/full.jpg";
    photo1.alt = "A full glass of coffee and milk";
    photo2.src = "images/empty.jpg";
    photo2.alt = "An empty glass beside the coffee machine";
    photo3.src = "images/making.jpg";
    photo3.alt = "Coffee flowing from the machine into a glass";
    caption1.textContent = "I enjoy my cup of coffee.";
    caption2.textContent = "I have finished it. My cup is empty again.";
    caption3.textContent = "One cup is not enough. I make another!";
    storyNumber.textContent = "Story 2 of 2";
  } else {
    currentStory = 1;
    storyTitle.textContent = "Story 1: The First Cup";
    photo1.src = "images/empty.jpg";
    photo1.alt = "An empty glass beside the coffee machine";
    photo2.src = "images/making.jpg";
    photo2.alt = "Coffee flowing from the machine into a glass";
    photo3.src = "images/full.jpg";
    photo3.alt = "A full glass of coffee and milk";
    caption1.textContent = "My cup is empty. It is time for coffee.";
    caption2.textContent = "I make a fresh cup of coffee.";
    caption3.textContent = "My coffee is ready to enjoy.";
    storyNumber.textContent = "Story 1 of 2";
  }
}

nextButton.addEventListener("click", changeStory);
