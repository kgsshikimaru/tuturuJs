export default function (data, thead) {
	let content = '<tr>';
	const firstJsonItem = data[0][0];
	let initDeep = '';

	content = deepRenderThead(firstJsonItem, initDeep);



	/*
	 объект для проверки работы функции deepRenderThead(dataJson, deep)

	 {
	 first: 'first',
	 second: 'second',
	 thirdObj: {
	 third: 'third',
	 fourObj: {
	 four: 'four',
	 five: 'five'
	 },
	 six:'six',
	 seven: 'seven'
	 },
	 eith: 'eith',
	 nine: 'nine'
	 }
	 */




	content += '</tr>';
	thead.empty().append(content);


	function deepRenderThead(dataJson, deep) {
		let deepHistory = deep;
		for (let key in dataJson) {
			if (typeof dataJson[key] === 'object') {
				deepHistory += [key] + '|';
				deepRenderThead(dataJson[key], deepHistory);




				// если у нас многомерный объект, сохраняем историю глубины нужного объекта и его свойтва - при выходе из рекурсии
				// подчищаем историю последнего посещения, чтобы начать по новой в следующей рекурсии
				let oldHystoryIndexFinish = deepHistory.lastIndexOf('|');
				let oldHystoryIndexStart = deepHistory.lastIndexOf('|', oldHystoryIndexFinish - 1);

				if (oldHystoryIndexStart === -1) oldHystoryIndexFinish = 0;
				deepHistory = deepHistory.slice(oldHystoryIndexStart, oldHystoryIndexFinish + 1);
			} else {
				let formatKey = key
								.replace(/([A-Z])/g, ' $1')
								.replace(/^./, function(str){ return str.toUpperCase(); });
				let FirstSymbolNumber = isNaN(parseInt(dataJson[key]));
				content += `
							<th data-json-deep-history=${deepHistory + key}
							 data-title-type-value=${ FirstSymbolNumber === true ? 'string' : 'number' }>
							${formatKey}
								<span class="js-renderSortWay"></span>
							</th>
							`;
			}
		}
		return content
	}
}




