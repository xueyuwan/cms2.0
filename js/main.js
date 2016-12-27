$(function(){ 

$(window).scroll(function() {       //页面滚动显示元素。
if($(window).scrollTop()>=400){
$(".back-top").fadeIn(500); 
}else{
$(".back-top").fadeOut(500); 
} 
}); 

$('.back-top').click(function (e) {
  e.preventDefault();
  $('html, body').animate({scrollTop: 0}, 800);
});



})