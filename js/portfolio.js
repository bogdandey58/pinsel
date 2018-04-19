var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 3000;
var navBtnId = 0;
var translateHeight = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    // $('#prev-btn').click(function() {
    //     prevSlide();
    // });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateHeight = -$('#viewport').height() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateHeight + 'px, 0)',
                '-webkit-transform': 'translate(' + translatHeight + 'px, 0)',
                '-ms-transform': 'translate(' + translateHeight + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateHeight = -$('#viewport').height() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateHeight + 'px, 0)',
            '-webkit-transform': 'translate(' + translateHeight + 'px, 0)',
            '-ms-transform': 'translate(' + translateHeight + 'px, 0)',
        });
        slideNow++;
    }
}

// function nextSlide() {
//     if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//         translateHeight = -$('#viewport').height() * (slideCount - 1);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateHeight + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateHeight + 'px, 0)',
//             '-ms-transform': 'translate(' + translateHeight + 'px, 0)',
//         });
//         slideNow = slideCount;
//     } else {
//         translateHeight = -$('#viewport').height() * (slideNow - 2);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateHeight + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateHeight + 'px, 0)',
//             '-ms-transform': 'translate(' + translateHeight + 'px, 0)',
//         });
//         slideNow--;
//     }
// }