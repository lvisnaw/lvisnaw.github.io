function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

const options1 = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options1);
const options2 = {year: 'numeric'};
document.getElementById('currentYear').textContent = new Date().toLocaleDateString('en-US', options2);

