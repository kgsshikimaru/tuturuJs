export default function () {
	let content = `
				<form class="form-search">
					<input type="text" class="input-medium search-query js-sort-form-input">
					<button class="btn">Найти</button>
				</form>
				`;

	$('.js-searchForm-wrapper').empty().append(content)
}
