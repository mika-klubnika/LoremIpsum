/* global noUiSlider:readonly */
export const initRangeSlider = () => {
  const rangeSlider = document.querySelector('.form__range-slider');

  if (!rangeSlider) {
    return;
  }

  const rangeValue = document.querySelector('.form__range-value');
  const rangeInput = document.querySelector('.form__range-input');

  noUiSlider.create(rangeSlider, {
    range: {
      'min': [0],
      'max': [100],
    },
    start: [75],
    step: 1,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    rangeValue.innerHTML = values[handle] + '%';
    rangeInput.value = values[handle];
  });
};
