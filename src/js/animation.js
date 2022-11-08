window.addEventListener("DOMContentLoaded", function() {
  const burgerBtn = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__nav');
  const closeBtn = document.querySelector('.header__burger-close');
  const tel = document.querySelector('.header__menu-tel')
  menu.prepend(closeBtn);
  menu.append(tel);

  let burgerCheck = () => {
    if (window.innerWidth < 576) {
      let tl = gsap.timeline();
      tl.fromTo(menu, {x: -600}, {x: 0, duration: 0.5})
        .pause();

      burgerBtn.addEventListener('click', () => {
        menu.classList.add('menu--open');
        tl.play();
      });

      closeBtn.addEventListener('click', () => {
        tl.reverse();
          setTimeout(() => {
            menu.classList.remove("menu--open");
        }, 500)
      })
    }
  }

  let menuCheck = () => {
    if(window.innerWidth >= 576) {
      menu.removeAttribute('style')
    }
  }

  const search = document.querySelector('.header__search');
  const searchBtn = document.querySelector('.header__search-btn');
  const searchForm = document.querySelector('.header__search-form');
  const inputBtn = document.querySelector('.header__search-input-btn');
  const logo = document.querySelector('.header__logo');
  const headerTop = document.querySelector('.header__top-container');

  let dropSearch = function() {
    let tlSearch = gsap.timeline();
    tlSearch.fromTo(searchForm, {y: -30}, {y: 15, duration: 0.5})
      .pause();
    searchBtn.addEventListener('click', () => {
      search.classList.add('search--active')
      logo.classList.add('logo--invisible')
      tlSearch.play();
    })

    inputBtn.addEventListener('click', () => {
      tlSearch.reverse();
      setTimeout(() => {
        search.classList.remove('search--active');
        logo.classList.remove('logo--invisible')
      }, 500)
    })

  }

  burgerCheck();
  dropSearch();
  menuCheck()
  window.addEventListener('resize', () => {
    burgerCheck();
    menuCheck()
    dropSearch();
  });
})
