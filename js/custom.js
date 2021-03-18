$(window) .ready(function(){
    $(".menu").click(function(){
        $(".header").toggleClass("header-menu")
            $(".db").toggleClass("displayblock")
    })


    $(".tooth").hover(function(){$(".toothbox").addClass("swing")})
    $(".tooth").mouseleave(function(){$(".toothbox").removeClass("swing");})
    $(".breast").hover(function(){$(".breastbox").addClass("pulse")})
    $(".breast").mouseleave(function(){$(".breastbox").removeClass("pulse");})
    
    $(".body").hover(function(){$(".bodybox").addClass("bounceIn")})
    $(".body").mouseleave(function(){$(".bodybox").removeClass("bounceIn");})
    
    $(".hair").hover(function(){$(".hairbox").addClass("shake")})
    $(".hair").mouseleave(function(){$(".hairbox").removeClass("shake");})
    
    
    $(".social-icons").hover(function(){
        $(".animat").addClass("flash");
        $(".social-text").addClass("rollOut");
        $(".social-text").addClass("hide");
        $(".icons").addClass("show");
        $(".icons").addClass("rollIn");
    })
    $(".social-icons").mouseleave(function(){
        $(".animat").removeClass("flash");
        $(".social-text").removeClass("rollOut");
        $(".social-text").removeClass("hide");
        $(".icons").removeClass("show");
        $(".icons").removeClass("rollIn");
    })

})


new WOW().init();


