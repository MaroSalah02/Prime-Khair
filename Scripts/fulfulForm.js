function showForm() {
  var form = document.getElementById("confirmation-form");

  form.classList.remove("invisible");

  const scrollPosition =
    (document.documentElement.scrollHeight - window.innerHeight) * 0.7;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
}

async function hideForm() {
  var form = document.getElementById("confirmation-form");
  const scrollPosition =
    (document.documentElement.scrollHeight - window.innerHeight) * 0;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });

  await new Promise((r) => setTimeout(r, 500));

  form.classList.add("invisible");
}

function submitForm() {
  // TODO: Form Logic
}

//THIS IS THE BACK BUTTON SCRIPT FOR DETAILS PAGES

function goBack() {
  window.location.href = "/Donor/donor.html"; //TODO: Make it return to the list page rather than the main page
}
