import createTable from '../watchers/createTable'
import createTableFunc from '../libs/createTable/createTableFunc'
import motionToCurrentPage from '../watchers/motionToCurrentPage'
import getPersonId from '../watchers/getPersonId'
import checkTheadJquery from '../tableInit/checkTheadJquery'
import checkTbodyJquery from '../tableInit/checkTbodyJquery'
import checkMaxListInTable from '../tableInit/checkMaxListInTable'
import ajaxGetFunc from '../libs/ajaxGet/ajaxGetFunc'
import fillTheadFunc from '../libs/createTable/fillTheadFunc'
import fillTbodyFunc from '../libs/createTable/fillTbodyFunc'
import createPaginationFunc from '../libs/createTable/createPaginationFunc'
import sortingMainFunc from '../libs/sorting/sortingMainFunc'

export default class Table {
	constructor($table, maxList, url) {
		this.applyUrl = url;
		this.$thead = $table.find('thead');
		this.$tbody = $table.find('tbody');
		this.maxListInTable = maxList;
		this.timeOut = 20000;
		this.currentPage = 0;
		this.dataNotPagination = null;
		this.filteredDataNotPagination = null;
		this.dataSplitToPagination = null;
		this.targetPerson = null;
		this.loadingTimer = null;
		this.currentJsonKey = null;

		this.watchToCreateTable();
		this.watchPagination();
		this.watchPersons();
		this.watchSortingWay()
	}

	get $thead() {
		return this._$thead;
	}

	set $thead($thead) {
		const self = this;
		checkTheadJquery($thead, self);
	}

	get $tbody() {
		return this._$tbody;
	}

	set $tbody($tbody) {
		const self = this;
		checkTbodyJquery($tbody, self);
	}

	get maxListInTable() {
		return this._maxListInTable;
	}


	set maxListInTable(maxListInTable) {
		const self = this;
		checkMaxListInTable(maxListInTable, self);
	}


	ajaxGet(url,thead, tbody) {
		const self = this;
		return ajaxGetFunc(url, thead, tbody, self);
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

		fillTheadFunc(data, this.$thead);
		fillTbodyFunc(data, this.$tbody, targetPage, self);
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
	}

	watchSortingWay() {
		const self = this;
		sortingMainFunc(self);

	}
}
