export default function (data, tbody) {
	let content = '';
	for (let value of data) {
		content += `
						<tr>
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
	tbody.empty().append(content)
}
