export default function (arrPersons, sliceArr, countPersons) {
	let arr = [];
	for(let i = 0; i < arrPersons.length / sliceArr; i++){
		arr[i] = [];
		for(let j = 0; j < sliceArr; j++){
			if (arrPersons[countPersons] === undefined) return arr;
			arr[i][j] = arrPersons[countPersons];
			countPersons++;
		}
	}
	return arr;
}
