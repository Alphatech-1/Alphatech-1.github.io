const galleryItems = document.querySelectorAll('.gallery__item');

galleryItems.forEach(item => {
  const closeButton = item.querySelector('.close-button');
  const descriptionOverlay = item.querySelector('.description-overlay');

  closeButton.addEventListener('click', () => {
    descriptionOverlay.style.opacity = 0;
    descriptionOverlay.style.visibility = 'hidden';
  });
});
