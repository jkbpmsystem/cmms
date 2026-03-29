function openModal(content) {
  const modal = document.getElementById("globalModal");
  const detail = document.getElementById("modalDetail");

  detail.innerHTML = content;
  modal.style.display = "block";

  // activate tab (IMPORTANT)
  initTabs();
}

function closeModal() {
  document.getElementById("globalModal").style.display = "none";
}

function initTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {

      document.querySelectorAll(".tab-btn")
        .forEach(b => b.classList.remove("active"));

      document.querySelectorAll(".tab-content")
        .forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab)
        .classList.add("active");
    });
  });
}
