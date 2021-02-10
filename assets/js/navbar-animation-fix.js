let $ = document.querySelector.bind(document);

$('#navbarNav').addEventListener('show.bs.collapse', function() {
	$('.banner-principal').style.transform = 'translate(-50%, 10%)';
});

$('#navbarNav').addEventListener('hide.bs.collapse', function() {
	$('.banner-principal').style.transform = 'translate(-50%, -50%)';
});