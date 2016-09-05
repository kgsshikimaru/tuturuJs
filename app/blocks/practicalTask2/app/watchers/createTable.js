export default function (self, url) {
	$('.js-watchURL').on('click','[data-url]', function (e) {
		e.preventDefault();
		self.createTable(url[$(this).data().url]);
	})
}
