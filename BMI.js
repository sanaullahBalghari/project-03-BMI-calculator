
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();   
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#result');
        const guideMessage = document.querySelector('#guide-message');
        
        if (height === '' || height < 0 || isNaN(height)) {
            results.innerHTML = `Please provide a valid height: ${height}`;
        } else if (weight === '' || weight < 0 || isNaN(weight)) {
            results.innerHTML = `Please provide a valid weight: ${weight}`;
        } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            results.innerHTML = `<span>${bmi}</span>`;
            if (bmi < 18.6) {
                guideMessage.textContent = "Underweight - Your BMI is less than 18.6, consider gaining weight in a healthy manner.";
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                guideMessage.textContent = "Healthy Weight - Your BMI is between 18.6 and 24.9, maintain your current weight and lifestyle.";
            } else {
                guideMessage.textContent = "Overweight - Your BMI is greater than 24.9, consider losing weight through diet and exercise.";
            }
        }
    });
