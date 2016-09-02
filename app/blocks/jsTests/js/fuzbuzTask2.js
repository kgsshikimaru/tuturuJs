export default function () {

	//  > Изменится ли ваше решение, если нужно проверять только такой набор скобок: <,[,{
	// - уберу '()' из проверочного списка - чтобы уменьшить количество итераций в цикле, и в регулярном выражении убрал бы: \(|\)

	function checkSyntax(str) {
		if (typeof str !== 'string') return 1;
		if (str.length === 0) return 0;

		const onlyBracket = /\(|\)|\{|\}|\[|\]|\<|\>/g;
		const brackets = str.match(onlyBracket);
		const check  = ['()', '[]', '{}', '<>'];

		let flag = true;
		function loop(brackets) {
			if (brackets.length === 0) return 0;
			flag = true;
			for ( let i = 0; i < brackets.length; i++) {
				for ( let j = 0; j < check.length; j++) {
					const checkSubStr = brackets[i] + brackets[i + 1];
					const checkValue = check[j];
					if (checkSubStr === checkValue) {
						brackets.splice(i, 2);
						flag = false;
					}
				}
			}
			if (flag) return 1;
			return loop(brackets);
		}
		return loop(brackets);
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
