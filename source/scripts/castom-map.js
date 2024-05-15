/* eslint-disable */
ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [59.938631, 30.323037],
        zoom: 16,
        controls: [],
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Собственный значок метки",
        balloonContent: "Это красивая метка",
      },
      {
        iconLayout: "default#image",
        iconImageHref:
          "../images/map-cat.png",
        // Размеры метки.
        iconImageSize: [113, 106],
        iconImageOffset: [-56.5, -106],
      }
    );
  myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
});
