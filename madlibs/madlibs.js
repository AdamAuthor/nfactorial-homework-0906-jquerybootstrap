$('document').ready(function() {
  $("form").submit(function(e) {
    var str = $("form").serialize();
    e.preventDefault()
    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".character").empty().append($("input.character").val());
    $(".adverb").empty().append($("input.adverb").val());
    $("#story").show();
    $(':input').val('');
    $("#questions").show();
  });

  $("#play-btn").click(function(e) {
  	e.preventDefault()
    $("#questions").show(); 	
  	$("#story").show();
  });

});
