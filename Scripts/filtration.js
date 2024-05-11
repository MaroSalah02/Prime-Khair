window.onload = filterSelection();

var selectorVal = "";

function filterSelection() {
  selectorVal = document.getElementById("typeSelector").value.toLowerCase();

  var filterGroups = document.getElementsByClassName("filter-group");
  // console.log(filterGroups);
  for (var i = 0; i < filterGroups.length; i++) {
    filterGroups.item(i).classList.add("invisible");
  }

  // console.log(selectorVal);

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
    case "medical mupplies":
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
    case "blood":
      document.getElementById("blood-filter").classList.remove("invisible");
      break;
    case "all":
      for (var i = 0; i < filterGroups.length; i++) {
        filterGroups.item(i).classList.remove("invisible");
      }
    default:
  }

  filter();
}

function filter() {
  // var selectorVal = document.getElementById("typeSelector").value;
  selectorVal = document.getElementById("typeSelector").value.toLowerCase();
  if (selectorVal == "") {
    selectorVal = "all";
  }
  var fieldList;

  var postList = document.getElementsByClassName("post");

  var selectedList = [];

  var keywords = document.getElementById("searchbar").value.split(" ");
  console.log(keywords);

  for (var i = 0; i < postList.length; i++) {
    postList.item(i).classList.add("invisible");
  }
  // console.log(selectorVal == "all");

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
    case "clothes": // DONE
      var clothesMin = document.getElementById("clothes-min").value;
      var clothesMax = document.getElementById("clothes-max").value;
      var minClothesDefault = clothesMin == "" ? 1 : clothesMin;
      var maxClothesDefault = clothesMax == "" ? 900 : clothesMax;
      var clothesMale = document.getElementById("clothes-male").checked;
      var clothesFemale = document.getElementById("clothes-female").checked;
      var clothesSpring = document.getElementById("clothes-spring").checked;
      var clothesSummer = document.getElementById("clothes-summer").checked;
      var clothesAutumn = document.getElementById("clothes-autumn").checked;
      var clothesWinter = document.getElementById("clothes-winter").checked;

      console.log(selectedList);

      selectedList.forEach((post) => {
        var flag = true;

        // var typeStrings = generateSubstrings(
        //   post.getElementsByClassName("type").item(0).value
        // );

        var ageString = post.getElementsByClassName("age").item(0).innerHTML;
        var genderString = post
          .getElementsByClassName("gender")
          .item(0)
          .innerHTML.toLowerCase();
        var seaosnStrings = post
          .getElementsByClassName("season")
          .item(0)
          .innerHTML.toLowerCase()
          .split("/");

        var minPost = getMin(ageString);
        var maxPost = getMax(ageString);
        console.log(ageString);
        console.log(minClothesDefault);
        console.log(minPost);
        console.log(maxClothesDefault);
        console.log(maxPost);
        if (
          parseInt(minClothesDefault) > parseInt(minPost) ||
          parseInt(maxClothesDefault) < parseInt(maxPost)
        ) {
          flag = false;
        }
        // console.log(flag);

        if (genderString.includes("any") || (!clothesMale && !clothesFemale)) {
          //do nothing
        } else {
          if (genderString.includes("female") && !clothesFemale) {
            flag = false;
          }
          if (
            genderString.includes("male") &&
            !genderString.includes("female") &&
            !clothesMale
          ) {
            flag = false;
          }
        }
        if (
          !clothesAutumn &&
          !clothesSpring &&
          !clothesSummer &&
          !clothesWinter
        ) {
          //do nothing
        } else {
          flag = false;
        }

        if (
          (seaosnStrings.includes("fall") ||
            seaosnStrings.includes("autumn")) &&
          clothesAutumn
        ) {
          flag = true;
        }
        if (seaosnStrings.includes("summer") && clothesSummer) {
          flag = true;
        }
        if (seaosnStrings.includes("winter") && clothesWinter) {
          flag = true;
        }
        if (seaosnStrings.includes("spring") && clothesSpring) {
          flag = true;
        }

        if (!flag) {
          post.classList.add("invisible");
        } else {
          post.classList.remove("invisible");
        }
      });

      break;
    case "toys": //DONE
      // fieldList = document.getElementById("toys-filter").children;
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

      var typeKeyword = document.getElementById("toy-type").value.split(" ");

      var category = document.getElementById("toy-category").value;

      var flag = true;

      selectedList.forEach((card) => {
        var typeToy = card.getElementsByClassName("type").item(0);
        var age = card.getElementsByClassName("age").item(0);
        var gender = card.getElementsByClassName("gender").item(0);
        var categoryToy = card.getElementsByClassName("category").item(0);

        var type = [];

        typeToy.innerHTML.split(" ").forEach((word) => {
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

        var ageString = age.innerHTML;
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

        var tmp = gender.innerHTML;
        if (tmp.includes("Any")) {
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
          !categoryToy.innerHTML.toLocaleLowerCase().includes(category) &&
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
      var foodCategory = document.getElementById("food-category").value;

      selectedList.forEach((post) => {
        var postCategory = post
          .getElementsByClassName("category-value")
          .item(0)
          .innerHTML.toLowerCase();
        console.log(postCategory);
        console.log(foodCategory);
        console.log(foodCategory == postCategory);
        if (foodCategory == postCategory) {
          post.classList.remove("invisible");
        } else {
          post.classList.add("invisible");
        }
        if (foodCategory == "all") {
          post.classList.remove("invisible");
        }
      });
      break;
    case "medical supplies":
      fieldList = document.getElementById("medical-suppies-filter").children;
      break;
    case "medication":
      fieldList = document.getElementById("medication-filter").children;
      break;
    case "books": //DONE
      fieldList = document.getElementById("books-filter").children;

      var nameKeyword = fieldList.item(0).value.toLowerCase().split(" ");
      var authorKeyword = fieldList.item(1).value.toLowerCase().split(" ");
      var languageKeyword = fieldList.item(2).value.toLowerCase().split(" ");

      selectedList.forEach((card) => {
        var children = card.children;

        var name = [];
        var author = [];
        var language = [];

        children
          .item(2)
          .innerHTML.toLowerCase()
          .split(" ")
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
    case "blood":
      var bloodtype = document.getElementById("blood-type").value;
      var bloodGovernate = document
        .getElementById("blood-governate")
        .value.toLowerCase();
      var bloodAreaStrings = substrings(
        document.getElementById("blood-area").value.split(" ").toLowerCase()
      );
      var bloodHospitalStrings = substrings(
        document.getElementById("blood-area").value.split(" ").toLowerCase()
      );

      selectedList.forEach((post) => {
        var flag = true;
        var postType = post.getElementsByClassName("type1").item(0).innerHTML;
        var postGovernate = post
          .getElementsByClassName("governate")
          .item(0).innerHTML;
        var postArea = post.getElementsByClassName("Area").item(0).innerHTML;
        var postHospital = post
          .getElementsByClassName("Hospital")
          .item(0).innerHTML;

        if (bloodtype != postType || postGovernate != bloodGovernate) {
          flag = false;
        }

        flag =
          flag &
          bloodAreaStrings.forEach((keyword) => {
            if (postArea.includes(keyword)) {
              flag = flag & true;
              return true;
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
  // console.log(s);
  var sum = "";
  for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
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
  for (var i = s.length - 1; 0 <= i; i--) {
    console.log(s[i]);
    if (s[i] == "-" || s[i] == "+") {
      break;
    } else {
      sum = s[i] + sum;
    }
  }
  if (sum == "") {
    sum = 900;
  }
  return sum;
}

function toggleCollapsible() {
  var tmp = document.getElementsByClassName("collapsible");

  var coll = [];
  for (var i = 0; i < tmp.length; i++) {
    coll.push(tmp.item(i));
  }
  console.log(coll);
  coll.forEach(function (collapsible) {
    collapsible.classList.toggle("active");
  });
}
