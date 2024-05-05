window.onload = loadData();

var returnAddress;

function loadData() {
  var paramString = window.location.search;

  var pageParams = new URLSearchParams(paramString);

  returnAddress = pageParams.get("returnAddress");
  console.log(pageParams.get("returnAddress"));
  console.log(returnAddress);
  var keysIterator = pageParams.keys();
  var keys = [];

  for (var key of keysIterator) {
    keys.push(key);
  }

  keys.forEach((key) => {
    switch (key) {
      case "title":
        document.getElementById("type-value").innerHTML = pageParams.get(key);
        break;
      case "author":
        document.getElementById("age-value").innerHTML = pageParams.get(key);
        break;
      case "language":
        document.getElementById("gender-value").innerHTML = pageParams.get(key);
        break;
      case "edition":
        document.getElementById("category-value").innerHTML =
          pageParams.get(key);
        break;
      case "quantity":
        document.getElementById("quntity-value").innerHTML =
          pageParams.get(key);
        break;
    }
  });
}

function goBack() {
  if (returnAddress == null) {
    window.location.href = "/main/main.html"; //TODO: Make it return to the list page rather than the main page
  } else {
    window.location.href = returnAddress;
  }
}
