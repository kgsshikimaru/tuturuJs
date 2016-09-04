export function sortingStringIncreasing (a,b) {
	if ( eval(`a${sortingStringIncreasing.self.currentJsonKey}`) < eval(`b${sortingStringIncreasing.self.currentJsonKey}`) ) {
		return -1;
	}

	if ( eval(`a${sortingStringIncreasing.self.currentJsonKey}`) > eval(`b${sortingStringIncreasing.self.currentJsonKey}`) ) {
		return 1;
	}

	return 0;
}
