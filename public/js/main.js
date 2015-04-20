$(document).ready(function() {
  $(".post-twitter").submit(function(e){
    e.preventDefault();
    frm = $(this);box = $(frm.children("div").children("input[name='tweet']"));btn = $(frm.children("button"));
    $.ajax({
      method: "POST",
      url: frm.attr("action"),
      data: frm.serialize(),
      success: function(d) {
        box.addClass("succ");box.prop("disabled",true);btn.addClass("sent");
        setTimeout(function(){box.removeClass("succ");box.prop("disabled",false);btn.removeClass("sent");box.val("");},2000);
      }
    });
    return false;
  });
  // Place JavaScript code here...
});
