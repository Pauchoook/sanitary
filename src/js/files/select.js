export default function select() {
  const buttonsSelect = document.querySelectorAll(".select__btn");
  const selects = document.querySelectorAll(".select");

  if (buttonsSelect.length) {
    buttonsSelect.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const currentSelect = btn.closest(".select");

        if (currentSelect.classList.contains("open")) {
          closeSelect();
        } else {
          const input = currentSelect.querySelector(".select__input");
          const title = currentSelect.querySelector(".select__title");

          currentSelect.addEventListener("click", (e) => {
            if (e.target.classList.contains("select__item")) {
              title.textContent = e.target.textContent;
              input.value = e.target.textContent;
              closeSelect();
            }
          })

          selects.forEach(s => s.classList.remove("open"));
          currentSelect.classList.add("open");

          document.body.addEventListener("click", closeSelect);
        }
      })
    })

    function closeSelect() {
      const currentSelect = document.querySelector(".select.open");

      if (currentSelect) currentSelect.classList.remove("open");
      return document.body.removeEventListener("click", closeSelect);
    }
  }
}