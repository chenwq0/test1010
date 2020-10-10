requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
require(["jquery","play","changeimg"],function($,play,changeimg){
    setTimeout(function(){
        play();
        setInterval(function(){
            play();
        },2800);
},1400);
    var oPortfolio=document.getElementById("portfolio");
    var aLi=oPortfolio.getElementsByTagName("li");
    console.log(aLi);
    for(var i=0;i<aLi.length;i++){
        aLi[i].style.backgroundImage="url(img/"+(i+1)+".jpg)";
    }
    var $contact=$('#contact');
    var $content=$('.content',$contact);
    var $num=$('.num',$contact);
    var $nums=$("li",$num);
    $nums.on("mouseover",function(){
        changeimg($(this).index());
    });



});