export function sortingStringDecreasing(a,b) {
	if ( eval(`a${sortingStringDecreasing.self.currentJsonKey}`) > eval(`b${sortingStringDecreasing.self.currentJsonKey}`) ) {
		return -1;
	}

	if ( eval(`a${sortingStringDecreasing.self.currentJsonKey}`) < eval(`b${sortingStringDecreasing.self.currentJsonKey}`) ) {
		return 1;
	}

	return 0;
}
