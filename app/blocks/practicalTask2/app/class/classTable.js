import checkArgumentTable from '../libs/createTable/checkArgumentTable'
import getJSON from '../libs/ajaxGet/ajaxGet'
import createTable from '../libs/createTable/createTable'

export default class Table {
	constructor($tbody) {
		this.$tbody = $tbody
	}

	get $tbody() {
		return this._$tbody;
	}

	set $tbody($tbody) {
		const self = this;
		checkArgumentTable($tbody, self);
	}

	static ajaxGet(url, tbody) {
		return getJSON(url, tbody);
	}

	createTable(url) {
		Table.ajaxGet(url, this.$tbody)
			.done ( (data) => this.fillTable(data) )
	}

	fillTable(data) {
		createTable(data, this.$tbody);
	}


}
