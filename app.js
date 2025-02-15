document.addEventListener('DOMContentLoaded', function() {
    const profileTrainer = document.querySelector('.profileTrainer');
  
    function toggleCarousel() {
      if (window.innerWidth <= 480) {
        profileTrainer.classList.add('carousel-enabled');
      } else {
        profileTrainer.classList.remove('carousel-enabled');
      }
    }
    toggleCarousel();
    window.addEventListener('resize', toggleCarousel);
  });
  