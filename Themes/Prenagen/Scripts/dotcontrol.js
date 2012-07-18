$(document).ready(function(){
	$('.titik').live('click',function(){
		$id = $(this).data('id');
		$(".titik").removeClass('pilihtitik');
		$(this).addClass('pilihtitik');
	});
})
