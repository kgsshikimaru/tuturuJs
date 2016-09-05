import preparePaginationPersons from './preparePaginationPersons'

export default function createTableFunc(url, self) {

	self.ajaxGet(url,self.$thead, self.$tbody)
		.done ( (data) => {
			let countPersons = 0;
			self.currentPage = 0;
			let initFirstPagination = 1;

			self.dataNotPagination = data;
			self.filteredDataNotPagination = data;
			self.dataSplitToPagination = preparePaginationPersons(data, self.maxListInTable, countPersons);

			self.createPagination(self.dataSplitToPagination, initFirstPagination);
			self.watchPagination();

			self.createSearchForm();
			self.watchFiltration();

			self.fillTable(self.dataSplitToPagination, self.currentPage);
			self.watchToCreateTable();   // возобновляем возможность запросов на сервер
		} )
}
