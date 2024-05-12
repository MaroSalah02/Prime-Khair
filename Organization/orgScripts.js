let currentStep = 1;
const form = document.getElementById('multi-step-form');
const progressBar = document.querySelector('.progress-bar');

function nextStep() {
    if(currentStep === 1){
        var select = document.getElementById("donations-input");
        
        var toys = document.getElementById("toys-form");
        var food = document.getElementById("food-form");
        var clothes = document.getElementById("clothes-form");
        var supply = document.getElementById("supply-form");
        var station = document.getElementById("stationary-form");
        var books = document.getElementById("book-form");
        var blood = document.getElementById("blood-form");

        var selectedValue = select.value;
        switch (selectedValue){
            case 'Toys':
                toys.style.display = 'block';
                food.style.display = 'none';
                clothes.style.display = 'none';
                supply.style.display = 'none';
                station.style.display = 'none';
                books.style.display = 'none';
                blood.style.display = 'none';
                break;
            case 'Food':
                toys.style.display = 'none';
                food.style.display = 'block';
                clothes.style.display = 'none';
                supply.style.display = 'none';
                station.style.display = 'none';
                books.style.display = 'none';
                blood.style.display = 'none';
                break;
            case 'Medical Supplies':
                toys.style.display = 'none';
                food.style.display = 'none';
                clothes.style.display = 'none';
                supply.style.display = 'block';
                station.style.display = 'none';
                books.style.display = 'none';
                blood.style.display = 'none';
                break;
            case 'School Supplies: Stationary':
                toys.style.display = 'none';
                food.style.display = 'none';
                clothes.style.display = 'none';
                supply.style.display = 'none';
                station.style.display = 'block';
                books.style.display = 'none';
                blood.style.display = 'none';
                break;
            case 'School Supplies: Books':
                toys.style.display = 'none';
                food.style.display = 'none';
                clothes.style.display = 'none';
                supply.style.display = 'none';
                station.style.display = 'none';
                books.style.display = 'block';
                blood.style.display = 'none';
                break;
            default:
                toys.style.display = 'none';
                food.style.display = 'none';
                clothes.style.display = 'block';
                supply.style.display = 'none';
                station.style.display = 'none';
                books.style.display = 'none';
                blood.style.display = 'none';
                break
        }
    }
    if (currentStep < 3) {
        currentStep++;
        updateProgressBar();
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateProgressBar();
        showStep(currentStep);
    }
}

function showStep(step) {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach((stepElement) => {
        if (stepElement.classList.contains('active')) {
            stepElement.style.display = 'none';
            setTimeout(() => {
                stepElement.classList.remove('active');
            }, 300); // Match the transition duration
        }
    });
    const stepToShow = document.getElementById(`step${step}`);
    stepToShow.style.display = 'block';
    stepToShow.classList.add('active');
}

function updateProgressBar() {
    const progressWidth = ((currentStep - 1) / 2) * 100;
    progressBar.querySelector('.progress').style.width = `${progressWidth}%`;
    // Remove existing circles
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach((circle) => circle.remove());
    // Create circles for each step
    for (let i = 1; i <= 3; i++) {
        const circle = document.createElement('div');
        circle.classList.add('progress-circle');
        circle.textContent = i;
        const circlePosition = (i - 1) * (100 / 2);
        circle.style.left = `${circlePosition}%`;
        progressBar.appendChild(circle);
    }
}

              // Initialize progress bar
updateProgressBar();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
});