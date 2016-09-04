import fillTbodyFunc from '../libs/createTable/fillTbodyFunc'
export default function (self) {
	$('.js-watchPagination').on('click', '[data-pagination-id]', function (e) {
		e.preventDefault();
		let $curTarget = $(e.currentTarget);

		if ($curTarget.data().paginationId - 1 === self.currentPage) return;
		let dataId =$curTarget.data().paginationId;

		//Синхронизация пагинаций вверху и внизу страницы
		$(`[data-pagination-id=${dataId}]`).addClass('active').siblings().removeClass('active');

		// поправка на то что индексация массива со списком досье начинается с 0
		self.currentPage = $curTarget.data().paginationId - 1;

		fillTbodyFunc(self.dataSplitToPagination, self.$tbody, self.currentPage, self);
	})
}
