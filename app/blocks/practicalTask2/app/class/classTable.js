import createTable from '../watchers/createTable'
import motionToCurrentPage from '../watchers/motionToCurrentPage'
import checkTbodyJquery from '../tableInit/checkTbodyJquery'
import checkMaxListInTable from '../tableInit/checkMaxListInTable'
import getJSON from '../libs/ajaxGet/ajaxGet'
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
		this.sliceArrPersons = null;
		this.targetPerson = null;

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

				this.dataNotPagination = data;
				this.sliceArrPersons = preparePaginationPersons(data, this.maxListInTable, countPersons);

				Table.createPagination(this.sliceArrPersons, initFirstPagination);

				this.fillTable(this.sliceArrPersons, initFirstPage);
				this.watchToCreateTable()
			} )
	}

	fillTable(data, targetPage) {
		fillTableFunc(data, this.$tbody, targetPage);
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
		function getPersonId(self) {
			$('.js-watchCurrentPerson').on('click', '[data-person-id]', function (e) {
				e.preventDefault();
				let $curTarget = $(e.currentTarget);
				$curTarget.addClass('active').siblings().removeClass('active');


				let targetPersonNum = self.maxListInTable * self.currentPage + $curTarget.data().personId;
				self.targetPerson = self.dataNotPagination[targetPersonNum];
///////////////////////////////////////////////////////////////////////////////////////////////////////////
				console.log(self.targetPerson);
				renderTargetPersonInfo(self.targetPerson)
			})
		}
		function renderTargetPersonInfo(targetPerson) {

		}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	}
}
