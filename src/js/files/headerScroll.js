export default function headerScroll() {
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", scrolling);

    function scrolling() {
      if (window.scrollY > header.clientHeight) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    }
  }
}
