export default function burger() {
  const burger = document.querySelector("#burger");
  const burgerOpen = document.querySelector("#burger-open");
  const burgerClose = document.querySelector("#burger-close");
  const burgerOverlay = document.querySelector("#burger-overlay");
  if (burger) {
    burgerOpen.addEventListener("click", (e) => {
      e.stopPropagation();

      if (!burger.classList.contains("open")) {
        burger.classList.add("open");
        burger.addEventListener("click", (e) => e.stopPropagation());
        burgerOpen.classList.add("active");
        document.body.classList.add("body-hidden");
        burgerOverlay.classList.add("active");

        burgerOverlay.addEventListener("click", handleBurgerClose);
      } else {
        handleBurgerClose();
      }
    });

    burgerClose.addEventListener("click", handleBurgerClose);
  }
}
export function handleBurgerClose() {
  const burger = document.querySelector("#burger");
  const burgerOverlay = document.querySelector("#burger-overlay");

  burger.classList.remove("open");
  document.body.classList.remove("body-hidden");
  burgerOverlay.classList.remove("active");

  return burgerOverlay.removeEventListener("click", handleBurgerClose);
}
