function calculate() {
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please provide a valid height";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please provide a valid weight";
    } else {
        // BMI Forumula
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        let measure = "";

        if (bmi <= 18.4) {
            measure = `Your BMI is ${bmi} which means you are Underweight`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            measure = `Your BMI is ${bmi} which means you are Normal`;
        } else if (bmi >= 25 && bmi <= 29.9) {
            measure = `Your BMI is ${bmi} which means you are Overweight`;
        } else if (bmi >= 30) {
            measure = `Your BMI is ${bmi} which means you are Obese`;
        }

        // To Display Results
        results.innerHTML = `<span>${measure}</span>`;
    }
}