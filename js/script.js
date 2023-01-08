let tasbeh__button = document.querySelector(".tasbeh__button");
let tasbeh__reset = document.querySelector(".tasbeh__reset");
let today__count = document.querySelector("#todayCount");
let AllTime__count = document.querySelector("#AllTimeCount");
localStorage.getItem("todayCount") || localStorage.setItem("todayCount", 0);
let TodayCount = localStorage.getItem("todayCount");

localStorage.getItem("AllTimeCount") || localStorage.setItem("AllTimeCount", 0);
let AllTimeCount = localStorage.getItem("AllTimeCount");

let isCount = localStorage.getItem("count");
let count = 0;
isCount ? (count = isCount) : localStorage.setItem("count", 0);

count = localStorage.getItem("count");

tasbeh__button.textContent = localStorage.getItem("count");
today__count.textContent = `${TodayCount} ta`;
AllTime__count.textContent = `${AllTimeCount} ta`;
tasbeh__button.addEventListener("click", () => {
  if (count > 32) {
    count = 0;
  }
  count++;
  localStorage.setItem("count", count);
  tasbeh__button.textContent = localStorage.getItem("count");

  TodayCount++;
  localStorage.setItem("todayCount", TodayCount);
  today__count.textContent = `${TodayCount} ta`;

  AllTimeCount++;
  localStorage.setItem("AllTimeCount", AllTimeCount);
  AllTime__count.textContent = `${AllTimeCount} ta`;
});

tasbeh__reset.addEventListener("click", () => {
  let reset = confirm(
    "Bugungi Tasbeh Sonini Qaytadan Boshlashni xohlaysizmi ?"
  );
  if (reset) {
    localStorage.setItem("todayCount", 0);
    localStorage.setItem("count", 0);
    TodayCount = 0;
    count = 0;
    today__count.textContent = `${TodayCount} ta`;
    tasbeh__button.textContent = count;
  }
});

// modal --------------

let warning__modal = document.querySelector(".warning__modal");
let warning__modal_close = document.querySelector("#x-mark");
let isModalHide = true;
const openModal = () => {
  setTimeout(() => {
    warning__modal.classList.toggle("action__waring");
    isModalHide = false;
  }, 2000);
};

openModal();
warning__modal_close.addEventListener("click", () => {
  warning__modal.classList.toggle("action__waring");
  isModalHide = true;
});
window.addEventListener("click", () => {
  if (!isModalHide) {
    warning__modal.classList.toggle("action__waring");
    isModalHide = true;
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/serviceWorker.js");
  });
}
