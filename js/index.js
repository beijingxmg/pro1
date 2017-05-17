/**
 * Created by Administrator on 2017-05-03.
 */
////轮播图
$(function (){

    changeImg();
    $(window).on('resize',changeImg);
    function changeImg(){
        //获取屏幕可视区域宽
        var clientW=$(window).width();
        if(clientW>768){
            $('.wjs_carousel>.carousel>.carousel-inner>.item').each(function (index,value) {
                $(this).css({
                    'background': 'url(images/slide_0'+(index+1)+'_2000x410.jpg) center center no-repeat',
                    'backgroundSize':'cover'
                });
                $(this).addClass('bigImg');
                $(this).empty();
            });
        }else{
            $('.wjs_carousel>.carousel>.carousel-inner>.item').each(function (index,value) {
                var $image=$('<img>');
                $image.attr('src','images/slide_0'+(index+1)+'_640x340.jpg');
                $(this).removeClass('bigImg');
                $(this).empty().append($image);

            })
        }

    }

});

//产品
$(function () {
    var allWidth=0;
    $('.wjs_product .nav-tabs li[role="presentation"]').each(function (index,value) {
        allWidth+=$(this).outerWidth();
    });
    scrollTip();
    $(window).resize(scrollTip);
   function scrollTip(){
       var parentWidth=$('.wjs_product .nav-tabs').parent().outerWidth();
       console.log(parentWidth);
       console.log(allWidth);
       if(parentWidth<allWidth){
           $('.wjs_product .nav-tabs').outerWidth(allWidth);
       }else{
           $('.wjs_product .nav-tabs').outerWidth('100%');
       }
   }
});