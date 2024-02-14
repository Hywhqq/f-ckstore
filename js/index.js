

const init = () => {
  const productElement = document.querySelector('.section--product');
  const collections = document.querySelectorAll('.section--collection');
  const heroSection = document.querySelector('.section-hero');

  if (heroSection) {
    const swiperEl = heroSection.querySelector('.swiper');
    const swiper = new Swiper(swiperEL, {
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    
  }

  if (collections.length > 0) {
    collections.forEach((collection) => {
      const swiperEl = collection.querySelector('.swiper');

      const swiper = new Swiper(swiperEl, {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      });
    })
  }

  if (productElement) {
    const gallery = productElement.querySelector('.gallery');

    const thumbnailImages = gallery.querySelectorAll('.thumbnail img');
    const previewImage = gallery.querySelector('.preview img');

    thumbnailImages.forEach((item) => {
      item.addEventListener('click', () => {
        previewImage.src = item.src;
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", init);