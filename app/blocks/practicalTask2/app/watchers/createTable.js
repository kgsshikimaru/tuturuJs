export default function (classTable, url) {

	$('.js-watchURL').on('click','[data-url]', function (e) {
		e.preventDefault();
		classTable.createTable(url[$(this).data().url]);
	})
}
