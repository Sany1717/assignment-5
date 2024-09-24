const submmit_Noakhali = document.getElementById(
    "submmit_Noakhali"
  );
  
  submmit_Noakhali.addEventListener("click", (event) => {
    event.preventDefault();
    const donation_name =
      document.getElementById("donation_name").innerText;
    CommonFeatcher(
      "AmountOfNoakhali",
      "NoakhaliDonateAmount",
      donation_name
    );
  });
  
  // donation btn decler
  const submiteBtnFeni = document.getElementById("submiteBtnFeni");
  
  submiteBtnFeni.addEventListener("click", (event) => {
    event.preventDefault();
    // flood at at feni cmapain name
    const feni_name =
      document.getElementById("feni_name").innerText;
  
    CommonFeatcher(
      "doanteAmountOfFeni",
      "FeniDonateAmount",
      feni_name
    );
  });
  
  // donation btn decler
  const submiteBtnQuota = document.getElementById("submiteBtnQuota");
  
  submiteBtnQuota.addEventListener("click", (event) => {
    event.preventDefault();
    // flood at AtQuota cmapnai
    const Quota_name =
      document.getElementById("quota_name").innerText;
    CommonFeatcher(
      "doanteAmountOfquota",
      "QuateDonateAmount",
      Quota_name
    );
  });