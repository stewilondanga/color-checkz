var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$(document).ready(function() {
  var $mycheck1 = $("#mycheck-1");
  var $mycheck2 = $("#mycheck-2");
  var $mycheck3 = $("#mycheck-3");

  $mycheck1.click(function() {
    if ($mycheck1.prop("checked") == true && $mycheck2.prop("checked") == true) {
      $($mycheck2).prop("checked", false);
    }

  })

  $mycheck2.click(function() {
    if ($mycheck2.prop("checked") == true && $mycheck3.prop("checked") == true) {
      $($mycheck3).prop("checked", false);
    }

  })
  $mycheck3.click(function() {
    if ($mycheck1.prop("checked") == true && $mycheck2.prop("checked") == true) {
      $($mycheck1).prop("checked", false);
    }

  })

})
