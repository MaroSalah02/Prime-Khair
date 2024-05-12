document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("myelement").classList.add("load");
  }, 1);
  setTimeout(function () {
    document.getElementById("myelement").classList.add("hide");
  }, 1200);
});
function medicalSupply() {
  window.location.href = "../Donor/medicalSuppliesDetails.html";
}
function stationery() {
  window.location.href = "../Donor/stationeryDetails.html";
}
function book() {
  window.location.href = "../Donor/bookDetails.html";
}
function toys() {
  window.location.href = "../Donor/toyDetails.html";
}
function food() {
  window.location.href = "../Donor/foodDetails.html";
}
function blood() {
  window.location.href = "../Donor/bloodDonationDetails.html";
}
function cloths() {
  window.location.href = "../Donor/clothesDetails.html";
}
function orgDet() {
  window.location.href = "../Donor/organizationDetails.html";
}
function goBackOrg() {
  window.location.href = "../Donor/organizations.html";
}
