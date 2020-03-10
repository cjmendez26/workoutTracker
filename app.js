// Click Events
$('#existing a').on('click', function (e) {
  e.preventDefault()
  $('#existing a[href="#history.html"]').tab('show')
})

// Click event to exercise to the db
$("#addExersice").on("click", function() {
  $.ajax({
    type: "POST",
    url: "/submit",
    dataType: "json",
    data: {
      exercise: $("#exercise").val(),
      created: Date.now()
    }
  })
    .then(function(data) {
      console.log(data);
      getUnread();
      $("#author").val("");
      $("#title").val("");
    }
    );
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
  