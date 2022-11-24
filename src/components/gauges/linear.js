import { LinearGauge } from '../../vendor/gauge.min.js';
import { linearParametres } from './linearSettings.js';

const linearGauge1 = new LinearGauge({ renderTo: 'linearGauge1', borders: false, }).update(linearParametres).draw();
const linearGauge2 = new LinearGauge({ renderTo: 'linearGauge2', borders: false, }).update(linearParametres).draw();
const linearGauge3 = new LinearGauge({ renderTo: 'linearGauge3', borders: false, }).update(linearParametres).draw();
const linearGauge4 = new LinearGauge({ renderTo: 'linearGauge4', borders: false, }).update(linearParametres).draw();
const linearGauge5 = new LinearGauge({ renderTo: 'linearGauge5', borders: false, }).update(linearParametres).draw();
const linearGauge6 = new LinearGauge({ renderTo: 'linearGauge6', borders: false, }).update(linearParametres).draw();
const linearGauge7 = new LinearGauge({ renderTo: 'linearGauge7', borders: false, }).update(linearParametres).draw();
const linearGauge8 = new LinearGauge({ renderTo: 'linearGauge8', borders: false, }).update(linearParametres).draw();

export { linearGauge1, linearGauge2, linearGauge3, linearGauge4, linearGauge5, linearGauge6, linearGauge7, linearGauge8 };