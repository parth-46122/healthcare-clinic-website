AOS.init();

window.addEventListener('load', function () {
  document.getElementById('preloader').style.display = 'none';
});

document.getElementById('bmiForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);
  const heightM = heightCm / 100;

  const bmi = (weight / (heightM * heightM)).toFixed(2);
  document.getElementById('bmiValue').textContent = bmi;

  let message = '';
  if (bmi < 18.5) {
    message = 'You are underweight. Consider consulting a nutritionist.';
  } else if (bmi < 24.9) {
    message = 'You have a normal weight. Keep up the good work!';
  } else if (bmi < 29.9) {
    message = 'You are overweight. A healthy lifestyle is recommended.';
  } else {
    message = 'You are obese. Medical guidance is strongly advised.';
  }

  document.getElementById('bmiMessage').textContent = message;
  document.getElementById('bmiResult').style.display = 'block';
});
