document.addEventListener('DOMContentLoaded', function() {
  const addr = document.querySelector('.contacts__content-left-place');
  const mapCloseBtn = document.querySelector('.contacts__cls-btn');
  let tlMap = gsap.timeline();
  tlMap.fromTo(addr, {x: 0}, {x: -700, duration: 0.5})
    .pause();

//  type="text/javascript">
      // Функция ymaps.ready() будет вызвана, когда
      // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
      ymaps.ready(init);
      function init(){
          // Создание карты.
          var myMap = new ymaps.Map("map", {
              // Координаты центра карты.
              // Порядок по умолчанию: «широта, долгота».
              // Чтобы не определять координаты центра карты вручную,
              // воспользуйтесь инструментом Определение координат.
              // center: [55.75906199589603,37.641495025436306],
              // [55.76953456898229,37.63998549999998]
              center: [55.76, 37.62],
              // Уровень масштабирования. Допустимые значения:
              // от 0 (весь мир) до 19.
              zoom: 13
          });
          var myPlacemark = new ymaps.Placemark([55.76953456898229,37.63998549999998], {}, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: '../img/contacts/marker.svg',
              // Размеры метки.
              iconImageSize: [12, 12],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          });
          myMap.geoObjects.add(myPlacemark);
          myPlacemark.events.add('click', function () {
            addr.classList.add('map--active');
            tlMap.reverse();
        });

    mapCloseBtn.addEventListener('click', () => {
      tlMap.play();
      setTimeout(() => {
        addr.classList.remove('map--active');
      }, 500)
    })
        }
      })
