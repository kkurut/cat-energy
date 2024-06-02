// Когда весь документ загружен, выполнится эта функция
document.addEventListener('DOMContentLoaded', () => {
  // Получаем основные элементы на странице
  const container = document.querySelector('.before-after'); // Контейнер для слайдера
  const beforeImage = document.querySelector('.before-after__before'); // Изображение "до"
  const afterImage = document.querySelector('.before-after__after'); // Изображение "после"
  const slider = document.querySelector('.before-after__button'); // Ползунок
  const sliderWrapper = document.querySelector('.before-after__button-wrapper'); // Обертка для ползунка

  // Переменная для отслеживания, перемещает ли пользователь ползунок
  let isDragging = false;

  // Функция для установки позиции ползунка
  function setSliderPosition(x) {
    // Получаем размеры и положение контейнера
    const rect = container.getBoundingClientRect();
    // Вычисляем, сколько пикселей от левого края контейнера
    const offsetX = Math.max(0, Math.min(x - rect.left, rect.width));
    // Преобразуем пиксели в проценты
    const percentage = (offsetX / rect.width) * 100;

    // Устанавливаем стили, чтобы показать нужные части изображений
    beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    afterImage.style.clipPath = `inset(0 0 0 ${percentage}%)`;
    sliderWrapper.style.left = `${percentage}%`;
  }

  // Когда пользователь нажимает на ползунок
  slider.addEventListener('mousedown', () => {
    isDragging = true;
  });

  // Когда пользователь отпускает кнопку мыши
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Когда пользователь перемещает мышь
  document.addEventListener('mousemove', (event) => {
    if (isDragging) {
      setSliderPosition(event.clientX);
    }
  });

  // Когда пользователь касается ползунка на сенсорном устройстве
  slider.addEventListener('touchstart', () => {
    isDragging = true;
  });

  // Когда пользователь отпускает палец на сенсорном устройстве
  document.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Когда пользователь перемещает палец на сенсорном устройстве
  document.addEventListener('touchmove', (event) => {
    if (isDragging) {
      const touch = event.touches[0];
      setSliderPosition(touch.clientX);
    }
  });

  // Устанавливаем начальную позицию ползунка по центру, когда страница загружена
  window.addEventListener('load', () => {
    const rect = container.getBoundingClientRect();
    const initialPosition = rect.left + rect.width / 2;
    setSliderPosition(initialPosition);
  });
});
