import fillTbodyFunc from '../createTable/fillTbodyFunc'
import sortLoading from './sortLoading'
import preparePaginationPersons from '../createTable/preparePaginationPersons'
import {sortingNumberIncreasing} from './sortingNumberIncreasing'
import {sortingNumberDecreasing} from './sortingNumberDecreasing'
import {sortingStringIncreasing} from './sortingStringIncreasing'
import {sortingStringDecreasing} from './sortingStringDecreasing'

export default function (self) {
	sortingNumberIncreasing.self = self;
	sortingNumberDecreasing.self = self;
	sortingStringIncreasing.self = self;
	sortingStringDecreasing.self = self;

	let setWatcher = $('.js-renderSortWay-container');
	setWatcher.on('click','[data-title-type-value]', MainSortingAction);

	function MainSortingAction (e) {
		setWatcher.off('click','[data-title-type-value]');
		e.preventDefault();

		sortLoading(self);

		let $target = $(e.currentTarget);
		let currentTargetType = $target.data().titleTypeValue;

		/*
		 * Я не сумел придумать другого способа кроме как, eval()
		 * чтобы можно было добираться не неизвестную глубину объектов с заранее не предопределенными свойствами
		 * например data[firstDeep][secondDeep][...]...
		 * перед использованием eval(), предварительные проверки
		 * */
		self.currentJsonKey = $target.data().jsonDeepHistory;
		self.currentJsonKey = self.currentJsonKey.replace( /\|/g, '"]["');
		self.currentJsonKey = '["' + self.currentJsonKey + '"]';
		if (self.currentJsonKey.indexOf("`") !== -1  ||  self.currentJsonKey.length > 50  ||  self.currentJsonKey.indexOf("${") !== -1) {
			throw new Error();
		}

		let listPersons = self.filteredDataNotPagination;

		$target.siblings().removeClass('js-arrow-up js-arrow-down');

		if ($target.hasClass('js-arrow-up') === false) {
			currentTargetType === 'number' ? listPersons.sort(sortingNumberIncreasing) : listPersons.sort(sortingStringIncreasing);
			$target.removeClass('js-arrow-down').addClass('js-arrow-up');
		} else {
			currentTargetType === 'number' ? listPersons.sort(sortingNumberDecreasing) : listPersons.sort(sortingStringDecreasing);

			$target.removeClass('js-arrow-up').addClass('js-arrow-down');
		}
		let countPersons = 0;
		self.dataSplitToPagination = preparePaginationPersons(listPersons,self.maxListInTable, countPersons );
		fillTbodyFunc(self.dataSplitToPagination, self.$tbody, self.currentPage, self);

		clearInterval(self.sortLoadingTimer);
		$('.js-sort-loading').empty().html('Table');
		setWatcher.on('click','[data-title-type-value]', MainSortingAction)
	}
}
