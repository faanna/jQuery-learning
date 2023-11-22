$(document).ready(function () {
	$('#container').children().css('border', '2px solid red');
	//자식요소찾기 $('#container').children()
	//container의 직계자식요소인 child1,2,3을 모두 선택합니다
	$('.grandChild').parent().css('background-color', 'yellow');
	//부모요소 찾기
	//$('.grandChild').parent() 해당부모인 첫번쨰 child를
	//노란색으로 바꿈
	$('#container').find('.grandChild').css('color', 'blue');
	//find는 자손들중 모두에서 찾습니다
	//children은 직계자식요소중에서 찾습니다

	$('.sibling').first().siblings().css('font-weight', 'bold');
	//first() 첫번쨰요소 1인덱스요소
	//앞의요소.siblings() 앞의요소의 형제요소를 지칭합니다
});

// let main = document.querySelector('main');
// $(main);
