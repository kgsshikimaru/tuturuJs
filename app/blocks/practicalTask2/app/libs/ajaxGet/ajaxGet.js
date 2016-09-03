export default function (url, tbody) {
	tbody.empty().append(`<h1>Загрузка...</h1>`);
	return $.get(url)
		.fail(function() {
			console.error( "ошибка при выполнении запроса на сервер" );
		});
}
