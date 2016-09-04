export default function (url, tbody, self) {
	$('.js-watchURL').off('click','[data-url]');

	const $h1 = $('.js-loading');

	tbody.empty();
	$h1.empty().append(`Загрузка...`);
	self.loadingTimer = setInterval( () => {
		$h1.append(`.`);
	}, 500);
	$('.pagination-wrapper').empty();
	return $.get(url)
		.fail(function() {
			console.error( "ошибка при выполнении запроса на сервер" );
		});
}
