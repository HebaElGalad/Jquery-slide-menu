$('.btn').on('click', showContent);

function showContent(event) {
	event.stopPropagation();
	var clickedElement = $(event.target);
	if (clickedElement.is('h1')) {
		clickedElement.next().toggle("100");
	}
}
