$(document).ready((function(_this) {
        return function() {
          var bt;
          bt = $('#back-to-top');
          if ($(document).width() > 480) {
            $(window).scroll(function() {
              var st;
              st = $(window).scrollTop();
              if (st > 400) {
                return bt.css('display', 'block');
              } else {
                return bt.css('display', 'none');
              }
            });
            return bt.click(function() {
              $('body,html').animate({
                scrollTop: 0
              }, 800);
              return false;
            });
          }
          };
        })(this));

$(document).ready(function(a) {
    t = document.title,
    d = "(●—●) 等你回来~ | " + t;
    $(window).blur(function() {
        document.title = d
    }).focus(function() {
        document.title = t
    });
});