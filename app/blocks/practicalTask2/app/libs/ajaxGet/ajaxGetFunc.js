export default function (url,thead, tbody, self) {
	$('.js-watchURL').off('click', '[data-url]');  // заблокировать возможность спама сервера во время долгого запроса
	$('.js-targetPersonContainer').empty();// очистить выбранное досье из предыдущей таблицы

	const $h1 = $('.js-loading');

	thead.empty();  // очистить предудущую таблицу
	tbody.empty();  // очистить предудущую таблицу
	$('.js-searchForm-wrapper').empty(); // очистить предыдущую форму поиска (полностью убрать на время загрузки)
	$('.pagination-wrapper').empty(); // очистить пагинацию предудуей таблицы

	$h1.empty().append('<h3>Загрузка</h3>');
	self.loadingAjaxTimer = setInterval(() => {
		$h1.append('<span>.</span>');
	}, 500);

	return $.ajax({
		type: "GET",
		url: url,
		timeout: self.timeOut
	})
		.fail(function(e) {
			clearInterval(self.loadingAjaxTimer);
			clearInterval(self.timeOut);
			console.log(e);
			console.log(e.statusText);
			$h1.empty().append(`Что-то пошло не так, обратитесть к администратору : admin@email.ru`);
		});
}
