console.log("run javascript");
$.ajax({
  type:"GET",
  url: "/plans"
}) .then(function(data) {
  console.log(data);
        // var plans= $("#plans").html();
        // console.log(plans);
        // $("#plans").html(plans + "<div>" + data[0].plan + "</div>");
})

// Click event to add an exercise to the db
$("#submit").on("click", function() {
  console.log("add button clicked");
  // takes the string from the input box
  console.log($("#new-plan").val());
  console.log($("#exercises").val());
  $.ajax({
    type: "POST",
    url: "/submit",
    dataType: "json",
    data: {
      plan: $("#new-plan").val(),
      exercises: $("#exercises").val()
    }
  })
//   // renders data into div
    .then(function(data) {
      console.log(data);
      // var exercises= $("#exercises").html();
      // console.log(exercises);
      // $("#exercises").html(exercises + "<div>" + data.plan + "</div>");
    });
  return false;
});
  
 