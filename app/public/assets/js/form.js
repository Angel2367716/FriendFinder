// // <!-- BELOW CODE IS CRITICAL. IT HANDLES HOW FORM DATA IS SENT TO OUR SERVER -->
//   // Chosen CSS
//   var config = {
//   ".chosen-select": {},
//   ".chosen-select-deselect": {
//     allow_single_deselect: true
//   },
//   ".chosen-select-no-single": {
//     disable_search_threshold: 10
//   },
//   ".chosen-select-no-results": {
//     no_results_text: "Oops, nothing found!"
//   },
//   ".chosen-select-width": {
//     width: "95%"
//   }
// };
// for (var selector in config) {
//   $(selector).chosen(config[selector]);
// }

//     //Form inputs
//     $("#submit").on("click", function (event) {
//         event.preventDefault();
//         //validation 
//         function validateForm() {
//             var isValid = true;
//             $(".form-control").each(function () {
//                 if ($(this).val() === "") {
//                     isValid = false;
//                 }
//             });

//             $(".chosen-select").each(function () {
//                 if ($(this).val() === "") {
//                     isValid = false;
//                 }
//             });
//             return isValid;
//         }
//         //If all the fileds are filled then create an object of the user data
//         if (validateForm()) {
//             var userData = {
//                 name: $("#name").val(),
//                 photo: $("#photo").val(),
//                 scores: [
//                     $("#q1").val(),
//                     $("#q2").val(),
//                     $("#q3").val(),
//                     $("#q4").val(),
//                     $("#q5").val(),
//                     $("#q6").val(),
//                     $("#q7").val(),
//                     $("#q8").val(),
//                     $("#q9").val(),
//                     $("#q10").val()
//                 ]
//             };

//             var currentURL = window.location.origin;
//             //post the hte user objcet to the api friends
//             $.post(currentURL + "/api/friends", userData, function (data) {
//                 $("#matchName").text(data.name);
//                 $("#matchImg").attr("src", data.photo);
//                 //this part will show the modal with the best match
//                 $("#resultsModal").modal("toggle");
                
//             });
//         } else {
//             alert("Please fill out all fields before submitting!");
//         }

//     });
