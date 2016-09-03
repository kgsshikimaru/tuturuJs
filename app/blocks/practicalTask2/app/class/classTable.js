import motionToCurrentPage from '../watchers/motionToCurrentPage'
import checkTbodyJquery from '../tableInit/checkTbodyJquery'
import checkMaxListInTable from '../tableInit/checkMaxListInTable'
import getJSON from '../libs/ajaxGet/ajaxGet'
import fillTableFunc from '../libs/createTable/fillTableFunc'
import preparePaginationPersons from '../libs/createTable/preparePagination'
import createPaginationFunc from '../libs/createTable/createPaginationFunc'

export default class Table {
	constructor($tbody, maxList) {
		this.$tbody = $tbody;
		this.maxListInTable = maxList;
		this.currentPage = 1;

		this.watchPagination();

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

	static createPagination(data, targetPage) {
		createPaginationFunc(data, targetPage);
	}

	createTable(url) {
		Table.ajaxGet(url, this.$tbody)
			.done ( (data) => {
				let countPersons = 0;
				let initFirstPage = 0;
				let initFirstPagination = 1;

				this.sliceArrPersons = preparePaginationPersons(data, this.maxListInTable, countPersons);

				Table.createPagination(this.sliceArrPersons, initFirstPagination);

				this.fillTable(this.sliceArrPersons, initFirstPage)
			} )

	}

	fillTable(data, targetPage) {
		fillTableFunc(data, this.$tbody, targetPage);
	}

	watchPagination() {
		const self = this;
		motionToCurrentPage(self);
	}
}
