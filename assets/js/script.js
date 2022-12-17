$( document ).ready(function() {

  $("#button-2").hide();
  $("#button-3").hide();
  $("#button-4").hide();
  $("#text-1").hide();

  $("#button-1").click(function() {
    $(this).addClass('scale-out-center');
    $("#button-1").hide();
    $("#button-2").show();
  })

  $("#button-2").click(function() {
    $(this).addClass('scale-out-center');
    $("#button-2").hide();
    $("#button-3").show();
  })

  $("#button-3").click(function() {
    $(this).addClass('scale-out-center');
    $("#button-3").hide();
    $("#button-4").show();
  })

  $("#button-4").click(function() {
    $(this).addClass('scale-out-center');
    $("#button-4").hide();
    $("#text-1").show();
    $("#header-img").addClass('kenburns-top');
    $("#header-img").delay(10000)
                    .queue(function(next) {
                    $(this).addClass('pointer');
                    $("#img-card").removeClass('jello-horizontal');
                    $("#header-img").attr("data-bs-toggle","modal");
                    $("#header-img").attr("data-bs-target","#exampleModal");
                  })
  })
  
});


