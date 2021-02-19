//Footer Date Data
const options1 = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options1);
const options2 = {year: 'numeric'};
document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', options2);

const today = new Date();
console.log(today);
        
const dayNumber = today.getDay();
console.log(dayNumber);