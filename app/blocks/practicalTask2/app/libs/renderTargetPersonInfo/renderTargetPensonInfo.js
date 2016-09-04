export default function (targetPerson) {
	$('.js-targetPersonContainer').empty().append(`

					<h2>Выбран пользователь: <b>${targetPerson.firstName} ${targetPerson.lastName}</b></h2>
					<h3>Описание:</h3>
					<textarea>${targetPerson.description}</textarea>
				<ol>
					<li>Адрес проживания: ${targetPerson.adress.streetAddress}</li>
					<li>Город: ${targetPerson.adress.city}</li>
					<li>Провинция/штат: ${targetPerson.adress.state}</li>
					<li>Индекс: ${targetPerson.adress.zip}</li>
				</ol>
				`);
}
