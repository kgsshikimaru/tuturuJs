import fillTbodyFunc from '../createTable/fillTbodyFunc'
import preparePaginationPersons from '../createTable/preparePaginationPersons'

export default function (self) {

	$('.js-searchForm-wrapper form').on("submit", filtrationTableValue);

	function filtrationTableValue(e){
		e.preventDefault();
		self.currentPage = 0;
		let searchValue = $('.js-sort-form-input').val();

		searchValue += '';

		let notFind = true;
		if (searchValue === '') {
			self.filteredDataNotPagination = self.dataNotPagination;
			notFind = false;
		} else {
			$('.js-renderSortWay-container th').removeClass('js-arrow-up js-arrow-down');
			let lowerSearchValue = searchValue.toLowerCase();
			self.filteredDataNotPagination = [];

			for (let i = 0; i < self.dataNotPagination.length; i++) {

				function createArrFromFindSubst(dataJson) {

					for (let key in dataJson) {
						if (dataJson.hasOwnProperty(key)) {
							if (typeof dataJson[key] === 'object') {

								return createArrFromFindSubst(dataJson[key]);
							} else {
								dataJson[key] += '';
								let lowerValue = dataJson[key].toLowerCase();

								if (lowerValue.indexOf(lowerSearchValue) !== -1) {
									notFind = false;
									return true
								}
							}
						}
					}
				}

				let find = createArrFromFindSubst(self.dataNotPagination[i]);
				if (find === true) {
					self.filteredDataNotPagination.push(self.dataNotPagination[i])
				}
			}
		}

		if (notFind === true) {
			$(self.$tbody).empty().append('<h2>По вашему запросу ничего не найдено</h2>')
		} else {
			let initFirstPagination = 1;
			let countPersons = 0;
			let listPersons = self.filteredDataNotPagination;

			self.dataSplitToPagination = preparePaginationPersons(listPersons,self.maxListInTable, countPersons );
			self.createPagination(self.dataSplitToPagination, initFirstPagination);
			fillTbodyFunc(self.dataSplitToPagination, self.$tbody, self.currentPage, self);
		}
	}
}
