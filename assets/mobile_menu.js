$(document).ready(function () {

  $(".mobile-menu .MenuName.level1, .mobile-menu .MenuName.level2, .mobile-menu .MenuName.level3").each(function(){
    $(this).append('<span class="ttclose"><a href="javascript:void(0)"></a></span>');
  });

  $('.mobile-menu .site-nav__dropdown').css('display','none');
  $('.mobile-menu .itemChildMenu').css('display','none');
  $('.mobile-menu .itemGrandChildMenu').css('display','none');

  $(document).ready(function(){
    $('.mobile-menu .MenuName.level1 span').click(function() { 
      if ($(this).hasClass('ttopen')) {varche = true} else {varche = false};
      if(varche == false){
        $(this).addClass("ttopen");
        $(this).removeClass("ttclose");
        $(this).parent().parent().find('.site-nav__dropdown').slideDown();
        varche = true;
      } else 
      {	
        $(this).removeClass("ttopen");
        $(this).addClass("ttclose");
        $(this).parent().parent().find('.site-nav__dropdown').slideUp();
        varche = false;
      }
    });

    $('.mobile-menu .MenuName.level2 span').click(function() { 
      if ($(this).hasClass('ttopen')) {varche = true} else {varche = false};
      if(varche == false){
        $(this).addClass("ttopen");
        $(this).removeClass("ttclose");
        $(this).parent().parent().find('.itemChildMenu').slideDown();
        varche = true;
      } else 
      {	
        $(this).removeClass("ttopen");
        $(this).addClass("ttclose");
        $(this).parent().parent().find('.itemChildMenu').slideUp();
        varche = false;
      }
    });

    $('.mobile-menu .MenuName.level3 span').click(function() { 
      if ($(this).hasClass('ttopen')) {varche = true} else {varche = false};
      if(varche == false){
        $(this).addClass("ttopen");
        $(this).removeClass("ttclose");
        $(this).parent().parent().find('.itemGrandChildMenu').slideDown();
        varche = true;
      } else 
      {	
        $(this).removeClass("ttopen");
        $(this).addClass("ttclose");
        $(this).parent().parent().find('.itemGrandChildMenu').slideUp();
        varche = false;
      }
    });
  });


});