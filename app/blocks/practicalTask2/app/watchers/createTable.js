export default function (classTable, url) {

	$('.js-watch').on('click','[data-url]', function (e) {
		e.preventDefault();
		classTable.createTable(url[$(this).data().url]);
	})
}
