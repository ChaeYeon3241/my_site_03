gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
    /* logo size */
    var elem = $("header");
    var doc = $(document);

    function scrolled() {
        var threshold = doc.scrollTop() > 10;
        elem.toggleClass("active", threshold);
    }
    $(window).on({
        scroll: scrolled
    });

    /* ham btn */
    $(".hd_menu_ham").click(function () {
        $(".menu").addClass("active");
        $(".menu_bg").addClass("active");
    });
    $(".close_btn, .menu_bg").click(function () {
        $(".menu").removeClass("active");
        $(".menu_bg").removeClass("active");
    });

    /* lang btn */
    $(".menu .mn_box .option .option_box .lang ul.lang_box>li").click(
        function () {
            $(
                ".menu .mn_box .option .option_box .lang ul.lang_box>li"
            ).removeClass("active");
            $(this).toggleClass("active");
        }
    );
    $("input.txt_m").click(function () {
        $("body").removeClass("large");
        $("body").addClass("medium");
    });
    $("input.txt_l").click(function () {
        $("body").removeClass("medium");
        $("body").addClass("large");
    });
    $("input.txt_s").click(function () {
        $("body").removeClass();
    });

    /* email popup */
    $(".info .email").click(function () {
        $("footer .email_popup").addClass("active");
    });
    $("button.pop_close").click(function () {
        $("footer .email_popup").removeClass("active");
    });

    /* scroll top */
    $(function () {
        $(".top_btn").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 500);
        });
    });
});

/* dark mode */
$(document).ready(function () {
    $("#mode_toggle").on("change", function () {
        colorModePreview(this);
    })
});

function colorModePreview(ele) {
    if ($(ele).prop("checked") == true) {
        $('body').addClass('dark');
        $('body').removeClass('basic');
    } else if ($(ele).prop("checked") == false) {
        $('body').addClass('basic');
        $('body').removeClass('dark');
    }
}

/* contents slide */
let mnBox = jQuery(".cont_main .main_box");
let mnList = jQuery(".cont_main .main_box .main_item");
let mnList1 = jQuery(".cont_main .main_box .main_item.main_01");
let mnList2 = jQuery(".cont_main .main_box .main_item.main_02");
let mnList3 = jQuery(".cont_main .main_box .main_item.main_03");
let mnList4 = jQuery(".cont_main .main_box .main_item.main_04");
let mnList5 = jQuery(".cont_main .main_box .main_item.main_05");
let mnList6 = jQuery(".cont_main .main_box .main_item.main_06");

function parentHandler(ele) {
    return jQuery(ele).parent(mnBox);
}

mnList1.on({
    mouseenter: function () {
        mnList2.css("left", "33.3333%");
        mnList3.css("left", "46.6666%");
        mnList4.css("left", "59.9999%");
        mnList5.css("left", "73.3332%");
        mnList6.css("left", "86.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

mnList2.on({
    mouseenter: function () {
        mnList2.css("left", "13.3333%");
        mnList3.css("left", "46.6666%");
        mnList4.css("left", "59.9999%");
        mnList5.css("left", "73.3332%");
        mnList6.css("left", "86.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

mnList3.on({
    mouseenter: function () {
        mnList2.css("left", "13.3333%");
        mnList3.css("left", "26.6666%");
        mnList4.css("left", "59.9999%");
        mnList5.css("left", "73.3332%");
        mnList6.css("left", "86.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

mnList4.on({
    mouseenter: function () {
        mnList2.css("left", "13.3333%");
        mnList3.css("left", "26.6666%");
        mnList4.css("left", "39.9999%");
        mnList5.css("left", "73.3332%");
        mnList6.css("left", "86.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

mnList5.on({
    mouseenter: function () {
        mnList2.css("left", "13.3333%");
        mnList3.css("left", "26.6666%");
        mnList4.css("left", "39.9999%");
        mnList5.css("left", "53.3332%");
        mnList6.css("left", "86.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});

mnList6.on({
    mouseenter: function () {
        mnList2.css("left", "13.3333%");
        mnList3.css("left", "26.6666%");
        mnList4.css("left", "39.9999%");
        mnList5.css("left", "53.3332%");
        mnList6.css("left", "66.6665%");
        parentHandler(this).addClass("on");
        jQuery(this).addClass("active");
    },
    mouseleave: function () {
        mnList2.css("left", "16.66665%");
        mnList3.css("left", "33.33333%");
        mnList4.css("left", "49.99998%");
        mnList5.css("left", "66.66663%");
        mnList6.css("left", "83.33328%");
        parentHandler(this).removeClass("on");
        jQuery(this).removeClass("active");
    }
});