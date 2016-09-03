export default function (self) {
	$('.js-watchPagination').on('click', '[data-id]', function (e) {
		e.preventDefault();
		let $curTarget = $(e.currentTarget);

		if ($curTarget.data().id - 1 === self.currentPage) return;

		$curTarget.addClass('active').siblings().removeClass('active');
		self.currentPage = $curTarget.data().id - 1;   // поправка на то что индексация
		// массива с досье начинается с 0




		self.fillTable(self.sliceArrPersons, self.currentPage)
	})
}
