$('#click_btn').click(function () {
	$('#event_msg').text('버튼이 클릭되었어요');
});

$('#input').on('input', function () {
	$('#event_msg').text('작성한 내용:' + $(this).val());

	//$(this)는 이벤트 함수가 부여된 대상인 $('#input')을 지칭
	//요소.val()은 요소의 value를 가지고 옵니다
	//input이라는 이벤트는? 인풋요소에 변경이일어나면 발생합니다
});
