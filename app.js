// document.addEventListener('DOMContentLoaded', function() {
//     const profileTrainer = document.querySelector('.profileTrainer');
//     let direction = 1; // 1 untuk scroll ke kanan, -1 untuk scroll ke kiri
//     const step = 1;    // gunakan 1 pixel per interval
//     const intervalDelay = 10; // delay dalam milidetik
  
//     function autoScroll() {
//       // Debug: tampilkan nilai scroll saat ini
//       console.log(
//         'scrollLeft:', profileTrainer.scrollLeft, 
//         'clientWidth:', profileTrainer.clientWidth, 
//         'scrollWidth:', profileTrainer.scrollWidth
//       );
      
//       // Cek jika sudah mencapai ujung kanan dengan toleransi 2 pixel
//       if (profileTrainer.scrollLeft + profileTrainer.clientWidth >= profileTrainer.scrollWidth - 2) {
//         direction = -1;
//       }
//       // Cek jika sudah mencapai ujung kiri
//       if (profileTrainer.scrollLeft <= 0) {
//         direction = 1;
//       }
//       // Geser scroll berdasarkan arah dan step
//       profileTrainer.scrollLeft += direction * step;
//     }
  
//     setInterval(autoScroll, intervalDelay);
//   });
  