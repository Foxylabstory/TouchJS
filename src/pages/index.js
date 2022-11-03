import "../pages/index.css";
import { leftTopGauge, leftBottomGauge, centerGauge, rightTopGauge, rightBottomGauge } from '../components/gauges/circle';
import { linearGauge1, linearGauge2, linearGauge3, linearGauge4, linearGauge5, linearGauge6, linearGauge7, linearGauge8 } from '../components/gauges/linear';

const animateButton = document.querySelector('.header__animate');

let setMinValue = -100;
let setMaxValue = 100;
let minZone = 0;
let maxZone = 100;

centerGauge.options.minValue = setMinValue;
centerGauge.options.maxValue = setMaxValue;
centerGauge.value = '10';
const arr = [];
for(let i = centerGauge.options.minValue; i <= centerGauge.options.maxValue; i = i + (centerGauge.options.maxValue + Math.abs(centerGauge.options.minValue)) / 10) {
    arr.push(i);
    console.log(arr);
}
centerGauge.options.majorTicks = arr;
centerGauge.options.highlights = [
    { "from": setMinValue, "to": minZone, "color": "rgba(255,0,0,.65)" },
    { "from": maxZone, "to": setMaxValue, "color": "rgba(255,0,0,.75)" }
];
centerGauge.draw();

rightBottomGauge.options.maxValue = '440'
rightBottomGauge.value = '100';
rightBottomGauge.options.majorTicks = Array.from({ length: 11 }, function (value, index) {
    // value будет undefined
    return Math.round(index * (rightBottomGauge.options.maxValue / 10))
})
rightBottomGauge.draw();

console.log(centerGauge.options);
linearGauge1.draw();


let timers = [];

animateButton.addEventListener("click", function () {
    document.gauges.forEach(function (gauge) {
        timers.push(setInterval(function () {
            gauge.value = Math.random() *
                (gauge.options.maxValue - gauge.options.minValue) +
                gauge.options.minValue;
        }, gauge.animation.duration + 500));
    });
});