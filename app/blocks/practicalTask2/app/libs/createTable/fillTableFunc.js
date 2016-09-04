export default function (data, tbody, targetPage, self) {
	let content = '';
	let i = 0;
	for (let value of data[targetPage]) {
		content += `
						<tr data-person-id =${i++}>
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
						</tr>
						`;
	}
	clearInterval(self.loadingTimer);      // остановить анимацию загрузи
	$('.js-loading').empty();              // убрать загрузку
	tbody.empty().append(content)
}
