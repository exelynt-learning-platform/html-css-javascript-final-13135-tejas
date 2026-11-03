
const waterCount = document.querySelector("#water-count");
const goalMessage = document.querySelector("#goal-message");

const smallGlassButton = document.querySelector("#small-glass");
const glassButton = document.querySelector("#glass");
const bottleButton = document.querySelector("#bottle");
const resetButton = document.querySelector("#reset");

const dailyGoal = 2000;

let totalWater = 0;

function updateWaterDisplay() {
    waterCount.textContent = totalWater;

    const goalReached = totalWater >= dailyGoal;

    waterCount.classList.toggle("goal-met", goalReached);
    goalMessage.classList.toggle("hidden", !goalReached);
}

smallGlassButton.addEventListener("click", function () {
    totalWater += 150;
    updateWaterDisplay();
});

glassButton.addEventListener("click", function () {
    totalWater += 250;
    updateWaterDisplay();
});

bottleButton.addEventListener("click", function () {
    totalWater += 500;
    updateWaterDisplay();
});

resetButton.addEventListener("click", function () {
    totalWater = 0;
    updateWaterDisplay();
});

// Display the initial state
updateWaterDisplay();
