document.querySelector(".header-menu").onclick = function () {
  document.querySelector(".header-list-menu").classList.toggle("visible");
  if (window.innerWidth <= 990) {
    document.querySelector("html").classList.toggle("overflow-hidden");
  }
};

function showModalOverlay(el) {
  document.querySelector(el).classList.add("show");
}

function closeModalOverlay(el) {
  document.querySelector(el).classList.remove("show");
}

function dataSetInfo(e) {
  const data = e.dataset.product;
  const element = document.querySelector(`#product-${data}`);
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

// document.querySelector('.search').onclick = function () {
//   document.querySelector(".search_wrap").classList.toggle("collapse-search");
// }
