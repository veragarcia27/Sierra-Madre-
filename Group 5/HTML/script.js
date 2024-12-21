        // Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const slides = document.querySelectorAll('.slide');
      const videos = document.querySelectorAll('.attractionvideo');
      const nextBtn = document.getElementById('next');
      const prevBtn = document.getElementById('prev');
      const dots = document.querySelectorAll('.dot');
      let currentSlide = 0;

      function showSlide(index) {
          slides.forEach((slide, i) => {
              slide.classList.toggle('active', i === index);
          });
          videos.forEach((video, i) => {
              video.classList.toggle('active', i === index);
              if (i === index) {
                  video.play();
              } else {
                  video.pause();
              }
          });
          dots.forEach((dot, i) => {
              dot.classList.toggle('active', i === index);
          });
      }

      nextBtn.addEventListener('click', () => {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
      });

      prevBtn.addEventListener('click', () => {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
      });

      dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
              currentSlide = index;
              showSlide(currentSlide);
          });
      });

      // Initialize the first slide and video as active
      showSlide(currentSlide);

