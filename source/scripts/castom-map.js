/* global ymaps */

ymaps.ready(() => {
  const myMap = new ymaps.Map('map', {
    center: [59.938631, 30.323037],
    zoom: 16,
    controls: [],
    searchControlProvider: 'yandex#search'
  });

  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../images/map-cat.png',
    iconImageSize: [113, 106],
    iconImageOffset: [-56.5, -106]
  });

  myMap.geoObjects.add(myPlacemark);

  function updateMapCenter() {
    if (window.innerWidth < 1440) {
      myMap.setCenter([59.938631, 30.323037]); // Центральная позиция для маленьких экранов
    } else {
      myMap.setCenter([59.939020, 30.317791]); // Смещенная позиция для больших экранов
    }
  }

  // Инициализация позиции при загрузке страницы
  updateMapCenter();

  // Добавление обработчика события изменения размера окна
  window.addEventListener('resize', updateMapCenter);
});
