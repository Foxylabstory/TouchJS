import "../pages/index.css";
import { leftTopGauge, leftBottomGauge, centerGauge, rightTopGauge, rightBottomGauge } from '../components/gauges/circle';
import { linearGauge1, linearGauge2, linearGauge3, linearGauge4, linearGauge5, linearGauge6, linearGauge7, linearGauge8 } from '../components/gauges/linear';

const animateButton = document.querySelector('.header__animate');

let setMinValue = 0;
let setMaxValue = 2500;
let minZone = 100;
let maxZone = 900;

centerGauge.options.minValue = setMinValue;
centerGauge.options.maxValue = setMaxValue;
centerGauge.value = '10';
centerGauge.options.majorTicks = Array.from({ length: 11 }, function (value, index) {
    // value будет undefined
    return Math.round(index * (centerGauge.options.maxValue / 10))
});
centerGauge.options.highlights = [
    { "from": setMinValue, "to": minZone, "color": "rgba(255,0,0,.25)" },
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

console.log(rightBottomGauge.options);
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