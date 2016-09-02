export default function () {

	// Необходимо 2 итерации описанных в условии, и 2 "полуитерации" (используется только 1 сковорада).

	// Но я думаю, что если делать исходя из ООП и обеспечивать максимальную гибкость нужно сделать: 1 итерация - приготовление одного блинчика
	// и производить итерации асинхронно на доступном количестве сковородок
	// получается: не фиксированное количество сковородок; может готовится параллельно блюда с разным временем приготовления на итерацию

	// Данная задача делается исключительно в ООП - его и придумали чтобы абстрагироваться от кода и перейти к оперированию физическими объектами
	// более понятными для человека, в данном случае у нас первоначально физические объекты


	/*
	 *  В физическом мире, я проделал бы следующую последовательность действий:
	 *  1 - Посмотреть рецепт блинчиков
	 *   1.1 - узнать метод приготовления
	 *   1.2 - узнать необходимые ингредиенты
	 *  2 - купить необходимые ингредиенты
	 *   2.1 - проверить наличие денежных средств для покупки ингредиентов
	 *   2.2 - узнать где продают необходимые ингредиенты
	 *   2.3 - прийти в выбранный магазин
	 *   2.4 - купить все необходимое по списку
	 *   2.5 - если нет в наличии необходимого ингредиента -> пойти в другой магазин и повторять цикл (2.2 - 2.5) до тех пор пока не будет куплены все ингредиенты
	 *   2.6 - Вернуться с покупками
	 *  3 - Приготовление блинчиков
	 *   3.1 - подготовить необходимые инстременты для готовки
	 *   3.2 - приготовить тесто
	 *    3.2.* - частная реализация зависящая от выбранного рецепта и исходных ингредиентов
	 *   3.3  - включить плиту
	 *   3.4  - поставить сковородки на плиту
	 *   3.5  - Проверить оставшееся количество теста,если на 1 блинчик -> вторая сковорада не используется(исключаются шаги: 3.7, 3.9, 3.12 и 3.15), если закончилось - выйти из цикла
	 *   **** => в моем предложенном варианте: готовим пока не закончилось тесто - т.к. мы за раз делаем один блин ,а не 2 наполовину - ничего не исключается из цикла.
	 *   3.6  - смазать первую сковородку маслом
	 *   3.7  - смазать вторую сковородку маслом
	 *   3.8  - вылить на первую сковородку первый блинчик
	 *   3.9  - вылить на вторую сковородку второй блинчик
	 *	3.10 - засечь необходимое время
	 *	3.11 - по истечении установленного времени перевернуть первый блинчик
	 *	3.12 - перевернуть второй блинчик
	 *	3.13 - засечь необходимое время
	 *	3.14 - по истечении установленного времени снять с плиты первый блинчик
	 *	3.15 - снять с плиты второй блинчик
	 *	3.16 - повторять итерации шагов (3.5 - 3.16) до приготовления необходимого количества блинчиков
	 *  4 - Окончание приготовления блинчиков
	 *	4.1 - выключить плиту
	 *	4.2 - помыть инструменты готовки
	 *	4.3 - убрать инструменты готовки на место
	 * */

	// Для реализации большого количества свойств и методов и их понятного сложного взаимодействия
	// процедурный подход не годится т.к он не дает интуйтивно понятной связи между функциями


	class People {
		constructor(setting) {

		}
		static searchRecipe (element) {
			let result = null;
			// поиск указанного элемента,
			result = People.searchInGoogle(element, result);
			result = People.askOtherPeople(element, result);
			result = People.reedBook(element, result);

			return result;
		}

		static searchInGoogle(element, result) {
			if (result !== null) return result;
			// искать в интернете
			return result;
		}

		static askOtherPeople(element, result) {
			if (result !== null) return result;
			// спросить у знакомых
			return result;
		}

		static reedBook(element, result) {
			if (result !== null) return result;
			// искать рецепт в кулинарных книгах
			return result;
		}

		// Дальше я так же подразумеваю дробление каждого метода на маленькие состаляющие, для читаемости не описываю их

		static shoping(setting) {
			// People.checkMoney()
			// People.buyAllIngredients()
			// People.goToHome()
		}
		static buyAllIngredients() {
			// People.SearchShop(setting.ingredients)
			// People.goToShop()
			// People.buyIngredients(setting.ingredients)   // если не купил все что нужно - повторяем вызов People.buyAllIngredients()
		}


	}

	class Cook extends People{
		constructor(setting) {
			super(setting);
		}

		static prepareInstruments(instruments, place) {}
		static cleanInstruments(instruments) {}
		static transferInstruments(instruments, place) {}
		static turnBurner(burner) {}
		static offBurner(burner) {}
		static setPan(pan) {
			for (let itemPan of pan) {
				console.log(`ставим сковородку ${itemPan} на плиту`);
			}
			return pan;

		}
		static burn(pan, pancake) {
			const thatPan = pan;
			const thatPancake = pancake;

			let quantity = thatPancake.numberOfServings;

			for (let j = 0; j < thatPan.length; j++) {
				(function loop(thatPan, thatPancake) {
					if (quantity === 0) return;
					quantity--;
					thatPancake.recipe.recipeToBurn()
						.then( () => {
							console.log(`сковородка ${thatPan[j]} свободна`);
							if (quantity > 0) {
								console.log('еще не все блины приготовлены - начинаем готовить новую порцию');
								loop(thatPan, thatPancake)
							}
						});
				})(thatPan, thatPancake);
			}
		}

		static finishCook(burner, instruments, place) {
			Cook.offBurner(burner);
			Cook.cleanInstruments(instruments);
			Cook.transferInstruments(instruments, place);
		}

		createPancake(pancake) {
//			const recipe = People.searchRecipe(pancake.title);
//			People.shoping(recipe.ingredients);
//			Cook.prepareInstruments(recipe.instruments, pancake.place);
//			Cook.turnBurner(pancake.burner);

			let pan = Cook.setPan(pancake.pan);
			// будем считать значение 1000 за 1 минуту и как будто мы его получили из внешнего источника,
			// как и функцию приготовления, полученную в результате выполнения People.searchRecipe(pancake.title)
			Cook.burn(pan, pancake);

//			Cooc.finishCook(pancake.burner, recipe.instruments, pancake.place)


		}

	}

	let recipeSetting = {
		'recipeToBurn' : function () {
			return new Promise(function (resolve, reject) {

				console.log('шаг 1, Начинаем готовку');
				// Смазываем сковородку маслом
				// выливаем тесто на сковородку
				// засекаем время приготовления, по истечении переворачиваем
				setTimeout(function () {
					console.log('шаг 2, первая сторона блинчика готова!');
					// переворачиваем
					// засекаем время, по истечении снимаем
					setTimeout(function () {
						console.log('шаг 3, Блинчик готов!');
						// выкладываем на тарелку
						resolve();
					}, recipeSetting.time);
				}, recipeSetting.time);


			});

		},
		'time': 1000
	};





	let cook = new Cook();

	cook.createPancake({
		title: 'Блинчики с вареньем',
		place: 'кухня, 3-ая тумба справа',  // место где лежат кухонные принадлежности
		burner: 'объект плита - со своим API для работы',
		pan: ['номер 1', 'номер 2'],
		recipe: recipeSetting,
		numberOfServings: 3
	})







}
