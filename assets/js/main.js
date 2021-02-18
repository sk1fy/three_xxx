document.querySelector("body").onload = function () {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".mini-cart").style.opacity = "0";
    } else {
      document.querySelector(".mini-cart").style.opacity = "1";
    }
    prevScrollpos = currentScrollPos;
  };
};

document.querySelector(".header-menu").onclick = function () {
  document.querySelector(".header-list-menu").classList.toggle("visible");
  const e = document.querySelector(".header-menu");
  const menuOpen = e.querySelectorAll("img")[0];
  const menuClose = e.querySelectorAll("img")[1];
  if (menuOpen.className.match("active")) {
    menuOpen.classList.remove("active");
    menuClose.classList.add("active");
  } else if (menuClose.className.match("active")) {
    menuClose.classList.remove("active");
    menuOpen.classList.add("active");
  }

  if (window.innerWidth <= 990) {
    document.querySelector("html").classList.toggle("overflow-hidden");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
};

const cardWrapper = document.querySelector(".products-wrapper");
function showModalOverlay(el) {
  cardWrapper.querySelector(el).classList.add("show");
}

function closeModalOverlay(el) {
  cardWrapper.querySelector(el).classList.remove("show");
}

function dataSetInfo(e) {
  const data = e.dataset.product;
  const element = cardWrapper.querySelector(`#product-${data}`);
  element.classList.remove("closed");
  element.classList.toggle("fixed");
  setTimeout(function () {
    element.classList.toggle("anim");
  }, 300);
  document.querySelector("html").classList.toggle("overflow-hidden");
  if (!element.className.match("fixed")) {
    element.classList.add("closed");
    e.dataset.closed = true;
  }
}
