Chart.plugins.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      var ctx = chart.chart.ctx;

      var centerConfig = chart.config.options.elements.center;
      var fontSize = centerConfig.fontSize || '50';
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
      ctx.font = fontSize + "px " + fontStyle;

      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 0.7);

      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

      if (chart.config.options.rotation === Math.PI && chart.config.options.circumference === Math.PI) {
        centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 1.4);
      }
      ctx.font = "40px " + fontStyle;
      ctx.fillStyle = color;

      ctx.fillText(String(txt) + "m/s", centerX, centerY);
    }
  }
});

