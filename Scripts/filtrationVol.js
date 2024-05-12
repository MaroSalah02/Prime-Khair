// window.onload = function () {
//   setTimeout(filter3, 200);
// };

// function filter3() {
//   var searchBarWords = document
//     .getElementById("searchbar")
//     .value.toLowerCase()
//     .split(" ");

//   //TEACHING FILTERS
//   var subjectFilter = document
//     .getElementById("teaching-subject")
//     .value.toLowerCase();
//   var teachingGovFilter = document
//     .getElementById("teaching-gov")
//     .value.toLowerCase();
//   var teachingAreaFilterWords = document
//     .getElementById("teaching-area")
//     .value.toLowerCase()
//     .split(" ");

//   //DOCTOR FILTERS

//   var specialtyFilter = document
//     .getElementById("medical-speciality")
//     .value.toLowerCase();
//   var medicalGorvFilter = document
//     .getElementById("medical-gov")
//     .value.toLowerCase();
//   var medicalAreaFilterWords = document
//     .getElementById("doctoring-area")
//     .value.toLowerCase()
//     .split(" ");

//   var medicalOrganizationFilter = document
//     .getElementById("organization-filter")
//     .value.toLowerCase()
//     .split(" ");

//   var postList = document.getElementsByClassName("post");

//   for (var i = 0; i < postList.length; i++) {
//     var currentPost = postList.item(i);
//     var flag = true;

//     var flag2;

//     var postTitle = currentPost
//       .getElementsByClassName("title")
//       .item(0)
//       .innerHTML.toLowerCase();
//     var postDesc = currentPost
//       .getElementsByClassName("description")
//       .item(0)
//       .innerHTML.toLowerCase();

//     flag2 = false;
//     searchBarWords.forEach((keyword) => {
//       if (
//         searchBarWords[0] == "" ||
//         postTitle.includes(keyword) ||
//         postDesc.includes(keyword)
//       ) {
//         flag2 = true;
//         return;
//       }
//     });

//     flag = flag & (flag2 == 1) ? true : false;

//     var postClass = currentPost.classList.item(1);

//     if (flag) {
//       switch (postClass) {
//         case "teaching":
//           var postSubject = currentPost
//             .getElementsByClassName("subjects")
//             .item(0)
//             .innerHTML.toLowerCase();

//           var postGov = currentPost
//             .getElementsByClassName("governorate")
//             .item(0)
//             .innerHTML.toLowerCase();

//           var postArea = currentPost
//             .getElementsByClassName("area")
//             .item(0)
//             .innerHTML.toLowerCase();

//           if (
//             !postSubject.includes(subjectFilter) ||
//             postGov != teachingGovFilter
//           ) {
//             flag = false;
//           }
//           flag2 = false;
//           teachingAreaFilterWords.forEach((keyword) => {
//             if (
//               teachingAreaFilterWords[0] == "" ||
//               postArea.includes(keyword)
//             ) {
//               flag2 = true;
//               return;
//             }
//           });

//           flag = flag & (flag2 == 1) ? true : false;

//           break;

//         case "doctor":
//           var postSpeciality = currentPost
//             .getElementsByClassName("speciality")
//             .item(0)
//             .innerHTML.toLowerCase();

//           var postGov = currentPost
//             .getElementsByClassName("governorate")
//             .item(0)
//             .innerHTML.toLowerCase();

//           var postArea = currentPost
//             .getElementsByClassName("area")
//             .item(0)
//             .innerHTML.toLowerCase();

//           var postOrg = currentPost
//             .getElementsByClassName("organization")
//             .item(0)
//             .innerHTML.toLowerCase();

//           if (
//             !postSpeciality.includes(specialtyFilter) ||
//             !postGov.includes(medicalGorvFilter)
//           ) {
//             flag = false;
//           }

//           flag2 = false;
//           medicalAreaFilterWords.forEach((keyword) => {
//             if (medicalAreaFilterWords[0] == "" || postArea.includes(keyword)) {
//               flag2 = true;
//               return;
//             }
//           });

//           flag = flag & (flag2 == 1) ? true : false;

//           medicalOrganizationFilter.forEach((keyword) => {
//             if (
//               medicalOrganizationFilter[0] == "" ||
//               postArea.includes(keyword)
//             ) {
//               flag2 = true;
//               return;
//             }
//           });

//           flag = flag & (flag2 == 1) ? true : false;

//           break;
//       }
//     }

//     if (!flag) {
//       currentPost.classList.add("invisible");
//     } else {
//       currentPost.classList.remove("invisible");
//     }
//   }
// }
