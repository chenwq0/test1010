requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
define(["jquery","jquery.easing.1.3"],function($){
    var $contact=$('#contact');
    var $content=$('.content',$contact);
    var $num=$('.num',$contact);
    var $nums=$("li",$num);
    var $contents=$('li',$content);
    var imagewidth=$contents.outerWidth();
    function changeImg(index) {
        $content.stop().animate({
            left:(-index*imagewidth)+"px"
        },800,"easeInOutCirc");
        $nums.eq(index).addClass("selected").siblings().removeClass("selected");
    }
    return changeImg;
});