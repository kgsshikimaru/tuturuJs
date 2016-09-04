export default function (self) {
	self.sortLoadingTimer = setInterval(function  () {
		$('.js-sort-loading').append('<span>.</span>')
	},500)
}
