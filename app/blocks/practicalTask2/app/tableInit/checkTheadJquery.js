export default function ($thead, self) {
	try{
		if ($thead[0].tagName === 'THEAD' && $thead.jquery !== undefined) {
			self._$thead = $thead
		} else {
			throw new Error(`в передаваемом объекте нет  ${$thead}: нужно указать таблицу - объект jQuery`)
		}
	} catch (e) {
		console.log(e.message);
	}
}
