export default function () {

// Не использовал создание елемента <a>  с приваиванием ему href - т.к ( по условию у нас hostname и origin без порта, а просто изменить их в объекте
// не получится ( reed only)  - нужно будет клонировать объект и уже у клона исправлять под необходимое условие - получится больше кода.

 // вариант длинный - читаемый, ниже короткий для ниндзя
	function parseUrl(href) {
		const reURLInformation = new RegExp([
			'^((https?:)//([^:/?#]*))', // protocol, origin, host, hostname)
			'(?::([0-9]+))?', // port)
			'(/[^?#]*)', // pathname
			'(\\?[^#]*|)', // search
			'(#.*|)$' // hash
		].join(''));
		const arr = href.match(reURLInformation);

		return {
			'href': arr[0],
			'hash': arr[7],
			'port': arr[4],
			'host': arr[3],
			'protocol': arr[2],
			'hostname': arr[3],
			'pathname': arr[5],
			'origin': arr[1]
		};
	}

/*
	// тоже самое для ниндзя - думаю читаемый вариант лучше
	function parseUrl(href) {
		const arr = href.match(/^((https?:)\/\/([^:/?#]*))(?::(\d+))?([^?#]*)(\\?[^#]*|)(#.*|)$/);
		return {'href': arr[0],'hash': arr[7],'port': arr[4],'host': arr[3],'protocol': arr[2],'hostname': arr[3],'pathname': arr[5],'origin': arr[1]
		};
	 }
*/







	let a = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo');

// Вернет объект, в котором будут следующие свойства:

	console.log( a.href == "http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" );
	console.log( a.href);
	console.log( a.hash == "#foo" );
	console.log( a.hash);
	console.log( a.port == "8080" );
	console.log( a.port );
	console.log( a.host == "tutu.ru" );
	console.log( a.host );
	console.log( a.protocol == "https:" );   // в аргументе по заданию указан адрес с протоколом http:  | правильный протокол не удовлетворяет этому условию
	console.log( a.protocol  + ' -> тут  в передоваемом на парсинг адресе протокол "http:", а правильная проверка указана' +
		' как : "https:", в href и origin :  "http:" - не стал исправлять условие проверки под ответ');
	console.log( a.hostname == "tutu.ru" );
	console.log( a.hostname );
	console.log( a.pathname == "/do/any.php" );
	console.log( a.pathname );
	console.log( a.origin == "http://tutu.ru" );
	console.log( a.origin );

















}
