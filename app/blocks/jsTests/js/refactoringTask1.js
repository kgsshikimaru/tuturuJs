export default function () {

	function func(s, a, b) {
		// везде лучше исользовать строгое равенство - для избежания ошибок от нежелательного приведения типов

		if (s.length === 0) return -1;    // проверка на пустую строку через регулярное выражение слишком догорая операция

		var i = s.length -1;
		var aIndex =     -1;
		var bIndex =     -1;

		for (i; i > 0; i--) {             // по мне удобней держать цикл и декремент вместе
			check(a, aIndex);             // инкапсулируем логику, выносим шаблонный код в отдельную функцию
			check(b, bIndex);

			if ( (aIndex !== -1) || (bIndex !== -1) ) break;   // и отделить его от искомой цели
		}

		if (aIndex !== -1) {
			return bIndex === -1 ? aIndex : Math.max(aIndex, bIndex);  // При выборе: проверочный вариант или все остальное компактнее использовать тернарный оператор
		}

		return bIndex !== -1 ? bIndex : -1;  // При выборе: проверочный вариант или все остальное компактнее использовать тернарный оператор


		function check(checkValue,index) {
			if (s.substring(i, i +1) === checkValue) {
				index = i;
			}
		}
	}





































}
