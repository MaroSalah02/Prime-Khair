window.onload = loadData();

function loadData() {
  var paramString = window.location.search;

  var pageParams = new URLSearchParams(paramString);

  var keysIterator = pageParams.keys();
  var keys = [];

  for (var key of keysIterator) {
    if (key != "type") {
      keys.push(key);
    }
  }

  if (keys.length == 0) {
    console.log("Error: No URL Query");

    return;
  }
  console.log(keys);
  try {
    document.getElementById("container-header").innerHTML =
      pageParams.get("type").charAt(0).toUpperCase() +
      pageParams.get("type").slice(1) +
      document.getElementById("container-header").innerHTML;
    //console.log(pageParams.get("type"));
  } catch {
    console.log("Error: Unspecified type");
  }
  //Shows the request info for confirmation, loads it from the URL query
  keys.forEach((key) => {
    var infoField = document.createElement("div");
    infoField.classList.add("info-field");

    var label = document.createElement("label");
    label.classList.add("info-label");
    label.textContent = key.charAt(0).toUpperCase() + key.slice(1); //Makes sure labels are capitalized

    var fieldVal = document.createElement("input");
    fieldVal.classList.add("input-field");
    fieldVal.setAttribute("disabled", true);
    fieldVal.value = pageParams.get(key);

    infoField.appendChild(label);
    infoField.appendChild(fieldVal);
    //console.log(infoField);
    document.getElementById("container").appendChild(infoField);
  });

  //Adds the quantity selection box for the selected request
  var infoField = document.createElement("div");
  infoField.classList.add("info-field");

  var label = document.createElement("label");
  label.classList.add("info-label");
  label.textContent = "Quantity";

  var fieldVal = document.createElement("input");
  fieldVal.classList.add("input-field");
  fieldVal.setAttribute("type", "number");
  fieldVal.setAttribute("min", 1);
  fieldVal.value = 1;

  infoField.appendChild(label);
  infoField.appendChild(fieldVal);

  document.getElementById("container").appendChild(infoField);
}
