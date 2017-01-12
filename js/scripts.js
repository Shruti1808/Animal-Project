var test = "it works";

$(document).ready(function() {

  $("form#animals").submit(function(event) {

    event.preventDefault();
    var animal= $("input:radio[name=animal]:checked").val();

    console.log(animal);

    if (animal==="turtles") {
      $(".turtles").show();
    } else if (animal==="snakes") {
      $(".snakes").show();
    } else if (animal==="insects") {
      $(".insects").show();
    }
  });

});
