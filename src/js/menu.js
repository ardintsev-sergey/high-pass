window.addEventListener('DOMContentLoaded', function() {
  const headerNav =  document.querySelector('.header__nav');
  const logo = document.querySelector('.header__logo');
  const headerTop = document.querySelector('.header__top-container');
  const headerBottom = document.querySelector('.header__bottom-container');

  let headerNavInsert = function() {
    if (window.innerWidth > 992) {
      // headerTop.append(headerNav);
      logo.after(headerNav);
    } else {
      headerBottom.append(headerNav);
    }
  };

  const footerLeft =  document.querySelector('.footer__left');
  const footerTop = document.querySelector('.footer__top-container');
  const footerBottom = document.querySelector('.footer__bottom-container');

  let footerLeftInsert = function() {
    if (window.innerWidth > 576) {
      footerTop.prepend(footerLeft);
    } else {
      footerBottom.append(footerLeft);
    }
  };

  headerNavInsert();
  footerLeftInsert();
  window.addEventListener('resize', () => {
    headerNavInsert();
    footerLeftInsert();
  });
})
