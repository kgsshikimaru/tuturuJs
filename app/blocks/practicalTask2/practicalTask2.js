export default function () {

	console.log('test');

	let personJson = [
		{
			"id": 180,
			"firstName": "Elena",
			"lastName": "Knowles",
			"email": "NPost@ac.net",
			"phone": "(364)171-4175",
			"adress": {
				"streetAddress": "8912 Odio Ave",
				"city": "Sandwich",
				"state": "DE",
				"zip": "14333"
			},
			"description": "mattis sed suspendisse massa donec facilisis nunc tortor ante amet rutrum et lacus " +
			"lacus id adipiscing risus ac consequat fringilla tellus at mattis consectetur mattis magna molestie massa" +
			" tincidunt mattis dolor consectetur"
		},
		{
			"id": 181,
			"firstName": "Elena",
			"lastName": "Knowles",
			"email": "NPost@ac.net",
			"phone": "(364)171-4175",
			"adress": {
				"streetAddress": "8912 Odio Ave",
				"city": "Sandwich",
				"state": "DE",
				"zip": "14333"
			},
			"description": "mattis sed suspendisse massa donec facilisis nunc tortor ante amet rutrum et lacus " +
			"lacus id adipiscing risus ac consequat fringilla tellus at mattis consectetur mattis magna molestie massa" +
			" tincidunt mattis dolor consectetur"
		},

	];

	const $tablePerson = $('.js-table');

	function fillTable(json, $table) {
		const thead = $table.find('thead');
		const $tbody = $table.find('tbody');

		let content = '';
		for (let value of json) {
			content += `<tr>
							<td>${value.id}</td>
							<td>${value.firstName}</td>
							<td>${value.lastName}</td>
							<td>${value.email}</td>
							<td>${value.phone}</td>
							<td>${value.adress.streetAddress}</td>
							<td>${value.adress.city}</td>
							<td>${value.adress.state}</td>
							<td>${value.adress.zip}</td>
							<td>${value.description}</td>
						</tr>`;
		}
		$tbody.append(content)
	}
	fillTable(personJson, $tablePerson);








}
