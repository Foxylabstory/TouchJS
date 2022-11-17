const circleParametres = {
  valueInt: 1,
  valueDec: 1,
  units: "units",
  title: "title",
  animateOnInit: "true",
  animatedValue: "true",
  animationRule: 'linear',
  animationDuration: 500,
  minValue: 0,
  maxValue: 100,
  majorTicks: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
  minorTicks: '5',
  strokeTicks: true,
  highlights: [
    { "from": 0, "to": 10, "color": "rgba(255,0,0,.75)" },
    { "from": 90, "to": 100, "color": "rgba(255,0,0,.75)" }
  ],
  colorPlate: "transparent",
  colorMajorTicks: "#f5f5f5",
  colorMinorTicks: "#ddd",
  colorTitle: "#fff",
  colorUnits: "#fff",
  colorNumbers: "#fff",
  // borders: false,
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
  colorValueBoxRect: "transparent",
  colorValueBoxRectEnd: "transparent",
  colorValueBoxBackground: "transparent",
  colorValueText: "#fff",
  fontValueSize: 50,
  /* listeners: {
    value: function (value) {
      this.update({ units: parseInt(value, 10) + ' hPa' });
    }
  } */
};

export { circleParametres }