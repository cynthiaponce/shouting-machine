$(document).ready(function() {
  $("#form").submit(function(event) {
  var personInput = $("input#person1").val();
  personInput = personInput.toUpperCase();
  $(".well").text(personInput);

  event.preventDefault();


  });
});
