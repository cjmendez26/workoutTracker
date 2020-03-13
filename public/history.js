//  Load exercises render them to the screen
// function getExercises() {
//     // $("#submit").empty();
//     $.getJSON("/exercisesoftheday", function (data) {
//           for (var i = 0; i < data.length; i++) {
//             // console.log(data);
//             $("#exercises").prepend("<div>" + data[i].exercise + "</div>");
//           }
//     });
    //       $("#exercises").prepend(exercises + "<div" + data.exercise + "</div>");
    //   }
    //   $("#submit").prepend("<tr><th>Title</th><th>Author</th><th>Read/Unread</th></tr>");
//     // });
// }

// getExercises();

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
//   
//   getExercises();