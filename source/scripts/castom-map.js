/* global ymaps */

ymaps.ready(() => {
  const myMap = new ymaps.Map('map', {
    center: [59.938631, 30.323037],
    zoom: 16,
    controls: [],
    searchControlProvider: 'yandex#search'
  });

  const iconImageHref = '../images/map-cat.png';

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
