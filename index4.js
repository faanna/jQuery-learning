$('#show_btn').click(function () {
	$('#box').show();
});
$('#hide_btn').click(function () {
	$('#box').hide();
});

$('#fadein').click(function () {
	$('#box').fadeIn(2000);
});
$('#fadeout').click(function () {
	$('#box').fadeOut(2000);
});

$('#animate_btn').click(function () {
	//$("#box").animate(적용할내용,시간,적용이완료된후 작업)
	$('#box').animate(
		{
			width: '300px',
			height: '300px',
		},
		2000,
		function () {
			$(this).animate(
				{
					width: '100px',
					height: '100px',
				},
				2000
			);
		}
	);

	// $('#box').animate(내용,2000,이후내용 );
});
