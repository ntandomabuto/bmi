document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var bmi = calculateBMI(weight, height);
    displayResult(bmi);
});
function calculateBMI(weight, height) {
    return weight / (height * height);
}
function displayResult(bmi) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '';
    var bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }
    var resultMessage = ` ${bmi.toFixed(2)} You are ${bmiCategory}.`;
    resultElement.textContent = resultMessage;
}









