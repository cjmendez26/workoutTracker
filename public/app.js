console.log("helloworld");

// function renderTimer() {
//   $('#clockDisplay').text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// }
// renderTimer();
// Click Events

// Click event to add a book to the db
$("#add").on("click", function() {
  console.log("add button clicked");
  // takes the string from the input box
  console.log($("#new-exercise").val());
  $.ajax({
    type: "POST",
    url: "/submit",
    dataType: "json",
    data: {
      exercise: $("#new-exercise").val()
    }
  })
    .then(function(data) {
      console.log(data);
      var exercises= $("#exercises").html();
      console.log(exercises);
      $("#exercises").html(exercises + "<div>" + data.exercise + "</div>");
    });
  return false;
});

// Click event it will render new workout
// $(document).on("click", ".submit", function() {
//     var thisId = $(this).attr("data-id");
//     $.ajax({
//       type: "PUT",
//       url: "/submit/" + thisId
//     });
//     $(this).parents("tr").remove();
//     getRead();
//   });
  
//   // Click event will render an existing workout
//   $(document).on("click", ".submit", function() {
//     var thisId = $(this).attr("data-id");
//     $.ajax({
//       type: "PUT",
//       url: "/submit/" + thisId
//     });
//     $(this).parents("tr").remove();
//     getUnread();
//   });
  
  // Load exercises render them to the screen
  // function getExercises() {
  //   $("#submit").empty();
  //   $.getJSON("/submit", function(data) {
  //     for (var i = 0; i < data.length; i++) {
  //       $("#submit").prepend("<tr><td>" + data[i].title + "</td><td>" + data[i].author +
  //         "</td><td><button class='markread' data-id='" + data[i]._id + "'>Mark Read</button></td></tr>");
  //     }
  //     $("#submit").prepend("<tr><th>Title</th><th>Author</th><th>Read/Unread</th></tr>");
  //   });
  // }
  
//   // Load read books and render them to the screen
//   function getRead() {
//     $("#read").empty();
//     $.getJSON("/read", function(data) {
//       for (var i = 0; i < data.length; i++) {
//         $("#read").prepend("<tr><td>" + data[i].title + "</td><td>" + data[i].author +
//           "</td><td><button class='markunread' data-id='" + data[i]._id + "'>Mark Unread</button></td></tr>");
//       }
//       $("#read").prepend("<tr><th>Title</th><th>Author</th><th>Read/Unread</th></tr>");
//     });
//   }
  
//   // Calling our functions
//   getUnread();
//   getRead();