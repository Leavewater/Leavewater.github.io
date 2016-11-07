(function (){
    var showList=document.getElementsByClassName("nav_show_list")[0];
    var list=document.getElementsByClassName("nav_list")[0];
    showList.onmouseover=function(){
        list.style.display="block";
    }
    showList.onmouseout=function(){
        list.style.display="none";
    }
})()
$(function() {
    var num = 0;
    var int=null;
    var list=$(".banner ol li");
    var banner=$(".banner_box li")

    list.click(function() {
        if (!$(this).hasClass("active")){
            $(this).addClass("active")
                   .siblings().removeClass("active");

            banner.eq($(this).index()).fadeIn(400)
                          .siblings().fadeOut(400);
            num=$(this).index();
        }
    });

    function autoplay(){
        num++;
        if(num>2){
            num=0;
        }
        list.eq(num).addClass("active")
            .siblings().removeClass("active");
        banner.eq(num).fadeIn(400)
                      .siblings().fadeOut(400);
    };
     int=setInterval(autoplay,3000);

    $(".banner").mouseenter(function(){
        clearInterval(int);
    }).mouseleave(function(){
        int=setInterval(autoplay,3000);
    })
});
