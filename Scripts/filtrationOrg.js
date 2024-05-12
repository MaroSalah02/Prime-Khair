window.onload = function () {
  setTimeout(filter2, 200);
};

function filter2() {
  console.log("START");
  var searchBarWords = document
    .getElementById("searchbar")
    .value.toLowerCase()
    .split(" ");
  var goverateFilter = document.getElementById("governate-filter").value;
  var areaFilterWords = document
    .getElementById("area-filter")
    .value.toLowerCase()
    .split(" ");
  var typeFilter = document.getElementById("type-filter").value.toLowerCase();

  var postList = document.getElementsByClassName("post");
  console.log(postList);
  for (var i = 0; i < postList.length; i++) {
    var flag = true;
    var flag2;

    var currentPost = postList.item(i);

    var postGovernate = currentPost
      .getElementsByClassName("Governate")
      .item(0).innerHTML;

    var postArea = currentPost
      .getElementsByClassName("Area")
      .item(0)
      .innerHTML.toLowerCase();

    var postType = currentPost
      .getElementsByClassName("type")
      .item(0)
      .innerHTML.toLowerCase();

    var postTitle = currentPost
      .getElementsByClassName("title")
      .item(0)
      .innerHTML.toLowerCase();

    if (postGovernate != goverateFilter && goverateFilter != "All") {
      flag = false;
    }

    // console.log(flag);
    flag2 = false;

    areaFilterWords.forEach((keyword) => {
      if (postArea.includes(keyword) || areaFilterWords[0] == "") {
        flag2 = true;
        return;
      }
    });
    flag = flag & (flag2 == 1) ? true : false;
    // console.log(flag);
    // console.log("REAL TEST:" + postArea.includes("dokki"));
    flag2 = false;
    searchBarWords.forEach((keyword) => {
      if (postTitle.includes(keyword) || searchBarWords[0] == "") {
        flag2 = true;
        return;
      }
    });
    // console.log(flag2);
    flag = flag & (flag2 == 1) ? true : false;
    // console.log(flag);

    if (postType != typeFilter && typeFilter != "all") {
      flag = false;
    }
    // console.log(flag);

    // console.log(goverateFilter);
    // console.log(postGovernate);
    // console.log(searchBarWords);
    // console.log(postTitle);
    console.log(postArea);
    console.log(areaFilterWords);
    // console.log(postType);
    // console.log(typeFilter);
    console.log("*END OF POST*");

    if (!flag) {
      currentPost.classList.add("invisible");
    } else {
      currentPost.classList.remove("invisible");
    }

    console.log(currentPost.classList);
  }
}
