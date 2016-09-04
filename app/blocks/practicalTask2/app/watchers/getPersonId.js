import renderTargetPersonInfo from '../libs/renderTargetPersonInfo/renderTargetPensonInfo'

export default function getPersonId(self) {
	$('.js-watchCurrentPerson').on('click', '[data-person-id]', function (e) {
		e.preventDefault();
		let $curTarget = $(e.currentTarget);
		$curTarget.addClass('active').siblings().removeClass('active');

		let targetPersonNum = self.maxListInTable * self.currentPage + $curTarget.data().personId;
		self.targetPerson = self.filteredDataNotPagination[targetPersonNum];
		renderTargetPersonInfo(self.targetPerson)
	})
}
