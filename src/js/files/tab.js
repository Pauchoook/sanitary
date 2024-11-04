export default function tab() {
  const buttonsTab = document.querySelectorAll(".btn-tab");
  const tabs = document.querySelectorAll(".tab");

  if (buttonsTab.length) {
    buttonsTab.forEach(btn => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".parent-tab");
        const tabId = btn.dataset.tab;
        const currentTab = parent.querySelector(`.tab[data-tab="${tabId}"]`);

        buttonsTab.forEach(b => b.classList.remove("active"));
        tabs.forEach(t => t.classList.remove("open"));

        currentTab.classList.add("open");
        btn.classList.add("active");
      });
    })
  }
}