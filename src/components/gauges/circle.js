import { RadialGauge } from '../../vendor/gauge.min.js';

const leftTopGauge = new RadialGauge({
  renderTo: 'circleGaugeLeftTop',
  /* width: 200,
  height: 200, */
  units: "kN*m",
  title: "Delay 500",
  value: "90",
  animateOnInit: "true",
  animatedValue: "true",
  animationRule: 'linear',
  animationDuration: 500,
  minValue: "0",
  maxValue: "220",
  majorTicks: ['0', '20', '40', '60', '80', '100', '120', '140', '160', '180', '200', '220'],
  minorTicks: '5',
  strokeTicks: true,
  highlights: [
      { "from": 0, "to": 50, "color": "rgba(255,0,0,.25)" },
      /* { "from": 50, "to": 100, "color": "rgba(255,255,0,.15)" },
      { "from": 100, "to": 150, "color": "rgba(255,30,0,.25)" },
      { "from": 150, "to": 200, "color": "rgba(255,0,225,.25)" },
       */{ "from": 160, "to": 220, "color": "rgba(255,0,0,.75)" }
  ],
  colorPlate: "transparent",
  colorMajorTicks: "#f5f5f5",
  colorMinorTicks: "#ddd",
  colorTitle: "#fff",
  colorUnits: "#fff",
  colorNumbers: "#fff",
  borders: false,
  borderShadowWidth: '0',
  needleType: "arrow",
  needleWidth: "2",
  needleCircleSize: "7",
  needleCircleOuter: true,
  needleCircleInner: false,
  colorNeedle: "rgba(255,0,0,.75)",
  colorNeedleShadowDown: "#333",
  barWidth: 2,
  colorBarProgress: "rgba(255,0,0,.75)",
  colorBar: "rgba(255,0,0,.5)",
  fontValue: "TimeBomb",
  fontNumbers: "TimeBomb",
  /* fontTitle: "TimeBomb",
  fontUnits: "TimeBomb", */
  /* valueBoxBorderRadius: "0",*/
  colorValueBoxRect: "transparent",
  colorValueBoxRectEnd: "transparent",
  colorValueBoxBackground: "transparent",
  colorValueText: "#fff",
  colorValueTextShadow: false,
  fontValueSize: 50,
  listeners: {
      value: function (value) {
          this.update({ units: parseInt(value, 10) + ' hPa' });
      }
  }

}).draw();

const leftBottomGauge = new RadialGauge({
  renderTo: 'circleGaugeLeftBottom',
  /* width: 200,
  height: 200, */
  units: "kN*m",
  title: "Delay 1000",
  value: "90",
  animateOnInit: "true",
  animatedValue: "true",
  animationRule: 'linear',
  animationDuration: 1000,
  minValue: "0",
  maxValue: "220",
  majorTicks: ['0', '20', '40', '60', '80', '100', '120', '140', '160', '180', '200', '220'],
  minorTicks: '5',
  strokeTicks: true,
  highlights: [
      { "from": 0, "to": 50, "color": "rgba(255,0,0,.25)" },
      /* { "from": 50, "to": 100, "color": "rgba(255,255,0,.15)" },
      { "from": 100, "to": 150, "color": "rgba(255,30,0,.25)" },
      { "from": 150, "to": 200, "color": "rgba(255,0,225,.25)" },
       */{ "from": 160, "to": 220, "color": "rgba(255,0,0,.75)" }
  ],
  colorPlate: "transparent",
  colorMajorTicks: "#f5f5f5",
  colorMinorTicks: "#ddd",
  colorTitle: "#fff",
  colorUnits: "#fff",
  colorNumbers: "#fff",
  borders: false,
  borderShadowWidth: '0',
  needleType: "arrow",
  needleWidth: "2",
  needleCircleSize: "7",
  needleCircleOuter: true,
  needleCircleInner: false,
  colorNeedle: "rgba(255,0,0,.75)",
  colorNeedleShadowDown: "#333",
  barWidth: 2,
  colorBarProgress: "rgba(255,0,0,.75)",
  colorBar: "rgba(255,0,0,.5)",
  fontValue: "TimeBomb",
  fontNumbers: "TimeBomb",
  /* fontTitle: "TimeBomb",
  fontUnits: "TimeBomb", */
  /* valueBoxBorderRadius: "0",*/
  colorValueBoxRect: "transparent",
  colorValueBoxRectEnd: "transparent",
  colorValueBoxBackground: "transparent",
  colorValueText: "#fff",
  colorValueTextShadow: false,
  fontValueSize: 50,
}).draw();

const centerGauge = new RadialGauge({
  renderTo: 'circleGaugeCenter',
  /* width: 200,
  height: 200, */
  units: "kN*m",
  title: "Delay 500",
  value: "220",
  animateOnInit: "true",
  animatedValue: "true",
  animationRule : 'linear',
  animationDuration: 500,
  minValue: "0",
  /* maxValue: "220", */
  /* majorTicks: ['0', '20', '40', '60', '80', '100', '120', '140', '160', '180', '200', '220'], */
  minorTicks: '5',
  strokeTicks: true,
  highlights: [
      { "from": 0, "to": 50, "color": "rgba(255,0,0,.25)" },
      { "from": 160, "to": 220, "color": "rgba(255,0,0,.75)" }
  ],
  colorPlate: "transparent",
  colorMajorTicks: "#f5f5f5",
  colorMinorTicks: "#ddd",
  colorTitle: "#fff",
  colorUnits: "#fff",
  colorNumbers: "#fff",
  borders: false,
  borderShadowWidth: '0',
  needleType: "arrow",
  needleWidth: "2",
  needleCircleSize: "7",
  needleCircleOuter: true,
  needleCircleInner: false,
  colorNeedle: "rgba(255,0,0,.75)",
  colorNeedleShadowDown: "#333",
  barWidth: 2,
  colorBarProgress: "rgba(255,255,255,.75)",
  colorBar: "rgba(255,255,255,.25)",
  fontValue: "TimeBomb",
  fontNumbers: "TimeBomb",
  /* fontTitle: "TimeBomb",
  fontUnits: "TimeBomb", */
  /* valueBoxBorderRadius: "0",*/
  colorValueBoxRect: "transparent",
  colorValueBoxRectEnd: "transparent",
  colorValueBoxBackground: "transparent",
  colorValueText: "#fff",
  fontValueSize: 50,
});

const rightTopGauge = new RadialGauge({
  renderTo: 'circleGaugeRightTop',
  /* width: 200,
  height: 200, */
  units: "kN*m",
  title: "Delay 1500",
  value: "90",
  animateOnInit: "true",
  animatedValue: "true",
  animationRule: 'linear',
  animationDuration: 1500,
  minValue: "0",
  maxValue: "220",
  majorTicks: ['0', '20', '40', '60', '80', '100', '120', '140', '160', '180', '200', '220'],
  minorTicks: '5',
  strokeTicks: true,
  highlights: [
      { "from": 0, "to": 50, "color": "rgba(255,0,0,.25)" },
      /* { "from": 50, "to": 100, "color": "rgba(255,255,0,.15)" },
      { "from": 100, "to": 150, "color": "rgba(255,30,0,.25)" },
      { "from": 150, "to": 200, "color": "rgba(255,0,225,.25)" },
       */{ "from": 160, "to": 220, "color": "rgba(255,0,0,.75)" }
  ],
  colorPlate: "transparent",
  colorMajorTicks: "#f5f5f5",
  colorMinorTicks: "#ddd",
  colorTitle: "#fff",
  colorUnits: "#fff",
  colorNumbers: "#fff",
  borders: false,
  borderShadowWidth: '0',
  needleType: "arrow",
  needleWidth: "2",
  needleCircleSize: "7",
  needleCircleOuter: true,
  needleCircleInner: false,
  colorNeedle: "rgba(255,0,0,.75)",
  colorNeedleShadowDown: "#333",
  barWidth: 2,
  colorBarProgress: "rgba(255,0,0,.75)",
  colorBar: "rgba(255,0,0,.5)",
  fontValue: "TimeBomb",
  fontNumbers: "TimeBomb",
  /* fontTitle: "TimeBomb",
  fontUnits: "TimeBomb", */
  /* valueBoxBorderRadius: "0",*/
  colorValueBoxRect: "transparent",
  colorValueBoxRectEnd: "transparent",
  colorValueBoxBackground: "transparent",
  colorValueText: "#fff",
  fontValueSize: 50,
}).draw();

const rightBottomGauge = new RadialGauge({
  renderTo: 'circleGaugeRightBottom',
  /* width: 200,
  height: 200, */
  units: "kN*m",
  title: "Delay 2000",
  /* value: "90", */
  animateOnInit: "true",
  animatedValue: "true",
  animationRule: 'linear',
  animationDuration: 2000,
  minValue: "0",
  /* maxValue: "220", */
  /* majorTicks: ['0', '600'], */
  minorTicks: '5',
  strokeTicks: true,
  highlights: [
      { "from": 0, "to": 50, "color": "rgba(255,0,0,.25)" },
      /* { "from": 50, "to": 100, "color": "rgba(255,255,0,.15)" },
      { "from": 100, "to": 150, "color": "rgba(255,30,0,.25)" },
      { "from": 150, "to": 200, "color": "rgba(255,0,225,.25)" },
       */{ "from": 160, "to": 220, "color": "rgba(255,0,0,.75)" }
  ],
  colorPlate: "transparent",
  colorMajorTicks: "#f5f5f5",
  colorMinorTicks: "#ddd",
  colorTitle: "#fff",
  colorUnits: "#fff",
  colorNumbers: "#fff",
  borders: false,
  borderShadowWidth: '0',
  needleType: "arrow",
  needleWidth: "2",
  needleCircleSize: "7",
  needleCircleOuter: true,
  needleCircleInner: false,
  colorNeedle: "rgba(255,0,0,.75)",
  colorNeedleShadowDown: "#333",
  barWidth: 2,
  colorBarProgress: "rgba(255,0,0,.75)",
  colorBar: "rgba(255,0,0,.5)",
  fontValue: "TimeBomb",
  fontNumbers: "TimeBomb",
  /* fontTitle: "TimeBomb",
  fontUnits: "TimeBomb", */
  /* valueBoxBorderRadius: "0",*/
  colorValueBoxRect: "transparent",
  colorValueBoxRectEnd: "transparent",
  colorValueBoxBackground: "transparent",
  colorValueText: "#fff",
  fontValueSize: 50,
});

export { leftTopGauge, leftBottomGauge, centerGauge, rightTopGauge, rightBottomGauge }