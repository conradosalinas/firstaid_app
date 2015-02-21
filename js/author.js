/*-------------------------------------------
| Interactive Media - Week 06 :: Homework
-------------------------------------------*/
function slide_vert() {
	var firstSlide = $('#slides img:eq(0)');

	firstSlide.delay(2000).animate({'margin-top':'-300px'},1000, onceCooked);

	function onceCooked() {
		firstSlide.appendTo('#slides');
		firstSlide.css({'margin-top':'0px'});
		slide_vert(); //keep the party going
	}
}
// get the party started
slide_vert();

/*-------------------------------------------
| Interactive Media - Week 07 :: Homework
-------------------------------------------*/
function size() {
	$('.glyphicon-heart').animate({'font-size':'230px'},200);
}
$('.glyphicon-heart').click(size);
// - - -
function move() {
	$('.glyphicon-arrow-right').animate({'margin-left':'600px'},200);
}
$('.glyphicon-arrow-right').click(move);
// - - -
$('.glyphicon-apple').mouseover(function() {
	$('.glyphicon-apple').css({'color':'green'},500);
});