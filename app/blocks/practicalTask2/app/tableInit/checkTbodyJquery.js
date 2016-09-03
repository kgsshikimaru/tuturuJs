export default function ($tbody, self) {
	try{
		if ($tbody[0].tagName === 'TBODY' && $tbody.jquery !== undefined) {
			self._$tbody = $tbody

		} else {
			throw new Error(`неправильный аргумент ${$tbody}: нужно указать тело таблицы - объект jQuery `)
		}
	} catch (e) {
		console.log(e.message);
	}
}
