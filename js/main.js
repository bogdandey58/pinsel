////////////////////////////////появление/////////////////////////////////
$('.logo').fadeOut(0).delay(2000).fadeIn(400);
$('.studiotext').fadeOut(0).delay(1500).fadeIn(400);
$('.downbtn').fadeOut(0).delay(2500).fadeIn(400);





$(".pinselheader").fadeToggle(0) 
$(".pinselheader").fadeToggle(1100) 
$(".trianglelheader").fadeToggle(0)
$(".trianglelheader").fadeToggle(1300)
$(".triangleline").fadeToggle(0)
$(".triangleline").fadeToggle(1300)





var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}






///////////////////////////////////плавный скролл///////////////////////////////////



$(document).ready(function(){
    $("body").on("click","a", function (event) {
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
    $(".store").fadeToggle(100)
});

$('.vs').on('mouseover', function() {
    $('.verstka').css('display','block');
    $('.verstka').css('opacity','1');
    $(".verstka").fadeToggle(0) 
    $(".verstka").fadeToggle(100)
});

$('.lp').on('mouseover', function() {
    $('.lendinf').css('display','block');
    $('.lendinf').css('opacity','1');
    $(".lendinf").fadeToggle(0) 
    $(".lendinf").fadeToggle(100)
});

$('.brend').on('mouseover', function() {
    $('.firmstyle').css('display','block');
    $('.firmstyle').css('opacity','1');
    $(".firmstyle").fadeToggle(0) 
    $(".firmstyle").fadeToggle(100) 
    
});

$('.des').on('mouseover', function() {
    $('.designpng').css('display','block');
    $('.designpng').css('opacity','1');
    $(".designpng").fadeToggle(0) 
    $(".designpng").fadeToggle(100) 
});

$('.del').on('mouseover', function() {
    $('.devlogo').css('display','block');
    $('.devlogo').css('opacity','1');
    $(".devlogo").fadeToggle(0) 
    $(".devlogo").fadeToggle(100) 
});

$('.smm').on('mouseover', function() {
    $('.smmpng').css('display','block');
    $('.smmpng').css('opacity','1');
    $(".smmpng").fadeToggle(0) 
    $(".smmpng").fadeToggle(500) });

$('.seo').on('mouseover', function() {
    $('.seopng').css('display','block');
    $('.seopng').css('opacity','1');
    $(".seopng").fadeToggle(0) 
    $(".seopng").fadeToggle(100) 
});

$('.vved').on('mouseover', function() {
    $('.inputservpng').css('display','block');
    $('.inputservpng').css('opacity','1');
    $(".inputservpng").fadeToggle(0) 
    $(".inputservpng").fadeToggle(100) 
});

////////////////////////offmouse///////////////////////////

$('.im').on('mouseout', function() {
    $('.store').css('display','none');
});

$('.vs').on('mouseout', function() {
    $('.verstka').css('display','none');
});

$('.lp').on('mouseout', function() {
    $('.lendinf').css('display','none');
});

$('.brend').on('mouseout', function() {
    $('.firmstyle').css('display','none');
});

$('.des').on('mouseout', function() {
    $('.designpng').css('display','none');
});

$('.del').on('mouseout', function() {
    $('.devlogo').css('display','none');
});

$('.smm').on('mouseout', function() {
    $('.smmpng').css('display','none');
});

$('.seo').on('mouseout', function() {
    $('.seopng').css('display','none');
});

$('.vved').on('mouseout', function() {
    $('.inputservpng').css('display','none');
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





function bumbl1(){
document.getElementById("statuyaMan").style.display="none";
document.getElementById("statuyaLineBlock").style.display="block";
}
// Функция которая запрещает скачивать картинки с сайта
var img = document.getElementsByTagName('img');for(var i in img){img[i].oncontextmenu = function() { return false;  }}

var olo = 100;
// function  plus() {
// olo+10;
// }

// setTimeout(plus(), 1000);

// function pfoneBlock(){
//     document.getElementById("pfoneBlockForm").style.display="block";
// }

// setInterval(IncreaseHeight(),2000);

// function pfoneBlockOff(){
//     document.getElementById("pfoneBlockForm").style.display="block";
// }

function myMove(){
        var elem = document.getElementById('pfoneBlockForm');
        var pos = -100;
        var id = setInterval(frame,0.3);
        function frame(){
            if(pos == 0){
                clearInterval(id);
            } 
            else {
                pos ++;
                elem.style.top = pos + "%";
                
            }
        }
    }
    function myMov2(){
        var elem = document.getElementById('pfoneBlockForm');
        var pos = 0;
        var id = setInterval(frame,0.3);
        function frame(){
            if(pos == -100){
                clearInterval(id);
            } 
            else {
                pos --;
                elem.style.top = pos + "%";
                
            }
        }
  
    }
// кнопки в блоке  О СТУДИИ

var palm = document.getElementById('palm');
var mz = document.getElementById('mz');
var man = document.getElementById('man');

var palmImg = document.getElementById('palmImg');
var mzImg = document.getElementById('mzImg');
var manImg = document.getElementById('manImg');

var PushButtons1 = document.getElementById('PushButtons1');
var PushButtons2 = document.getElementById('PushButtons2');
var PushButtons3 = document.getElementById('PushButtons3');



// При нажатии на ПЕРВУЮ кнопку
 var mzOpacity = 0;
 var manOpacity = 0;
 var palmOpacity = 0;
PushButtons1.onclick = function sous(){

        var id3 = setInterval(frame2,150);
        function frame2(){
        if(mzOpacity == 0 && palmOpacity == 0){
            clearInterval(id3); 
            } 

         if(mzOpacity == 0 && palmOpacity == 0){
              var id = setInterval(frame,150);
                function frame(){
            if(manOpacity == 9 ){
                clearInterval(id);
               manImg.style.opacity =1;
            }
            else {
                manOpacity ++;
               manImg.style.opacity = 0+"." + manOpacity;
               
               }
             }
           }

            else {
            mzOpacity --;
            palmOpacity --;
            mzImg.style.opacity = 0+"." + mzOpacity;
            palmImg.style.opacity = 0+"." + palmOpacity;

             
            }  
          } 
       }





// При нажатии на вторую кнопку
PushButtons2.onclick = function sous2(){
// palm.style.opacity = 0; 
// mz.style.opacity = 0;
// man.style.opacity = 0;

        var id2 = setInterval(frame1,50);
        function frame1(){
        if(palmOpacity == 0 ){
            clearInterval(id2); 
            } 

        if(palmOpacity == 0){
              var id = setInterval(frame4,50);
                function frame4(){
            if(mzOpacity == 9 ){
                clearInterval(id);
               mzImg.style.opacity =1;
            }
            else {
                mzOpacity ++;
               mzImg.style.opacity = 0+"." + mzOpacity;
               
               }
             }
           }

            else {
                palmOpacity --;
            palmImg.style.opacity = 0+"." + palmOpacity;
             
            }  
          } 
        }  

