import checkTbodyJquery from '../tableInit/checkTbodyJquery'
import checkMaxListInTable from '../tableInit/checkMaxListInTable'
import getJSON from '../libs/ajaxGet/ajaxGet'
import fillTableFunc from '../libs/createTable/fillTableFunc'
import preparePaginationPersons from '../libs/createTable/preparePagination'

export default class Table {
	constructor($tbody, maxList) {
		this.$tbody = $tbody;
		this.maxListInTable = maxList;
		this.currentPage = 1;
	}

	get $tbody() {
		return this._$tbody;
	}

	get maxListInTable() {
		return this._maxListInTable;
	}

	set maxListInTable(maxListInTable) {
		const self = this;
		checkMaxListInTable(maxListInTable, self);
	}

	set $tbody($tbody) {
		const self = this;
		checkTbodyJquery($tbody, self);
	}

	static ajaxGet(url, tbody) {
		return getJSON(url, tbody);
	}

	createTable(url) {
		Table.ajaxGet(url, this.$tbody)
			.done ( (data) => {
				let countPersons = 0;
				let initFirstPage = 0;

				this.sliceArrPersons = preparePaginationPersons(data, this.maxListInTable, countPersons);

				console.log(this.sliceArrPersons);

				this.createPagination(this.sliceArrPersons, this.currentPage);

				this.fillTable(this.sliceArrPersons, initFirstPage)
			} )
	}

	createPagination(data, targetPage) {


		function createPaginat (data, targetPage) {
			let content = '<ul class="pagination">';

			for (let i = 1; i <= data.length; i++) {
				content += `<li class="${targetPage === i ? 'active' : ''}"><a href="#">${i}</a></li>`;
			}
			content += '</ul>';
			$('.pagination-wrapper').append(content);
		}

		createPaginat (data, targetPage);































	}

	fillTable(data, targetPage) {
		fillTableFunc(data, this.$tbody, targetPage);
	}


}
