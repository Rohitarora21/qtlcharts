"use strict";

// Generated by CoffeeScript 2.5.1
// ipleiotropy: tool for exploring pleitropy for two trais
// Karl W Broman
HTMLWidgets.widget({
  name: "ipleiotropy",
  type: "output",
  initialize: function initialize(widgetdiv, width, height) {
    return d3.select(widgetdiv).append("svg").attr("width", width).attr("height", height).attr("class", "qtlcharts");
  },
  renderValue: function renderValue(widgetdiv, x) {
    var chartOpts, ref, ref1, ref2, svg, widgetid;
    svg = d3.select(widgetdiv).select("svg"); // clear svg and remove tool tips

    svg.selectAll("*").remove();
    widgetid = d3.select(widgetdiv).attr('id');
    d3.selectAll("g.d3panels-tooltip." + widgetid).remove();
    chartOpts = (ref = x.chartOpts) != null ? ref : [];
    chartOpts.width = (ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? ref1 : svg.attr("width");
    chartOpts.height = (ref2 = chartOpts != null ? chartOpts.height : void 0) != null ? ref2 : svg.attr("height");
    svg.attr("width", chartOpts.width);
    svg.attr("height", chartOpts.height);
    return ipleiotropy(widgetdiv, x.scanone_data, x.pxg_data, x.chartOpts);
  },
  resize: function resize(widgetdiv, width, height) {
    return d3.select(widgetdiv).select("svg").attr("width", width).attr("height", height);
  }
});