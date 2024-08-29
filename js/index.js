function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImage = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const progress = bar.getAttribute("data-progress");
          bar.style.width = progress + "%";
          observer.unobserve(bar); // Останавливаем наблюдение за элементом после того, как анимация началась
        }
      });
    },
    {
      threshold: 0.5, // Запускаем анимацию, когда 50% элемента становятся видимыми
    }
  );

  progressBars.forEach((bar) => {
    observer.observe(bar);
  });
});

// burger-menu

const burgerMenu = document.querySelector(".burger-menu");
const menuModal = document.querySelector(".menu-modal");

burgerMenu.addEventListener("click", () => {
  menuModal.style.display =
    menuModal.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!burgerMenu.contains(e.target) && !menuModal.contains(e.target)) {
    menuModal.style.display = "none";
  }
});
