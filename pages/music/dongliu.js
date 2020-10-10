(function(){
    window.onload=function(){


var oMusic=id("music"),
    oLyric=id("lyric"),
    aLi=tag("li",oLyric),
    aBg=getByClass("bg",oLyric,"p");
var aDiv=[];
for(var i=0;i<aLi.length;i++){
    var oBg=document.createElement("div");
    oBg.innerHTML="<p>"+aBg[i].innerHTML+"</p>";
    aLi[i].appendChild(oBg);
    aDiv.push(oBg);
}
console.log(aDiv);
var timer;
var ii=0;
var jj=0;
function play2(elem1,elem2,t1,t2){
    var speed=Math.ceil(elem2.offsetWidth/(t2-t1)*50);
   var timer2=setInterval(function(){
        elem1.style.width=elem1.offsetWidth+speed+"px";
        if(elem1.offsetWidth>=elem2.offsetWidth){
            clearInterval(timer2);
            console.log(3);
        }
    },50);

}

var time=[17.48,20.87,24.00,30.41,39.91,43.37,46.63,52.82,56.5,60.36,62.26,68.09,72.45,75.44
,82.10,83.74,87.42,90.87,92.71,114.86,118.84,121.5,127.82,137.23,140.89,143.79,150.34,153.96,
157.76,159.59,165.61,169.74,173.28,179.86,181.23,184.88,188.29,190.13,195.73,197.61,204];
function play(n){
    timer=setTimeout(function(){
        play2(aDiv[ii],aBg[ii],time[jj]*1000,time[jj+1]*1000);
        ii++;
        clearTimeout(timer);
        jj++;
        if(jj< time.length){
            play(time[jj]-time[jj-1]);
        }
    },n*1000);
}
var oAudio = document.getElementById("audio")
oAudio.addEventListener("play", function () {
    play(time[jj]);
})
oAudio.addEventListener("ended", function () {
    location.reload();
})



    };
})();