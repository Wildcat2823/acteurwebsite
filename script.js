const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

let currentIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index; // Sla de huidige index op
        modal.style.display = 'block';
        modalImg.src = item.src;
    });
});

function changeImage(direction) {
    currentIndex += direction;

    // Zorg ervoor dat de index binnen de grenzen blijft
    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1; // Ga naar de laatste afbeelding
    } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0; // Ga naar de eerste afbeelding
    }

    modalImg.src = galleryItems[currentIndex].src; // Update de afbeelding
}

function closeModal() {
    modal.style.display = 'none';
}
