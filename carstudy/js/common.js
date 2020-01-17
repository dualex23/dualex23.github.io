$(document).ready(function() {  

  //Менюшка на планшетах и телефонов
  $(".btn_mnu").click(function() {
  $(this).toggleClass("active");
  $(".btn-side").toggleClass("active");
});


  //Слайдер
  $('.carousel').carousel({
  interval: 10000
  });
  
  //Съезжающее меню
  var options = {
    offset: 200
  }
  var header = new Headhesive('.main-header__topline', options);

  //Карта гугл
  

  // Всплывающее окошко при отправке отзыва
  $("#btn-review").click(function() {
    var commentName = $('input[name="name"]').val();
    var commentTitle = $('input[name="title"]').val();
    var commentMessage = $('textarea[name="message"]').val();
    $('#testimonial-add').prependTo('div#comments').css("display", "block");
    $('#commentTitle').append(commentTitle);
    $('#commentName').append(commentName);
    $('#commentMessage').append(commentMessage);
    //$('form input[type="text"], form textarea').val('');
  });

  // Всплывающие окна в круге
  $("#cap").hover(function() {
    $(".cap").slideToggle();
  });
  $("#cog").hover(function() {
    $(".cog").slideToggle();
  });
  $("#tach").hover(function() {
    $(".tach").slideToggle();
  });
  $("#car").hover(function() {
    $(".car").slideToggle();
  });
  $("#univ").hover(function() {
    $(".univ").slideToggle();
  });

  //Цели для Яндекс.Метрики и Google Analytics
  $(".count_element").on("click", (function() {
    ga("send", "event", "goal", "goal");
    yaCounterXXXXXXXX.reachGoal("goal");
    return true;
  }));

  //SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  //Аякс отправка форм
  $("#callback").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      alert("Спасибо за заявку!");
      setTimeout(function() {
      }, 1000);
    });
    return false;
  });

});

