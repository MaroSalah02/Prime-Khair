window.onload = setWidth();

function setWidth() {
  var sidebar = document.getElementsByClassName("sidebar").item(0);
  sidebar.style.width = "3%";
  console.log("WIDTH SET");
}

function expand() {
  var sidebar = document.getElementsByClassName("sidebar").item(0);
  var children = sidebar.children;
  // console.log(sidebar.children);
  // console.log(parseInt(sidebar.style.width));

  if (parseInt(sidebar.style.width) < 20) {
    console.log("EXPAND");
    sidebar.style.width = "20%";
    for (var i = 0; i < children.length; i++) {
      if (!(children.item(i).id == "sidebar-top")) {
        children.item(i).classList.remove("fade");
      }
    }

    document.getElementById("logo-img").classList.remove("fade");
    sidebar.classList.add("sidebar-shadow");
  } else {
    console.log("SHTINK");

    sidebar.style.width = "3%";
    for (var i = 0; i < children.length; i++) {
      if (!(children.item(i).id == "sidebar-top")) {
        children.item(i).classList.add("fade");
      }

      document.getElementById("logo-img").classList.add("fade");
      sidebar.classList.remove("sidebar-shadow");
    }
  }

  document
    .getElementsByClassName("sidebar-button")
    .item(0)
    .classList.remove("fade");
}
