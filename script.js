$(document).ready(function () {
    // Show all items initially with fadeIn effect
    $(".gallery-item").fadeIn();
  
    $(".filter-btn").click(function () {
      let category = $(this).data("category");
  
      if (category === "all") {
        $(".gallery-item").fadeOut(200, function () {
          $(".gallery-item").fadeIn(400);
        });
      } else {
        $(".gallery-item").fadeOut(200);
        $(".gallery-item." + category).delay(200).fadeIn(400);
      }
    });
  });
  