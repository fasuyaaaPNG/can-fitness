document.addEventListener('DOMContentLoaded', function() {
    const profileTrainer = document.querySelector('.profileTrainer');
    let direction = 1; // 1 untuk scroll ke kanan, -1 untuk scroll ke kiri
    const step = 0.5;   // jumlah pixel yang di-scroll tiap interval
    const intervalDelay = 10; // delay dalam milidetik
  
    function autoScroll() {
      // Cek jika sudah mencapai ujung kanan dengan toleransi 1 pixel
      if (profileTrainer.scrollLeft + profileTrainer.clientWidth >= profileTrainer.scrollWidth - 1) {
        direction = -1;
      }
      // Cek jika sudah mencapai ujung kiri
      if (profileTrainer.scrollLeft <= 0) {
        direction = 1;
      }
      // Geser scroll berdasarkan arah dan step
      profileTrainer.scrollLeft += direction * step;
    }
  
    setInterval(autoScroll, intervalDelay);
  });
  