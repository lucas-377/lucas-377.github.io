jQuery(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 80){
            $("nav#menu").css('background-color', 'black');
            if (jQuery(this).scrollTop() > 120){
                $("nav#menu ul li").css('line-height', '60px');
                $("nav#menu ul li a").css('font-size', '11px');
                $("nav#menu").css('height', '60px');
            }
        }

        else {
            $("nav#menu").css('background-color', 'rgba(0,0,0, 0.0)');
            $("nav#menu").css('height', '80px');
            $("nav#menu ul li").css('line-height', '80px');
            $("nav#menu ul li a").css('font-size', '13px');
        }
    });
});