import fillTbodyFunc from '../createTable/fillTbodyFunc'
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

	$('.js-renderSortWay-container').on('click','[data-title-type-value]', function (e) {
		e.preventDefault();
		let $target = $(e.currentTarget);
		let currentTargetType = $target.data().titleTypeValue;

		/*
		 * Я не сумел придумать другого способа кроме как, eval()
		 * чтобы можно было добираться не неизвестную глубину объектов с заранее не предопределенными свойствами
		 * например data[firstDeep][secondDeep][...]...
		 * Я так понимаю если обезопасить от ` и не пускать строки больше 50 символов,
		 * плюс доступ внутрь только через свойство объекта и в замыкании + внутри if
		 * */

		self.currentJsonKey = $target.data().jsonDeepHistory;
		self.currentJsonKey = self.currentJsonKey.replace( /\|/g, '"]["');
		self.currentJsonKey = '["' + self.currentJsonKey + '"]';
		if (self.currentJsonKey.indexOf("`") !== -1  ||  self.currentJsonKey.length > 50) throw new Error();




		$target.siblings().removeClass('js-arrow-up js-arrow-down');

		if ($target.hasClass('js-arrow-up') === false) {

			if (currentTargetType === 'number') {
				self.filteredDataNotPagination.sort(sortingNumberIncreasing);
			} else {
				self.filteredDataNotPagination.sort(sortingStringIncreasing);
			}
			$target.removeClass('js-arrow-down').addClass('js-arrow-up');
		} else {
			if (currentTargetType === 'number') {
				self.filteredDataNotPagination.sort(sortingNumberDecreasing);
			} else {
				self.filteredDataNotPagination.sort(sortingStringDecreasing);
			}
			$target.removeClass('js-arrow-up').addClass('js-arrow-down');
		}
		let countPersons = 0;
		console.log(self.filteredDataNotPagination);
		self.dataSplitToPagination = preparePaginationPersons(self.filteredDataNotPagination,self.maxListInTable, countPersons );
		fillTbodyFunc(self.dataSplitToPagination, self.$tbody, self.currentPage, self);
	})
















































}
