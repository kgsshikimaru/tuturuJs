export default function (data, thead) {
	let content = '<tr>';
	let i = 0;
	const firstJsonItem = data[0][0];

	content = deepRenderThead(firstJsonItem);
	content += '</tr>';
	thead.empty().append(content);


	function deepRenderThead(dataJson) {
		for (let key in dataJson) {
			if (typeof dataJson[key] === 'object') {
				deepRenderThead(dataJson[key])
			} else {
				content += `<th data-title-id =${i++}>${key}<span class="js-renderSortWay"></span></th>`;
			}

		}
		return content
	}
}
