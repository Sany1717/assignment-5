const totalDonationNeed = document.getElementById("totalDonationNeed");
const dataHistory = document.getElementById("dataHistory");
const modal = document.getElementById("modal_dialog");

const CommonFeatcher = (doanteAmount, id, title) => {

  const inputElement = document.getElementById(doanteAmount);
  const inputFiled = parseFloat(inputElement.value);

  const floodDonateAmount = parseFloat(document.getElementById(id).innerText);

  let amoutnValidationMessage = document.querySelector(".warning_message");
  if (inputFiled < 0 || isNaN(inputFiled)) {
    amoutnValidationMessage.innerText = "invaid amount";
    return;
  }

  const totalDonateAmount = inputFiled + floodDonateAmount;

  const updatedDonationAmount =
    parseFloat(totalDonationNeed.innerText) - inputFiled;
  if (parseFloat(totalDonationNeed.innerText) < inputFiled) {
    return;
  } else {
    document.getElementById(id).innerText = totalDonateAmount;
    totalDonationNeed.innerText = updatedDonationAmount;
  }

  document.getElementById(doanteAmount).value = "";
  amoutnValidationMessage.innerText = "";
  modal.showModal();

  const div = document.createElement("div");
  div.className =
    "bg-white p-[25px] rounded-2xl border border-[rgba(17,17,17,0.1)] border-solid mb-2";
  div.innerHTML = `
              <h4 class="text-xl font-bold text-[rgb(17,17,17)]">
                ${inputFiled} Taka is ${title}
              </h4>
              <div class="text-[16px] font-light text-[rgba(17,17,17,0.7)] mt-4">
                <span class="text-xl font-bold text-[rgb(17,17,17)]">
                  Date :</span
                >
                ${new Date()}
                       </div>`;
  donationDataHistory.appendChild(div);
};