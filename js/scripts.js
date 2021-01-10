function currentDate(){
    let d = new Date();    
    document.getElementById('currentYear').textContent = d.getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
    }