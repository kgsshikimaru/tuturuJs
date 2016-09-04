export default function ($tbody, self) {
	try{
		if ($tbody[0].tagName === 'TBODY' && $tbody.jquery !== undefined) {
			self._$tbody = $tbody

		} else {
			throw new Error(`в передаваемом объекте нет  ${$tbody}: нужно указать таблицу - объект jQuery`)
		}
	} catch (e) {
		console.log(e.message);
	}
}
