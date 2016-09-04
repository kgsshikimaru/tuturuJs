import createTable from '../watchers/createTable'
import motionToCurrentPage from '../watchers/motionToCurrentPage'
import getPersonId from '../watchers/getPersonId'
import checkTbodyJquery from '../tableInit/checkTbodyJquery'
import checkMaxListInTable from '../tableInit/checkMaxListInTable'
import ajaxGetFunc from '../libs/ajaxGet/ajaxGetFunc'
import fillTableFunc from '../libs/createTable/fillTableFunc'
import preparePaginationPersons from '../libs/createTable/preparePagination'
import createPaginationFunc from '../libs/createTable/createPaginationFunc'

export default class Table {
	constructor($tbody, maxList, url) {
		this.applyUrl = url;
		this.$tbody = $tbody;
		this.maxListInTable = maxList;
		this.currentPage = 0;
		this.dataNotPagination = null;
		this.filteredDataNotPagination = null;
		this.dataSplitToPagination = null;
		this.targetPerson = null;
		this.loadingTimer = null;

		this.watchToCreateTable();
		this.watchPagination();
		this.watchPersons();
	}

	get $tbody() {
		return this._$tbody;
	}

	get maxListInTable() {
		return this._maxListInTable;
	}

	set $tbody($tbody) {
		const self = this;
		checkTbodyJquery($tbody, self);
	}

	set maxListInTable(maxListInTable) {
		const self = this;
		checkMaxListInTable(maxListInTable, self);
	}


	ajaxGet(url, tbody) {
		const self = this;
		return ajaxGetFunc(url, tbody, self);
	}

	static createPagination(data, targetPage) {
		createPaginationFunc(data, targetPage);
	}

	createTable(url) {
		this.ajaxGet(url, this.$tbody)
			.done ( (data) => {
				let countPersons = 0;
				this.currentPage = 0;
				let initFirstPagination = 1;

				this.dataNotPagination = data;
				this.filteredDataNotPagination = data;
				this.dataSplitToPagination = preparePaginationPersons(data, this.maxListInTable, countPersons);

				Table.createPagination(this.dataSplitToPagination, initFirstPagination);

				this.fillTable(this.dataSplitToPagination, this.currentPage);
				this.watchToCreateTable()
			} )
	}

	fillTable(data, targetPage) {
		const self = this;
		fillTableFunc(data, this.$tbody, targetPage, self);
	}

	watchToCreateTable() {
		const self = this;
		createTable(self, this.applyUrl);
	}

	watchPagination() {
		const self = this;
		motionToCurrentPage(self);
	}

	watchPersons() {
		const self = this;
		getPersonId(self);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
	}
}
