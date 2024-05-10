window.onload = filterSelection();

var selectorVal = "";

function filterSelection() {
  selectorVal = document.getElementById("typeSelector").value.toLowerCase();

  var filterGroups = document.getElementsByClassName("filter-group");
  // console.log(filterGroups);
  for (var i = 0; i < filterGroups.length; i++) {
    filterGroups.item(i).classList.add("invisible");
  }

  console.log(selectorVal);

  switch (selectorVal) {
    case "clothes":
      document.getElementById("clothes-filter").classList.remove("invisible");
      break;
    case "toys":
      document.getElementById("toys-filter").classList.remove("invisible");
      break;
    case "food":
      document.getElementById("food-filter").classList.remove("invisible");
      break;
    case "medical-supplies":
      document
        .getElementById("medical-suppies-filter")
        .classList.remove("invisible");
      break;
    case "medication":
      document
        .getElementById("medication-filter")
        .classList.remove("invisible");
      break;
    case "books":
      document.getElementById("books-filter").classList.remove("invisible");
      break;
    case "stationery":
      document
        .getElementById("stationery-filter")
        .classList.remove("invisible");
      break;
    default:
      selectorVal = "all";
  }

  filter();
}

function filter() {
  // var selectorVal = document.getElementById("typeSelector").value;
  if (selectorVal == "") {
    selectorVal = "all";
  }
  var fieldList;

  var postList = document.getElementsByClassName("post");

  var selectedList = [];

  var keywords = document.getElementById("searchbar").value.split(" ");
  //console.log(keywords);

  for (var i = 0; i < postList.length; i++) {
    postList.item(i).classList.add("invisible");
  }
  //   console.log(selectorVal == "all");

  for (var i = 0; i < postList.length; i++) {
    if (
      postList.item(i).classList.contains(selectorVal) ||
      selectorVal == "all"
    ) {
      selectedList.push(postList.item(i));
    }
  }

  selectedList.forEach((card) => {
    var children = card.children;

    var title = [];
    var description = [];

    children
      .item(0)
      .innerHTML.split(" ")
      .forEach((word) => {
        title = title.concat(generateSubstrings(word));
      });

    children
      .item(1)
      .innerHTML.split(" ")
      .forEach((word) => {
        description = description.concat(generateSubstrings(word));
      });

    keywords.forEach((keyword) => {
      // console.log(keywords[0] == "" || title.contains(keyword) || description.contains(keyword));
      if (
        keywords[0] == "" ||
        title.includes(keyword) ||
        description.includes(keyword)
      ) {
        card.classList.remove("invisible");
        return;
      }
    });
  });

  //console.log(selectedList[0].children);

  switch (selectorVal) {
    case "clothes":
      fieldList = document.getElementById("clothes-filter").children;
      break;
    case "toys": //DONE
      fieldList = document.getElementById("toys-filter").children;
      var female = document.getElementById("toys-female").checked;
      var male = document.getElementById("toys-male").checked;
      //   console.log(male);

      var min = document.getElementById("toys-min").value;
      var max = document.getElementById("toys-max").value;

      //   var ageString = [];

      //   if (min == "" && max != "") {
      //     ageStrings.push("-" + max);
      //   }
      //   if (max == "" && min != "") {
      //     ageString.push(min + "-");
      //     ageString.push(min + "+");
      //   }

      //   if (min != "" && max != "") {
      //     ageString.push(min + "-" + max);
      //   }

      var maxDefault = max == "" ? 900 : max;
      var minDefault = min == "" ? 1 : min;

      var typeKeyword = fieldList.item(0).value.split(" ");

      var category = fieldList.item(3).value;

      var flag = true;

      selectedList.forEach((card) => {
        var children = card.children;

        var type = [];

        children
          .item(2)
          .innerHTML.split(" ")
          .forEach((word) => {
            type = type.concat(generateSubstrings(word.toLowerCase()));
          });
        //console.log(type);
        //console.log(typeKeyword);
        typeKeyword.forEach((keyword) => {
          // console.log(keywords[0] == "" || title.contains(keyword) || description.contains(keyword));
          if (typeKeyword[0] == "" || type.includes(keyword)) {
            //card.classList.remove("invisible");
            //console.log(keyword);
            return;
          } else {
            flag = false;
            //card.classList.add("invisible");
          }
        });
        //console.log(flag);

        var ageString = children.item(3).innerHTML;
        //console.log(ageString);
        //console.log(flag);

        min = getMin(ageString);
        max = getMax(ageString);

        // console.log("input min:" + minDefault);
        // console.log("thing min:" + min);
        // console.log("input max:" + maxDefault);
        // console.log("thing max:" + max);

        if (
          parseInt(minDefault) > parseInt(min) ||
          parseInt(maxDefault) < parseInt(max)
        ) {
          flag = false;
        }

        // max = getMax(ageString);

        // if (!children.item(3).innerHTML.contains(ageString)) {
        //   flag = false;
        // }

        var tmp = children.item(4).innerHTML;
        if (tmp.includes("Unisex")) {
          //do nothing
        } else {
          if (tmp.includes("Female") && !female) {
            flag = false;
          }
          if (tmp.includes("Male") && !tmp.includes("Female") && !male) {
            flag = false;
          }
        }
        //console.log(flag);

        if (
          !children.item(5).innerHTML.toLocaleLowerCase().includes(category) &&
          category != "all"
        ) {
          flag = false;
        }
        //console.log(children.item(5).innerHTML);
        //console.log(category);
        //console.log(flag);

        if (!flag) {
          card.classList.add("invisible");
        } else {
          card.classList.remove("invisible");
        }
      });

      break;
    case "food":
      fieldList = document.getElementById("food-filter").children;
      break;
    case "medical-supplies":
      fieldList = document.getElementById("medical-suppies-filter").children;
      break;
    case "medication":
      fieldList = document.getElementById("medication-filter").children;
      break;
    case "books": //DONE
      fieldList = document.getElementById("books-filter").children;

      var nameKeyword = fieldList.item(0).value.split(" ");
      var authorKeyword = fieldList.item(1).value.split(" ");
      var languageKeyword = fieldList.item(2).value.split(" ");

      selectedList.forEach((card) => {
        var children = card.children;

        var name = [];
        var author = [];
        var language = [];

        children
          .item(2)
          .innerHTML.split(" ")
          .forEach((word) => {
            name = name.concat(generateSubstrings(word));
          });

        children
          .item(3)
          .innerHTML.split(" ")
          .forEach((word) => {
            author = author.concat(generateSubstrings(word));
          });

        children
          .item(4)
          .innerHTML.split(" ")
          .forEach((word) => {
            language = language.concat(generateSubstrings(word));
          });

        console.log(name);
        console.log(nameKeyword);
        console.log(author);
        console.log(authorKeyword);
        console.log(language);
        console.log(languageKeyword);

        var flag = true;

        nameKeyword.forEach((keyword) => {
          // console.log(keywords[0] == "" || title.contains(keyword) || description.contains(keyword));
          if (nameKeyword[0] == "" || name.includes(keyword)) {
            //card.classList.remove("invisible");

            return;
          } else {
            flag = false;
            //card.classList.add("invisible");
          }
        });

        authorKeyword.forEach((keyword) => {
          // console.log(keywords[0] == "" || title.contains(keyword) || description.contains(keyword));
          if (authorKeyword[0] == "" || author.includes(keyword)) {
            //card.classList.remove("invisible");

            return;
          } else {
            //card.classList.add("invisible");
            flag = false;
          }
        });

        languageKeyword.forEach((keyword) => {
          // console.log(keywords[0] == "" || title.contains(keyword) || description.contains(keyword));
          if (languageKeyword[0] == "" || language.includes(keyword)) {
            //card.classList.remove("invisible");

            return;
          } else {
            //card.classList.add("invisible");
            flag = false;
          }
        });

        if (flag) {
          card.classList.remove("invisible");
        } else {
          card.classList.add("invisible");
        }
      });

      break;
    case "stationery": //DONE
      fieldList = document.getElementById("stationery-filter").children;
      var typeKeyword = fieldList.item(0).value.split(" ");

      selectedList.forEach((card) => {
        var children = card.children;

        var type = [];

        children
          .item(2)
          .innerHTML.split(" ")
          .forEach((word) => {
            type = type.concat(generateSubstrings(word));
          });

        console.log(type);
        console.log(typeKeyword);

        typeKeyword.forEach((keyword) => {
          // console.log(keywords[0] == "" || title.contains(keyword) || description.contains(keyword));
          if (typeKeyword[0] == "" || type.includes(keyword)) {
            card.classList.remove("invisible");
            console.log(keyword);
            return;
          } else {
            card.classList.add("invisible");
          }
        });
      });
      break;
  }
}

function generateSubstrings(str) {
  const substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }

  return substrings;
}

function getMin(s) {
  var sum = "";
  for (var i = 5; i < s.length; i++) {
    //console.log(s[i]);
    if (s[i] == "-" || s[i] == "+") {
      break;
    } else {
      sum += s[i];
    }
  }
  if (sum == "") {
    sum = 1;
  }
  return sum;
}

function getMax(s) {
  var sum = "";
  for (var i = s.length - 1; 5 < i; i--) {
    //console.log(s[i]);
    if (s[i] == "-" || s[i] == "+") {
      break;
    } else {
      sum += s[i];
    }
  }
  if (sum == "") {
    sum = 900;
  }
  return sum;
}
