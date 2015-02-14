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