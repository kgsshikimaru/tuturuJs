export default function (data, targetPage) {
	let content = '<ul class="pagination">';

	for (let i = 1; i <= data.length; i++) {
		content += `<li data-pagination-id="${i}" class="${targetPage === i ? 'active' : ''}"><a href="#">${i}</a></li>`;
	}
	content += '</ul>';
	$('.pagination-wrapper').empty().append(content);
}
