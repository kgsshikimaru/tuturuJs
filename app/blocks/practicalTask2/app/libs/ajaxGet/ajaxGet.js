export default function (url, tbody) {
	tbody.empty().append(`<h1>Загрузка...</h1>`);
	$('.pagination-wrapper').empty();
	return $.get(url)
		.fail(function() {
			console.error( "ошибка при выполнении запроса на сервер" );
		});
}
