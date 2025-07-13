const boneca = document.getElementById('boneca');
let isDragging = false;
let startX;

boneca.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    boneca.style.cursor = "grabbing";
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    boneca.style.transform = `rotate(${deltaX * 0.2}deg)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    boneca.style.cursor = "grab";
    boneca.style.transform = 'rotate(0deg)';
});