$(".tabs ul li").click(function() {

    var tab = $(this).index();
    var position = 210 * tab;

    if($(this).hasClass('slider')) {
        return;
    }

    $(".slider").css({
        left: position + "px"
    });

    $('li').removeClass('active');
    $(this).addClass('active');
    $(this).find('li').addClass('active');
});

$(".projects_list ul li").click(function() {
    $('body').css('overflow-y', 'hidden');
})

$(".popup .close").click(function() {
    $('body').css('overflow-y', 'scroll');
})

if($) {

    $('#container > *').hide(0);
    $('#container #interfaces').show(0);

    $(".menuElement").click(function() {

        $('#container > *').hide(0)

        var tabID = $(this).data("tab");
        $('#' + tabID).show(0);

    });
}

$(function() {
  var page = 0;
  count = $(".popup .info").length - 1;
  console.log(count);

  $(".left_arrow").click(function() {
      console.log("left");

      if(page <= 0) {
        page = count;
      } else {
        page--
      }

      var active = $(".info.active");

      height = active.height();
      console.log(height);
      $(".content").css("height", height + 55);

      $(".popup").find(".info").removeClass("active");
      $(".popup").find(".info[data-info-id=" + page + "]").addClass("active");
      console.log(page);
  })

  $(".right_arrow").click(function() {
      if(page >= count) {
        page = 0
      } else {
        page++
      }

      var active = $(".info.active");

      height = active.height();
      console.log(height);
      $(".content").css("height", height + 55);

      console.log("right");
      $(".popup").find(".info").removeClass("active");
      $(".popup").find(".info[data-info-id=" + page + "]").addClass("active");
      console.log(page);
  })
})

// $(function() {
//   $(".overlay").each(function(_, overlay) {
//     var $overlay = $(overlay);
//     var $carousel = $overlay.find(".carousel");
//     var $content = $overlay.find(".content");
//     var $ul = $carousel.find("ul");
//
//     $carousel.find(".right_arrow").click(function() {
//       var $first = $ul.find("li").first();
//
//       $ul.animate({
//         left: -222
//       }, 250, function() {
//         $first.detach();
//         $ul.append($first);
//         $ul.css("left", 0);
//       });
//     });
//
//     $carousel.find(".left_arrow").click(function() {
//       var $last = $ul.find("li").last();
//
//       $ul.css("left", -222);
//       $last.detach();
//       $ul.prepend($last);
//       $ul.animate({
//         left: 0
//       }, 250)
//     });
//
//     $ul.find("li").each(function(_, li) {
//
//       var $li = $(li);
//       $li.click(function() {
//         $content.find(".info").removeClass("active");
//         $content.find(".info[data-info-id=" + $li.attr("data-info-id") + "]").addClass("active");
//       });
//     });
//   });
// });
