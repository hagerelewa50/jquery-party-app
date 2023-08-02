let widthLeft = $(".bar-item").outerWidth(true)
    $(".bar").animate({left:`-${widthLeft}px`})

$(".bar-icon,.close-icon").click(function(){
    let left = $(".bar").css("left")
    if (left=="0px"){
        let widthLeft = $(".bar-item").outerWidth(true)
        $(".bar").animate({left:`-${widthLeft}px`})
        $(".home-container").animate({marginLeft:"0px"})

    }else{
        $(".bar").animate({left:"0px"})
        $(".home-container").animate({marginLeft:`${widthLeft}px`})
                               
    }
})

//        Details

$(".singer-body").first().css("display","block")
$(".singer-title").click(function(){
    $(this).next().slideToggle()
    $(".singer-body").not($(this).next()).slideUp()
})

//    Duration


$(document).ready(function(){
   var x =  setInterval(function(){
        var countDownDate = new Date("April 5, 2023 15:37:25").getTime();
        var now = new Date().getTime()
        var timeleft = countDownDate - now
        var days = Math.floor(timeleft/(1000*24*60*60))
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        $(".day").html(days +" "+"D")
        $(".hour").html(hours +" "+"h")
        $(".min").html(minutes +" "+"m")
        $(".sec").html(seconds +" "+"s");
        if(timeleft < 0 ){
            clearInterval(x)
        }
    },1000)
  });



//    contact

  var max = 100
  $("textarea").keyup(function(){
   let num = $("textarea").val().length
   let count = max-num
    if(count<=0){
        $("#char").text("your available character finished")
    }else{
        $("#char").text(count)
    }
  })
