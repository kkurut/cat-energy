ymaps.ready(()=>{let e=new ymaps.Map("map",{center:[59.938631,30.323037],zoom:16,controls:[],searchControlProvider:"yandex#search"}),a=new ymaps.Placemark(e.getCenter(),{hintContent:"\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0437\u043D\u0430\u0447\u043E\u043A \u043C\u0435\u0442\u043A\u0438",balloonContent:"\u042D\u0442\u043E \u043A\u0440\u0430\u0441\u0438\u0432\u0430\u044F \u043C\u0435\u0442\u043A\u0430"},{iconLayout:"default#image",iconImageHref:"../images/map-cat.png",iconImageSize:[113,106],iconImageOffset:[-56.5,-106]});e.geoObjects.add(a)});
