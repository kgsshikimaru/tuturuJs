export default function (url, tbody, self) {
	$('.js-watchURL').off('click', '[data-url]');  // заблокировать возможность спама сервера во время долгого запроса
	$('.js-targetPersonContainer').empty();// очистить выбранное досье из предыдущей таблицы

	const $h1 = $('.js-loading');

	tbody.empty();  // очистить предудущую таблицу
	$h1.empty().append(`Загрузка...`);
	self.loadingTimer = setInterval(() => {
		$h1.append(`.`);
	}, 500);
	$('.pagination-wrapper').empty();

	return $.ajax({
		type: "GET",
		url: url,
		timeout: self.timeOut
	})
		.fail(function(e) {
			clearInterval(self.loadingTimer);
			clearInterval(self.timeOut);
			console.log(e);
			console.log(e.statusText);
			$h1.empty().append(`Что-то пошло не так, обратитесть к администратору : admin@email.ru`);
		});
}
