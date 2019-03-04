/* 
    Animate and change opacity speachbubbles. 
    =========================================== 
*/


$(".one").hover(function(){
    $(".container, .two, .three, .four, .five").toggleClass("brightness");
})
$(".one").hover(function(){
    $(".speachBubbleFour").css("opacity", "1");
    $(".sB4Inner").css("opacity", "1");
    }, function(){
    $(".speachBubbleFour").css("opacity", "");
    $(".sB4Inner").css("opacity", "");
});

/* 
    Two
    =========================================== 
*/

$(".two").hover(function(){
    $(".container, .one, .three, .four, .five").toggleClass("brightness");
})
$(".two").hover(function(){
    $(".speachBubbleOne").css("opacity", "1");
    $(".sB1Inner").css("opacity", "1");
    }, function(){
    $(".speachBubbleOne").css("opacity", "");
    $(".sB1Inner").css("opacity", "");
});

/* 
    Three 
    =========================================== 
*/

$(".three").hover(function(){
    $(".container, .one, .two, .four, .five").toggleClass("brightness");
})
$(".three").hover(function(){
    $(".speachBubbleFive").css("opacity", "1");
    $(".sB5Inner").css("opacity", "1");
    }, function(){
    $(".speachBubbleFive").css("opacity", "");
    $(".sB5Inner").css("opacity", "");
});

/* 
    Four
    =========================================== 
*/

$(".four").hover(function(){
    $(".container, .one, .two, .three, .five").toggleClass("brightness");
})
$(".four").hover(function(){
    $(".speachBubbleTwo").css("opacity", "1");
    $(".sB2Inner").css("opacity", "1");
    }, function(){
    $(".speachBubbleTwo").css("opacity", "");
    $(".sB2Inner").css("opacity", "");
});

/* 
    Five
    =========================================== 
*/

$(".five").hover(function(){
    $(".container, .one, .two, .three, .four").toggleClass("brightness");
})
$(".five").hover(function(){
    $(".speachBubbleThree").css("opacity", "1");
    $(".sB3Inner").css("opacity", "1");
    }, function(){
    $(".speachBubbleThree").css("opacity", "");
    $(".sB3Inner").css("opacity", "");
});