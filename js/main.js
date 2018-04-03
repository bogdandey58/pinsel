////////////////////////////////появление/////////////////////////////////
$('.logo').fadeOut(0).delay(2000).fadeIn(400);
$('.studiotext').fadeOut(0).delay(1500).fadeIn(400);
$('.downbtn').fadeOut(0).delay(2500).fadeIn(400);



$(function(){
  $('.repeat').click(function(){
      var classes =  $(this).parent().attr('class');
        $(this).parent().attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){ 
          $(indicator).parent().addClass(classes);
        }, 86);
    });
});


$(".pinselheader").fadeToggle(0) 
$(".pinselheader").fadeToggle(1100) 
$(".trianglelheader").fadeToggle(0)
$(".trianglelheader").fadeToggle(1300)
$(".triangleline").fadeToggle(0)
$(".triangleline").fadeToggle(1300)




///////////////////////////////////плавный скролл///////////////////////////////////

$(document).ready(function(){
    $("body").on("click","a", function (event) {
       event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
///////////////////////////////движение за мышью//////////////////////////////////////////
jQuery(document).ready(function(e){
   var left = 0,
   top = 0,
   element = jQuery('.services'),
   offset =  { left: element.offset().left, top: element.offset().top };
   element.bind('mousemove', function(e){
      left = (e.pageX-offset.left);
      top = (e.pageY-offset.top);
      jQuery(this).css({
          backgroundPosition: '-'+(0.01*left)+'px'
          
      });
    });
});
// jQuery(document).ready(function(e){
//    var left = 0,
//    top = 0,
//    element = jQuery('.pinselheader'),
//    offset =  { left: element.offset().left, top: element.offset().top };
//    element.bind('mousemove', function(e){
//       left = (e.pageX-offset.left);
//       top = (e.pageY-offset.top);
//       jQuery(this).css({
//           backgroundPosition: '-'+(0.05*left)+'px -'+(0.05*top)+'px'
          
//       });
//     });
// });
// jQuery(document).ready(function(e){
//    var left = 0,
//    top = 0,
//    element = jQuery('.pinselheader'),
//    offset =  { left: element.offset().left, top: element.offset().top };
//    element.bind('mousemove', function(e){
//       left = (e.pageX-offset.left);
//       top = (e.pageY-offset.top);
//       jQuery(this).css({
//           backgroundPosition: '-'+(0.01*left)+'px -'+(0.01*top)+'px'
          
//       });
//     });
// });
//////////////////////////////services hover effect////////////////////////////////
$('.apulse').on('mouseover', function() {
    $('.pulse').css('display','none');
});
$('.apulse').on('mouseout', function() {
    $('.pulse').css('display','block');
});
$('.apulse').on('mouseover', function() {
    $('.pulsetwo').css('display','block');
});
$('.apulse').on('mouseout', function() {
    $('.pulsetwo').css('display','none');
});



$('.im').on('mouseover', function() {
    $('.store').css('display','block');
    $('.store').css('opacity','1');
    $(".store").fadeToggle(0) 
    $(".store").fadeToggle(500)
    // $('.statuya').css('display','none');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.vs').on('mouseover', function() {
    $('.verstka').css('display','block');
    $('.verstka').css('opacity','1');
    $(".verstka").fadeToggle(0) 
    $(".verstka").fadeToggle(400) 
    // $('.statuya').css('display','none');
});

$('.lp').on('mouseover', function() {
    $('.lendinf').css('display','block');
    $('.lendinf').css('opacity','1');
    $(".lendinf").fadeToggle(0) 
    $(".lendinf").fadeToggle(500) 
    // $('.statuya').css('display','none');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.brend').on('mouseover', function() {
    $('.firmstyle').css('display','block');
    $('.firmstyle').css('opacity','1');
    $(".firmstyle").fadeToggle(0) 
    $(".firmstyle").fadeToggle(500) 
    // $('.statuya').css('display','none');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.des').on('mouseover', function() {
    $('.designpng').css('display','block');
    $('.designpng').css('opacity','1');
    $(".designpng").fadeToggle(0) 
    $(".designpng").fadeToggle(500) 
    // $('.statuya').css('display','none');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.del').on('mouseover', function() {
    $('.devlogo').css('display','block');
    $('.devlogo').css('opacity','1');
    $(".devlogo").fadeToggle(0) 
    $(".devlogo").fadeToggle(500) 
    // $('.statuya').css('display','none');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.smm').on('mouseover', function() {
    $('.smmpng').css('display','block');
    $('.smmpng').css('opacity','1');
    $(".smmpng").fadeToggle(0) 
    $(".smmpng").fadeToggle(500) 
    // $('.statuya').css('display','none');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.seo').on('mouseover', function() {
    $('.seopng').css('display','block');
    $('.seopng').css('opacity','1');
    $(".seopng").fadeToggle(0) 
    $(".seopng").fadeToggle(500) 
    // $('.statuya').css('display','none');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.vved').on('mouseover', function() {
    $('.inputservpng').css('display','block');
    $('.inputservpng').css('opacity','1');
    $(".inputservpng").fadeToggle(0) 
    $(".inputservpng").fadeToggle(500) 
    // $('.statuya').css('display','none');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

////////////////////////offmouse///////////////////////////

$('.im').on('mouseout', function() {
    $('.store').css('display','none');
    // $('.statuya').css('display','block');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.vs').on('mouseout', function() {
    $('.verstka').css('display','none');
    // $('.statuya').css('display','block');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.lp').on('mouseout', function() {
    $('.lendinf').css('display','none');
    // $('.statuya').css('display','block');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.brend').on('mouseout', function() {
    $('.firmstyle').css('display','none');
    // $('.statuya').css('display','block');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.des').on('mouseout', function() {
    $('.designpng').css('display','none');
    // $('.statuya').css('display','block');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.del').on('mouseout', function() {
    $('.devlogo').css('display','none');
    // $('.statuya').css('display','block');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.smm').on('mouseout', function() {
    $('.smmpng').css('display','none');
    // $('.statuya').css('display','block');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.seo').on('mouseout', function() {
    $('.seopng').css('display','none');
    // $('.statuya').css('display','block');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});

$('.vved').on('mouseout', function() {
    $('.inputservpng').css('display','none');
    // $('.statuya').css('display','block');
    // $(".statuya").fadeToggle(0) 
    // $(".statuya").fadeToggle(400)
});



///////////////////////// CALLBACK //////////////////////////////////////

(function ($) {

    $.infieldLabel = function (el, options) {
        var base = this;
        base.$el = $(el);
        base.el = el;
        base.$el.data("infieldLabel", base);
        base.$input = null;

        base.init = function () {
            base.options = $.extend({}, $.infieldLabel.defaultOptions, options);

            base.setup();
        };

        base.setup = function () {
            base.$input = base.$el.find("input[type=text], input[type=password]");
            base.blur();
            base.bind();
        };
        base.bind = function () {
            base.$input.on("focus.infield", function () {
                base.$el.removeClass(base.options.hideClass)
                    .addClass(base.options.focusClass);
            }).on("blur.infield change.infield", function () {
                base.blur();
            });
        };
        base.blur = function () {
            if (base.$input.val() !== "") {
                base.$el.removeClass(base.options.focusClass)
                    .addClass(base.options.hideClass);

            } else {
                base.$el.removeClass(base.options.focusClass + " " + base.options.hideClass);
            }
        };
        base.init();
    };

    $.infieldLabel.defaultOptions = {
        focusClass: "placeholder-focus",
        hideClass: "placeholder-hide"
    };

    $.fn.infieldLabel = function (options) {
        this.each(function () {
            (new $.infieldLabel(this, options));
        });
    };

})(jQuery);

$('.infield-label').infieldLabel();


function myFunction() {
    var h = window.innerHeight;
    document.getElementById("demo").innerHTML = "Height: " + h;
    }
    elem.scrollTop += h


function bumbl1(){
document.getElementById("statuyaLineBlock").style.opacity=0;
document.getElementById("statuyaLine").style.display="block";}
  function bumbl2(){
document.getElementById("statuyaLineBlock").style.opacity=1;
document.getElementById("statuyaLine").style.display="none";} 



