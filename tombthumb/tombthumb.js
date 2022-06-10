$('document').ready(function() {
  $('#button').on('click', function(e){
    e.preventDefault()
    let kbsize = $(".h").val() * $(".w").val() * $(".num").val() / 8 / 1000;
    if(kbsize < 64){
      $(".num").empty().append(kbsize);
      $("#calculator").show();
      $(':input').val('');
      $("#result").show();
      $("#notresult").hide();
    }else {
      $(".num").empty().append(kbsize);
      $("#calculator").show();
      $(':input').val('');
      $("#notresult").show();
      $("#result").hide();
    }
  })
});
