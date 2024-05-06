document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("myelement").classList.add("load");
  }, 1);
  setTimeout(function () {
    document.getElementById("myelement").classList.add("hide");
  }, 1200);
});

function goToMoreDetailsOrganization() {
  window.location.href = "/Admin/organizationMoreDetails.html";
}
