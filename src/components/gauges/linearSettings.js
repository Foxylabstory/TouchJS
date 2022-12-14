const linearParametres = {
  // BoxBorderRadius: 0,
  // textShadow: 'false',
  valueInt: 1,
  valueDec: 1,
  width: 125,
  height: 260,
  minValue: 0,
  maxValue: 250,
  units: "Уровень, л/с",
  barWidth: 13,
  valueBox: true,
  borderRadius: 0,
  barBeginCircle: false,
  colorBarProgress: "rgba(255,255,255,.75)",
  colorBar: "rgba(255,255,255,.25)",
  strokeTicks: true,
  majorTicks: ['0', '50', '100', '150', '200', '250'],
  minorTicks: '2',
  highlights: [
    { "from": 0, "to": 25, "color": "red" },
    { "from": 200, "to": 250, "color": "red" }
  ],
  colorPlate: "transparent",
  colorMajorTicks: "#f5f5f5",
  colorMinorTicks: "#ddd",
  colorTitle: "#fff",
  colorUnits: "#fff",
  colorNumbers: "#fff",
  tickSide: 'right',
  numberSide: 'right',
  needleSide: 'left',
  animationRules: 'linear',
  animatedValue: true,
  animationDuration: 1000,
  animation: true,
  fontNumbersSize: 26,
  fontTitleSize: 26,
  fontUnitsSize: 26,
  fontValueSize: 36,
  fontValue: "TimeBomb",
  fontNumbers: "TimeBomb",
  glow: true,
  colorValueBoxRect: "transparent",
  colorValueBoxRectEnd: "transparent",
  colorValueBoxBackground: "transparent",
  colorValueText: "#fff",
};

export { linearParametres };
