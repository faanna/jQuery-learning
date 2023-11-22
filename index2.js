$('#add_content').click(function () {
	$('#content').append('<p>문단이 append로 추가되었어요</p>');
	$('#content').prepend('<p>문단이 prepend로 추가되었어요</p>');
});
// 콘텐츠 추가하기
//요소.append()은 요소 뒷부분에 ()를 추가합니다
//요소.prepend()는 요소 앞부분에 ()을 추가합니다
$('#change_content').on('click', function () {
	$('.header').text('메리크리스마스');
	$('.text_content').html('<em>해피뉴이얼</em>');
	$('.header').css({
		color: 'red',
		fontSize: '30px',
	});
	//참고:$('#container').find('.grandChild').css('color', 'blue');
	$('.text_content').attr('style', 'border:2px solid blue');
});
/*
콘텐츠 변경하기
요소.text() 는 요소의 텍스트 컨텐츠를 ()변경합니다
요소.html()은 요소의 html을 변경합니다
요소.css({키:값,키:값}) 으로 2개이상의 css를 변경합니다
요소.attr("속성이름","변경할 값") 속성을 변경합니다, 
부여된 속성이 없을경우 추가합니다
*/

$('#remove_content').click(function () {
	$('#content').children().last().remove();
});

//참고 :
//$(".sibling").first().siblings().css('font-weight', 'bold');
//first() <-> last()
/*
요소의 삭제 요소.remove(); 요소를 삭제합니다
추가: 요소.last() 요소들중에 가장 마지막
*/
