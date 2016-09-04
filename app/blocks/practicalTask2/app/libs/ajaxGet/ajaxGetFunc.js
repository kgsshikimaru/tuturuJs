export default function (url, tbody, self) {
	$('.js-watchURL').off('click','[data-url]');  // заблокировать возможность спама сервера во время долгого запроса
	$('.js-targetPersonContainer').empty();// очистить выбранное досье из предыдущей таблицы

	const $h1 = $('.js-loading');

	tbody.empty();  // очистить предудущую таблицу
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
