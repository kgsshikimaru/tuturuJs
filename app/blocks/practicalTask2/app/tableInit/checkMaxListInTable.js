export default function (maxListInTable, self) {
	try{
		if (maxListInTable === +maxListInTable) {
			self._maxListInTable = maxListInTable;
		} else {
			throw new Error(`нужно ввести число`)
		}
	} catch (e) {
		console.log(e.message);
	}
}
