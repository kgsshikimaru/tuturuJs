import createTable from '../watchers/createTable'
import createTableFunc from '../libs/createTable/createTableFunc'
import motionToCurrentPage from '../watchers/motionToCurrentPage'
import getPersonId from '../watchers/getPersonId'
import checkTbodyJquery from '../tableInit/checkTbodyJquery'
import checkMaxListInTable from '../tableInit/checkMaxListInTable'
import ajaxGetFunc from '../libs/ajaxGet/ajaxGetFunc'
import fillTableFunc from '../libs/createTable/fillTableFunc'
import createPaginationFunc from '../libs/createTable/createPaginationFunc'

export default class Table {
	constructor($tbody, maxList, url) {
		this.applyUrl = url;
		this.$tbody = $tbody;
		this.maxListInTable = maxList;
		this.timeOut = 20000;
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

	createPagination(data, targetPage) {
		createPaginationFunc(data, targetPage);
	}

	createTable(url) {
		const self = this;
		createTableFunc(url, self);
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
