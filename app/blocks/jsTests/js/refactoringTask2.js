export default function () {

	// на выходе получаем удобный числовой результат с которым можно без предварительной подготовки работать дальше.
	function drawRating(vote) {
		let result = Math.round(vote / 20);
		return result === 0 ? 1 : result;
	}

// Проверка работы результата
	console.log(drawRating(1) ); // ★☆☆☆☆
	console.log(drawRating(50)); // ★★★☆☆
	console.log(drawRating(99)); // ★★★★★


































}
