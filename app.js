"use strict";
window.addEventListener("DOMContentLoaded", function () {
  var e = document.querySelector(".header__burger"),
    r = document.querySelector(".header__nav"),
    t = document.querySelector(".header__burger-close"),
    n = document.querySelector(".header__menu-tel");
  r.prepend(t), r.append(n);
  var o = function () {
      if (window.innerWidth < 576) {
        var n = gsap.timeline();
        n.fromTo(r, { x: -600 }, { x: 0, duration: 0.5 }).pause(),
          e.addEventListener("click", function () {
            r.classList.add("menu--open"), n.play();
          }),
          t.addEventListener("click", function () {
            n.reverse(),
              setTimeout(function () {
                r.classList.remove("menu--open");
              }, 500);
          });
      }
    },
    a = function () {
      window.innerWidth >= 576 && r.removeAttribute("style");
    },
    i = document.querySelector(".header__search"),
    d = document.querySelector(".header__search-btn"),
    c = document.querySelector(".header__search-form"),
    s = document.querySelector(".header__search-input-btn"),
    u = document.querySelector(".header__logo"),
    l =
      (document.querySelector(".header__top-container"),
      function () {
        var e = gsap.timeline();
        e.fromTo(c, { y: -30 }, { y: 15, duration: 0.5 }).pause(),
          d.addEventListener("click", function () {
            i.classList.add("search--active"),
              u.classList.add("logo--invisible"),
              e.play();
          }),
          s.addEventListener("click", function () {
            e.reverse(),
              setTimeout(function () {
                i.classList.remove("search--active"),
                  u.classList.remove("logo--invisible");
              }, 500);
          });
      });
  o(),
    l(),
    a(),
    window.addEventListener("resize", function () {
      o(), a(), l();
    });
}),
  document.addEventListener("DOMContentLoaded", function () {
    new JustValidate(".about__form", {
      errorFieldCssClass: "is-invalid",
      errorLabelCssClass: "is-label-invalid",
      errorLabelStyle: {},
    }).addField(".about-email", [
      { rule: "required", errorMessage: "Недопустимый формат" },
      { rule: "email", errorMessage: "Недопустимый формат" },
    ]),
      new JustValidate(".form", {
        errorFieldCssClass: "is-invalid",
        errorLabelCssClass: "is-label-invalid",
        errorLabelStyle: {},
      })
        .addField(".contacts-name", [
          { rule: "required", errorMessage: "Недопустимый формат" },
          {
            rule: "minLength",
            value: 2,
            errorMessage: "Введите не менее 2 букв",
          },
          {
            rule: "maxLength",
            value: 10,
            errorMessage: "Введите не более 10 букв",
          },
        ])
        .addField(".contacts-email", [
          { rule: "required", errorMessage: "Недопустимый формат" },
          { rule: "email", errorMessage: "Недопустимый формат" },
        ])
        .addField(".contacts-textarea", [
          { rule: "required", errorMessage: "Недопустимый формат" },
          {
            rule: "minLength",
            value: 2,
            errorMessage: "Введите не менее 2 букв",
          },
          {
            rule: "maxLength",
            value: 1e3,
            errorMessage: "Введите не более 10 букв",
          },
        ]);
  }),
  document.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector(".contacts__content-left-place"),
      r = document.querySelector(".contacts__cls-btn"),
      t = gsap.timeline();
    t.fromTo(e, { x: 0 }, { x: -700, duration: 0.5 }).pause(),
      ymaps.ready(function () {
        var n = new ymaps.Map("map", { center: [55.76, 37.62], zoom: 13 }),
          o = new ymaps.Placemark(
            [55.76953456898229, 37.63998549999998],
            {},
            {
              iconLayout: "default#image",
              iconImageHref: "../high-pass/img/contacts/marker.svg",
              iconImageSize: [12, 12],
              iconImageOffset: [-5, -38],
            }
          );
        n.geoObjects.add(o),
          o.events.add("click", function () {
            e.classList.add("map--active"), t.reverse();
          }),
          r.addEventListener("click", function () {
            t.play(),
              setTimeout(function () {
                e.classList.remove("map--active");
              }, 500);
          });
      });
  }),
  window.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector(".header__nav"),
      r = document.querySelector(".header__logo"),
      t =
        (document.querySelector(".header__top-container"),
        document.querySelector(".header__bottom-container")),
      n = function () {
        window.innerWidth > 992 ? r.after(e) : t.append(e);
      },
      o = document.querySelector(".footer__left"),
      a = document.querySelector(".footer__top-container"),
      i = document.querySelector(".footer__bottom-container"),
      d = function () {
        window.innerWidth > 576 ? a.prepend(o) : i.append(o);
      };
    n(),
      d(),
      window.addEventListener("resize", function () {
        n(), d();
      });
  });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi5qcyIsImZvcm0uanMiLCJtYXAuanMiLCJtZW51LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJidXJnZXJCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiY2xvc2VCdG4iLCJ0ZWwiLCJwcmVwZW5kIiwiYXBwZW5kIiwiYnVyZ2VyQ2hlY2siLCJpbm5lcldpZHRoIiwidGwiLCJnc2FwIiwidGltZWxpbmUiLCJmcm9tVG8iLCJ4IiwiZHVyYXRpb24iLCJwYXVzZSIsImNsYXNzTGlzdCIsImFkZCIsInBsYXkiLCJyZXZlcnNlIiwic2V0VGltZW91dCIsInJlbW92ZSIsIm1lbnVDaGVjayIsInJlbW92ZUF0dHJpYnV0ZSIsInNlYXJjaCIsInNlYXJjaEJ0biIsInNlYXJjaEZvcm0iLCJpbnB1dEJ0biIsImxvZ28iLCJkcm9wU2VhcmNoIiwidGxTZWFyY2giLCJ5IiwiSnVzdFZhbGlkYXRlIiwiZXJyb3JGaWVsZENzc0NsYXNzIiwiZXJyb3JMYWJlbENzc0NsYXNzIiwiZXJyb3JMYWJlbFN0eWxlIiwiYWRkRmllbGQiLCJydWxlIiwiZXJyb3JNZXNzYWdlIiwidmFsdWUiLCJhZGRyIiwibWFwQ2xvc2VCdG4iLCJ0bE1hcCIsInltYXBzIiwicmVhZHkiLCJteU1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJteVBsYWNlbWFyayIsIlBsYWNlbWFyayIsImljb25MYXlvdXQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImdlb09iamVjdHMiLCJldmVudHMiLCJoZWFkZXJOYXYiLCJoZWFkZXJCb3R0b20iLCJoZWFkZXJOYXZJbnNlcnQiLCJhZnRlciIsImZvb3RlckxlZnQiLCJmb290ZXJUb3AiLCJmb290ZXJCb3R0b20iLCJmb290ZXJMZWZ0SW5zZXJ0Il0sIm1hcHBpbmdzIjoiYUFBQUEsT0FBT0MsaUJBQWlCLG9CQUFvQixXQUMxQyxJQUFN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c3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICBjb25zdCBidXJnZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXInKTtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2Jyk7XHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXItY2xvc2UnKTtcclxuICBjb25zdCB0ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LXRlbCcpXHJcbiAgbWVudS5wcmVwZW5kKGNsb3NlQnRuKTtcclxuICBtZW51LmFwcGVuZCh0ZWwpO1xyXG5cclxuICBsZXQgYnVyZ2VyQ2hlY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1NzYpIHtcclxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xyXG4gICAgICB0bC5mcm9tVG8obWVudSwge3g6IC02MDB9LCB7eDogMCwgZHVyYXRpb246IDAuNX0pXHJcbiAgICAgICAgLnBhdXNlKCk7XHJcblxyXG4gICAgICBidXJnZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LS1vcGVuJyk7XHJcbiAgICAgICAgdGwucGxheSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRsLnJldmVyc2UoKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1vcGVuXCIpO1xyXG4gICAgICAgIH0sIDUwMClcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBtZW51Q2hlY2sgPSAoKSA9PiB7XHJcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+PSA1NzYpIHtcclxuICAgICAgbWVudS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaCcpO1xyXG4gIGNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaC1idG4nKTtcclxuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLWZvcm0nKTtcclxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaC1pbnB1dC1idG4nKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nbycpO1xyXG4gIGNvbnN0IGhlYWRlclRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RvcC1jb250YWluZXInKTtcclxuXHJcbiAgbGV0IGRyb3BTZWFyY2ggPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCB0bFNlYXJjaCA9IGdzYXAudGltZWxpbmUoKTtcclxuICAgIHRsU2VhcmNoLmZyb21UbyhzZWFyY2hGb3JtLCB7eTogLTMwfSwge3k6IDE1LCBkdXJhdGlvbjogMC41fSlcclxuICAgICAgLnBhdXNlKCk7XHJcbiAgICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHNlYXJjaC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtLWFjdGl2ZScpXHJcbiAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nby0taW52aXNpYmxlJylcclxuICAgICAgdGxTZWFyY2gucGxheSgpO1xyXG4gICAgfSlcclxuXHJcbiAgICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGxTZWFyY2gucmV2ZXJzZSgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnc2VhcmNoLS1hY3RpdmUnKTtcclxuICAgICAgICBsb2dvLmNsYXNzTGlzdC5yZW1vdmUoJ2xvZ28tLWludmlzaWJsZScpXHJcbiAgICAgIH0sIDUwMClcclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgYnVyZ2VyQ2hlY2soKTtcclxuICBkcm9wU2VhcmNoKCk7XHJcbiAgbWVudUNoZWNrKClcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgYnVyZ2VyQ2hlY2soKTtcclxuICAgIG1lbnVDaGVjaygpXHJcbiAgICBkcm9wU2VhcmNoKCk7XHJcbiAgfSk7XHJcbn0pXHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICBjb25zdCBhYm91dEZvcm1WYWxpZGF0ZSA9IG5ldyBKdXN0VmFsaWRhdGUoXCIuYWJvdXRfX2Zvcm1cIiwge1xyXG4gICAgZXJyb3JGaWVsZENzc0NsYXNzOiAnaXMtaW52YWxpZCcsXHJcbiAgICBlcnJvckxhYmVsQ3NzQ2xhc3M6ICdpcy1sYWJlbC1pbnZhbGlkJyxcclxuICAgIGVycm9yTGFiZWxTdHlsZToge30sXHJcbiAgfSk7XHJcbiAgYWJvdXRGb3JtVmFsaWRhdGVcclxuICAgIC5hZGRGaWVsZChcIi5hYm91dC1lbWFpbFwiLCBbXHJcbiAgICAgIHtcclxuICAgICAgICBydWxlOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBcItCd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YJcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJ1bGU6IFwiZW1haWxcIixcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRglwiLFxyXG4gICAgICB9LFxyXG4gICAgXSlcclxuXHJcbiAgY29uc3QgY29udGFjdHNGb3JtVmFsaWRhdGUgPSBuZXcgSnVzdFZhbGlkYXRlKFwiLmZvcm1cIiwge1xyXG4gICAgZXJyb3JGaWVsZENzc0NsYXNzOiAnaXMtaW52YWxpZCcsXHJcbiAgICBlcnJvckxhYmVsQ3NzQ2xhc3M6ICdpcy1sYWJlbC1pbnZhbGlkJyxcclxuICAgIGVycm9yTGFiZWxTdHlsZToge30sXHJcbiAgfSk7XHJcbiAgY29udGFjdHNGb3JtVmFsaWRhdGVcclxuICAgIC5hZGRGaWVsZChcIi5jb250YWN0cy1uYW1lXCIsIFtcclxuICAgICAge1xyXG4gICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBydWxlOiBcIm1pbkxlbmd0aFwiLFxyXG4gICAgICAgIHZhbHVlOiAyLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9CS0LLQtdC00LjRgtC1INC90LUg0LzQtdC90LXQtSAyINCx0YPQutCyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJ1bGU6IFwibWF4TGVuZ3RoXCIsXHJcbiAgICAgICAgdmFsdWU6IDEwLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9CS0LLQtdC00LjRgtC1INC90LUg0LHQvtC70LXQtSAxMCDQsdGD0LrQsicsXHJcbiAgICAgIH0sXHJcbiAgICBdKVxyXG4gICAgLmFkZEZpZWxkKFwiLmNvbnRhY3RzLWVtYWlsXCIsIFtcclxuICAgICAge1xyXG4gICAgICAgIHJ1bGU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICBlcnJvck1lc3NhZ2U6IFwi0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRglwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcnVsZTogXCJlbWFpbFwiLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogXCLQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdKVxyXG4gICAgLmFkZEZpZWxkKFwiLmNvbnRhY3RzLXRleHRhcmVhXCIsIFtcclxuICAgICAge1xyXG4gICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBydWxlOiBcIm1pbkxlbmd0aFwiLFxyXG4gICAgICAgIHZhbHVlOiAyLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9CS0LLQtdC00LjRgtC1INC90LUg0LzQtdC90LXQtSAyINCx0YPQutCyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJ1bGU6IFwibWF4TGVuZ3RoXCIsXHJcbiAgICAgICAgdmFsdWU6IDEwMDAsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAn0JLQstC10LTQuNGC0LUg0L3QtSDQsdC+0LvQtdC1IDEwINCx0YPQutCyJyxcclxuICAgICAgfSxcclxuICAgIF0pO1xyXG59KVxyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgYWRkciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0c19fY29udGVudC1sZWZ0LXBsYWNlJyk7XHJcbiAgY29uc3QgbWFwQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHNfX2Nscy1idG4nKTtcclxuICBsZXQgdGxNYXAgPSBnc2FwLnRpbWVsaW5lKCk7XHJcbiAgdGxNYXAuZnJvbVRvKGFkZHIsIHt4OiAwfSwge3g6IC03MDAsIGR1cmF0aW9uOiAwLjV9KVxyXG4gICAgLnBhdXNlKCk7XHJcblxyXG4vLyAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG4gICAgICAvLyDQpNGD0L3QutGG0LjRjyB5bWFwcy5yZWFkeSgpINCx0YPQtNC10YIg0LLRi9C30LLQsNC90LAsINC60L7Qs9C00LBcclxuICAgICAgLy8g0LfQsNCz0YDRg9C30Y/RgtGB0Y8g0LLRgdC1INC60L7QvNC/0L7QvdC10L3RgtGLIEFQSSwg0LAg0YLQsNC60LbQtSDQutC+0LPQtNCwINCx0YPQtNC10YIg0LPQvtGC0L7QstC+IERPTS3QtNC10YDQtdCy0L4uXHJcbiAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xyXG4gICAgICBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAgICAgICAvLyDQodC+0LfQtNCw0L3QuNC1INC60LDRgNGC0YsuXHJcbiAgICAgICAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuICAgICAgICAgICAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LAg0LrQsNGA0YLRiy5cclxuICAgICAgICAgICAgICAvLyDQn9C+0YDRj9C00L7QuiDQv9C+INGD0LzQvtC70YfQsNC90LjRjjogwqvRiNC40YDQvtGC0LAsINC00L7Qu9Cz0L7RgtCwwrsuXHJcbiAgICAgICAgICAgICAgLy8g0KfRgtC+0LHRiyDQvdC1INC+0L/RgNC10LTQtdC70Y/RgtGMINC60L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsCDQutCw0YDRgtGLINCy0YDRg9GH0L3Rg9GOLFxyXG4gICAgICAgICAgICAgIC8vINCy0L7RgdC/0L7Qu9GM0LfRg9C50YLQtdGB0Ywg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtC8INCe0L/RgNC10LTQtdC70LXQvdC40LUg0LrQvtC+0YDQtNC40L3QsNGCLlxyXG4gICAgICAgICAgICAgIC8vIGNlbnRlcjogWzU1Ljc1OTA2MTk5NTg5NjAzLDM3LjY0MTQ5NTAyNTQzNjMwNl0sXHJcbiAgICAgICAgICAgICAgLy8gWzU1Ljc2OTUzNDU2ODk4MjI5LDM3LjYzOTk4NTQ5OTk5OTk4XVxyXG4gICAgICAgICAgICAgIGNlbnRlcjogWzU1Ljc2LCAzNy42Ml0sXHJcbiAgICAgICAgICAgICAgLy8g0KPRgNC+0LLQtdC90Ywg0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNGPLiDQlNC+0L/Rg9GB0YLQuNC80YvQtSDQt9C90LDRh9C10L3QuNGPOlxyXG4gICAgICAgICAgICAgIC8vINC+0YIgMCAo0LLQtdGB0Ywg0LzQuNGAKSDQtNC+IDE5LlxyXG4gICAgICAgICAgICAgIHpvb206IDEzXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHZhciBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc2OTUzNDU2ODk4MjI5LDM3LjYzOTk4NTQ5OTk5OTk4XSwge30sIHtcclxuICAgICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxyXG4gICAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxyXG4gICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcuLi9pbWcvY29udGFjdHMvbWFya2VyLnN2ZycsXHJcbiAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMTIsIDEyXSxcclxuICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cclxuICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy01LCAtMzhdXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcclxuICAgICAgICAgIG15UGxhY2VtYXJrLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBhZGRyLmNsYXNzTGlzdC5hZGQoJ21hcC0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHRsTWFwLnJldmVyc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBtYXBDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGxNYXAucGxheSgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBhZGRyLmNsYXNzTGlzdC5yZW1vdmUoJ21hcC0tYWN0aXZlJyk7XHJcbiAgICAgIH0sIDUwMClcclxuICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4iLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGhlYWRlck5hdiA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYnKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbG9nbycpO1xyXG4gIGNvbnN0IGhlYWRlclRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RvcC1jb250YWluZXInKTtcclxuICBjb25zdCBoZWFkZXJCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19ib3R0b20tY29udGFpbmVyJyk7XHJcblxyXG4gIGxldCBoZWFkZXJOYXZJbnNlcnQgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5Mikge1xyXG4gICAgICAvLyBoZWFkZXJUb3AuYXBwZW5kKGhlYWRlck5hdik7XHJcbiAgICAgIGxvZ28uYWZ0ZXIoaGVhZGVyTmF2KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlckJvdHRvbS5hcHBlbmQoaGVhZGVyTmF2KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmb290ZXJMZWZ0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX2xlZnQnKTtcclxuICBjb25zdCBmb290ZXJUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyX190b3AtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgZm9vdGVyQm90dG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlcl9fYm90dG9tLWNvbnRhaW5lcicpO1xyXG5cclxuICBsZXQgZm9vdGVyTGVmdEluc2VydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNTc2KSB7XHJcbiAgICAgIGZvb3RlclRvcC5wcmVwZW5kKGZvb3RlckxlZnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9vdGVyQm90dG9tLmFwcGVuZChmb290ZXJMZWZ0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoZWFkZXJOYXZJbnNlcnQoKTtcclxuICBmb290ZXJMZWZ0SW5zZXJ0KCk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgIGhlYWRlck5hdkluc2VydCgpO1xyXG4gICAgZm9vdGVyTGVmdEluc2VydCgpO1xyXG4gIH0pO1xyXG59KVxyXG4iXX0=
