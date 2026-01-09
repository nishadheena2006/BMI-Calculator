const height = document.querySelector(".height")
const weight = document.querySelector(".weight")
const btn = document.querySelector(".calsBtn")
const resultBox = document.querySelector(".result-box")
const bmiValue = document.querySelector(".bmi-value")
const statusText = document.querySelector(".status")
const previewBox = document.querySelector(".preview")
const liveText = document.querySelector(".live-text")

function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal Weight";
    if (bmi < 29.9) return "Overweight";
    return "Obesity";
}

function calculateBmi() {
    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);

    if (!h || !w || h <= 0 || w <= 0) {
        previewBox.style.display = "none";
        return;
    }
    const bmi = (w / (h / 100) ** 2).toFixed(1);
    liveText.textContent = `BMI: ${bmi} - ${getStatus(bmi)}`;
    previewBox.style.display = "block";
}

height.addEventListener("input", calculateBmi);
weight.addEventListener("input", calculateBmi);

btn.addEventListener("click", () => {
    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);

    if (!h || !w || h <= 0 || w <= 0) {
        alert("Please enter valid height and weight !")
        return;
    }

    const bmi = (w / (h / 100) ** 2).toFixed(1);
    bmiValue.textContent = bmi;
    statusText.textContent = "Health Status: " + getStatus(bmi);
    resultBox.style.display = "block";
})