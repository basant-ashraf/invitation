$(document).ready(function () {

    $('#toggle .desc').eq(0).css('display', 'block');
    $('#toggle .singer').click(function () {
        $(this).next().slideToggle(500);
        $('#toggle .desc').not($(this).next()).slideUp(500);
    });

    $('#open').click(function () {
        if ($('aside').css('width') == '0px') {
            $('aside').animate({ width: '200px', paddingLeft: '20px', paddingRight: '20px' }, 500);
            $('.layer .content').animate({ marginLeft: '200px' }, 500);
        } else {
            $('aside').animate({ width: '0', paddingLeft: '0', paddingRight: '0' }, 500);
            $('.layer .content').animate({ marginLeft: '0' }, 500);
        }
    });

    $('aside .icon').click(function () {
        $('aside').animate({ width: '0px', paddingLeft: '0', paddingRight: '0' }, 500);
        $('.layer .content').animate({ marginLeft: '0' }, 500);
    });


    let limit = 100;
    $('#formMsg').attr('maxlength', `${limit}`);
    let limitElement = $('#limit');
    $('#formMsg').on('input', function () {
        let inputLength = $(this).val().length;
        let remain = limit - inputLength;
        if (remain > 0) {
            limitElement.html(remain);
        } else {
            limitElement.html('your available character finished !!');
        }
    });


    function countdown() {
        let eventDate = new Date('12-17-2022');
        let today = new Date();
        var diff = (eventDate.getTime()) - (today.getTime());
        var seconds = Math.floor(diff / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24) - 30;
        hours %= 24;
        minutes %= 60;
        seconds %= 60;
        $('#days h3').html(`${days} D`);
        $('#hours h3').html(`${hours} H`);
        $('#minutes h3').html(`${minutes} M`);
        $('#seconds h3').html(`${seconds} S`);
        setTimeout(countdown, 1000);
    }
    countdown();

})
