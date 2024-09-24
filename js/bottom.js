const donate_btn = document.getElementById("donate_btn");
const history_btn = document.getElementById("history_btn");
const donationSection = document.getElementById("donationSection");
const historySection = document.getElementById("historySection");

donate_btn.addEventListener("click", () => {
    donate_btn.classList.add("bottom");
  history_btn.classList.remove("bottom");

  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden");
});

history_btn.addEventListener("click", () => {
    donate_btn.classList.remove("bottom");
  history_btn.classList.add("bottom");

  historySection.classList.remove("hidden");
  donationSection.classList.add("hidden");
});