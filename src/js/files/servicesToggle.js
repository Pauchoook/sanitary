import { handleBurgerClose } from "./burger.js";

export default function servicesToggle() {
  const services = document.querySelector("#services");
  if (services) {
    const btnServices = document.querySelector("#btn-services");
    const overlay = document.querySelector("#services-overlay");
    const header = document.querySelector(".header");
    const btnClose = document.querySelector("#services-close");

    const burger = document.querySelector("#burger");

    btnClose.addEventListener("click", closeServices);


    btnServices.addEventListener("click", () => {
      if (!services.classList.contains("open")) {
        if (burger.classList.contains("open")) handleBurgerClose();

        services.classList.add("open");
        overlay.classList.add("active");
        document.body.classList.add("body-hidden");
        if (window.matchMedia("(min-width: 993px)").matches) {
          header.classList.add("active");
        }

        overlay.addEventListener("click", closeServices);
      } else {
        closeServices();
      }
    })

    function closeServices() {
      services.classList.remove("open");
      overlay.classList.remove("active");
      document.body.classList.remove("body-hidden");

      if (window.scrollY < header.clientHeight) {
        header.classList.remove("active");
      }

      return overlay.removeEventListener("click", closeServices)
    } 
  }
}