export default function () {

	function func(s, a, b) {
		if (s.length === 0) return -1;

		var i = s.length -1;
		var aIndex =     -1;
		var bIndex =     -1;

		for (i; i > 0; i--) {
			check(a, aIndex);
			check(b, bIndex);

			if ( (aIndex !== -1) || (bIndex !== -1) ) break;
		}

		if (aIndex !== -1) {
			return bIndex === -1 ? aIndex : Math.max(aIndex, bIndex);
		}

		return bIndex !== -1 ? bIndex : -1;


		function check(checkValue,index) {
			if (s.substring(i, i +1) === checkValue) {
				index = i;
			}
		}
	}





































}
