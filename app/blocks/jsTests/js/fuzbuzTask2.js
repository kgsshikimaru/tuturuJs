export default function fuzbuzTask2() {

	function checkSyntax(string) {
		try {
			if (string.length === 0) return "0";     // проверяем только если есть что проверять

			const onlyBracket = /\(|\)|\{|\}|\[|\]|\<|\>/g;   // оставить только скобки
			let brackets = string.match(onlyBracket);

			brackets = brackets.join('');
			if (brackets.length % 2 === 1) return "1";

			const reg = /\(.*\)|\[.*\]|\{.*\}|\<.*\>/g;   // найти открывающую и закрывающую пару скобок

			brackets = brackets.match(reg);
			for (let i = 0; i < brackets.length; i ++) {
				brackets[i] = brackets[i].slice(1, -1);
			}
			brackets = brackets.join('');

			return checkSyntax(brackets);
		} catch (e) {
			return 1
		}
	}
























		console.log(checkSyntax("---(++++)----") == 0);
		console.log(checkSyntax("") == 0);
		console.log(checkSyntax("before ( middle []) after ") == 0);
		console.log(checkSyntax(") (") == 1);
		console.log(checkSyntax("} {") == 1);
		console.log(checkSyntax("<(   >)") == 1);
		console.log(checkSyntax("(  [  <>  ()  ]  <>  )") == 0);
		console.log(checkSyntax("   (      [)") == 1);
}
