document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("myelement").classList.add("load");
  }, 1);
  setTimeout(function () {
    document.getElementById("myelement").classList.add("hide");
  }, 1200);
});

function goTo(address) {
  window.location.href = address;
}


function showForm() {
  var form = document.getElementById("reviewcard");

  form.classList.remove("hidden");

  const scrollPosition =
    (document.documentElement.scrollHeight - window.innerHeight) * 0.7;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
}
function tableviewshow(){
  var table = document.getElementsByClassName("table")[0];
  var cards = document.getElementsByClassName("posts")[0];
  cards.classList.add("hidden");
  table.classList.remove("hidden");
}
function cardviewshow(){
  var table = document.getElementsByClassName("table")[0];
  var cards = document.getElementsByClassName("posts")[0];
  cards.classList.remove("hidden");
  table.classList.add("hidden");
}
function download_docs(){
    var fileName = 'Validation pdf.pdf';
    var fileUrl = '../' + fileName;
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            var a = document.createElement('a');
            var blobUrl = window.URL.createObjectURL(blob);
            a.href = blobUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(error => console.error('Error downloading file:', error));
}