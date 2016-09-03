'use strict';

import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import jsTests from '../blocks/jsTests/jsTests';
import practicalTask2 from '../blocks/practicalTask2/app/index';

$(() => {
	svg4everybody();
	jsTests();

	const startPracticalTask2 = new Date().getTime();
	practicalTask2();
	const timePracticalTask2 = new Date().getTime() - startPracticalTask2;
	console.log(`скорость выполнения: ${timePracticalTask2} ms`);
});
