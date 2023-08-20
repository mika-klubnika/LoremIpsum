export const initSelect = () => {
  const selectBlock = document.querySelector('.form__select');

  if (!selectBlock) {
    return;
  }

  const selectBtn = document.querySelector('.form__select-btn');
  const selectList = document.querySelector('.form__select-btn');

  selectBtn.addEventListener('click', () => {
    selectBlock.classList.toggle('is-open');
  });
};
