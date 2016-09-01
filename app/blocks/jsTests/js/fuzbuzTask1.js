export default function fuzbuzTask1() {
//    Средняя скорость выполнения 10.000 итераций : ~1.800 ms
    function dscount(string, s1, s2) {
        const lowerString = string.toLowerCase();
        const lowerSubString = (s1 + s2).toLowerCase();
        let counter = 0;

        for (let i = 0; i < lowerString.length; i++) {
			const checkValue = lowerString[i] + lowerString[i + 1];
            if (checkValue === lowerSubString) {
                counter++
            }
        }
        return counter;
    }
// В результате поиска более элегантного решения чем for, появился второй вариант - по быстродействию не оправдавший ожиданий.

//  Я выбрал как основной вариант простоту кода и быстродействие , нежели компактность.

/*
 //    Средняя скорость выполнения 10.000 итераций : ~2.500 ms
	function dscount(string, s1, s2) {
		const lowerString = Array.from(string.toLowerCase());
		const lowerSubString = (s1 + s2).toLowerCase();
		return lowerString.reduce( (counter,value, i) => {
			const nextValue = lowerString[i + 1];
			return (value + nextValue === lowerSubString) ? ++counter : counter;
		},0);
	}
*/



	 const start = new Date().getTime();
	 const maxCount = 10000;
	 for (var n = 0; n < maxCount; n++) {
		try {
			test(dscount, ['ab___ab__', 'a', 'b'], 2);
			test(dscount, ['___cd____', 'c', 'd'], 1);
			test(dscount, ['de_______', 'd', 'e'], 1);
			test(dscount, ['12_12__12', '1', '2'], 3);
			test(dscount, ['_ba______', 'a', 'b'], 0);
			test(dscount, ['_a__b____', 'a', 'b'], 0);
			test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);

			console.info("Congratulations! All tests success passed.");
		} catch(e) {
			console.error(e);
		}
	 }
	 const time = new Date().getTime() - start;
	console.log(`скорость выполнения: ${time} ms`);






// Простая функция тестирования
	function test(call, args, count, n) {
		let r = (call.apply(n, args) === count);
		console.assert(r, `Finded items count: ${count}`);
		if (!r) throw "Test failed!";
	}
}
