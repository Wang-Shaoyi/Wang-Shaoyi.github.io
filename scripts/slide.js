let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images .project-image');
    const totalSlides = slides.length;
  
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
  
    // 确保每次移动 100% 的宽度
    const offset = -currentIndex * 100; 
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// 初始化第一张图片
showSlide(currentIndex);
