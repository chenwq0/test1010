requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
define(["jquery"],function($){
    var $introduce=$("#introduce");
    var $p=$("p",$introduce);
    var nowindex=0;
    function play(){
        nowindex=(nowindex+1)%$p.length;
        $introduce.animate({
            width:0
        },700,"swing",function(){
            $p.eq(nowindex).addClass("selected").siblings().removeClass("selected");
        });
        $introduce.animate({
            width:$p.eq(nowindex).css("width")
        },700);
    }
    return play;
});