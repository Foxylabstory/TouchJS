import { RadialGauge } from '../../vendor/gauge.min.js';
import { circleParametres } from './circleSettings';

// borders: false, не заню почему, но это свойство не хочет срабатывать из основного объекта настроек
const leftTopGauge = new RadialGauge({ renderTo: 'circleGaugeLeftTop', borders: false, }).update(circleParametres).draw();
const leftBottomGauge = new RadialGauge({ renderTo: 'circleGaugeLeftBottom', borders: false, }).update(circleParametres).draw();
const circleGaugeCenter = new RadialGauge({ renderTo: 'circleGaugeCenter', borders: false, }).update(circleParametres).draw();
const rightTopGauge = new RadialGauge({ renderTo: 'circleGaugeRightTop', borders: false, }).update(circleParametres).draw();
const rightBottomGauge = new RadialGauge({ renderTo: 'circleGaugeRightBottom', borders: false, }).update(circleParametres).draw();

export { leftTopGauge, leftBottomGauge, circleGaugeCenter, rightTopGauge, rightBottomGauge }