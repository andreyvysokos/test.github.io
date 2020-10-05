$(document).ready(function(){
	$('.collapse-btn').click(function(){
		$('body').toggleClass('js-open');
	})
	$('.backdrop').click(function(){
		$('body').removeClass('js-open');
	})
});