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
    iconImageHref: 'https://s3-alpha-sig.figma.com/img/a4c8/ba9e/0f1271ca019880ddca20a339944960cc?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zx2d~IMgz8LMApmj5je2Kxm7Zm4l1zDITISVhl7dx-wW-HYBjr6lAeBlrjO6Hp8c3gN2J3IOoawzxcuV8wXPXf5YqsH4yZ3R0EQuMfG5Q3-eX9UFY-of77FjOX0l4EJGz~LKYvCdvof-Xjj~W5DehiHjoOQ9UAtZOvlM0sYY2bzV4UFIdUyMgpaMMo2CfLzWd5O31iub8awk8EPRaIokX2p1S8OIe8XXIfJynVRr1tn0PvtHyCFuAU85TWzpauefq9ieMkqqCTFIH1kIdLy0mECM1dmB1ai7~A2sS21yQxabEs1PCzb02is35ij648foGRUCRuDtg~MT44MbnhBx7w__',
    iconImageSize: [113, 106],
    iconImageOffset: [-56.5, -106]
  });

  myMap.geoObjects.add(myPlacemark);
});
