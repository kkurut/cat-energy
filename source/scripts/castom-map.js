/* global ymaps */

ymaps.ready(() => {
  const myMap = new ymaps.Map('map', {
    center: [59.938631, 30.323037],
    zoom: 16,
    controls: [],
    searchControlProvider: 'yandex#search'
  });

  const iconImageHref = 'https://s3-alpha-sig.figma.com/img/a4c8/ba9e/0f1271ca019880ddca20a339944960cc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QNBg7LruNEn~nIRLgzUDa73gfAaTOQjP~sZzyDVXnjPmNvCSPw~cPVxHt9JjHm-AQ9biLBCvlryJ~r41xtSFW-s2cFUy1U4nQzp3TC7XvAHS8jy6a4WDDG~1mVM80tq4h8zjla2d7rz1crhqmd5TKgOlWvtQ7mFyPZWe524qdczqJ42yJWB9pExrxGXPoGpfdaaGCL6MlF9m~tt5WvqEpQ8Hp2qY7zWnkmasr86hAxcses5Lu5QYIlEjX8sSnxJRO0lOKh80YVIVOVZcj5k4bBYAAVKST6lpZqIuIRiUcwCpZOAYsjnoLeA7-rkMHNifFlyikR5SGrZ-6QFiUXKc6Q__';

  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
  }, {
    iconLayout: 'default#image',
    iconImageHref: iconImageHref,
    iconImageSize: [57, 53],
    iconImageOffset: [-19, -53]
  });

  myMap.geoObjects.add(myPlacemark);

  function updateMapCenter() {
    if (window.innerWidth < 1440) {
      myMap.setCenter([59.938631, 30.323037]); // Центральная позиция для маленьких экранов
    } else {
      myMap.setCenter([59.939020, 30.317791]); // Смещенная позиция для больших экранов
    }
  }

  function updateIconSize() {
    if (window.innerWidth >= 768) {
      myPlacemark.options.set({
        iconImageSize: [113, 106],
        iconImageOffset: [-56.5, -106]
      });
    } else {
      myPlacemark.options.set({
        iconImageSize: [57, 53],
        iconImageOffset: [-19, -53]
      });
    }
  }

  // Инициализация позиции и размеров иконки при загрузке страницы
  updateMapCenter();
  updateIconSize();

  // Добавление обработчика события изменения размера окна
  window.addEventListener('resize', () => {
    updateMapCenter();
    updateIconSize();
  });
});
