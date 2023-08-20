/* globals Swiper */
export const initDescriptionSlider = () => {

  const descriptionSlider = document.querySelector('.description');

  if (!descriptionSlider) {
    return;
  }

  const swiper = new Swiper(descriptionSlider, {
    watchOverflow: true,
    roundLengths: true,
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 30,
  });
};
