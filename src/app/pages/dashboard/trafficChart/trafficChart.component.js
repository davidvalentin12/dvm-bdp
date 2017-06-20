"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Chart = require("chart.js");
var TrafficChart = (function () {
    function TrafficChart(trafficChartService) {
        this.trafficChartService = trafficChartService;
        this.doughnutData = trafficChartService.getData();
    }
    TrafficChart.prototype.ngAfterViewInit = function () {
        this._loadDoughnutCharts();
    };
    TrafficChart.prototype._loadDoughnutCharts = function () {
        var el = jQuery('.chart-area').get(0);
        new Chart(el.getContext('2d')).Doughnut(this.doughnutData, {
            segmentShowStroke: false,
            percentageInnerCutout: 64,
            responsive: true
        });
    };
    return TrafficChart;
}());
TrafficChart = __decorate([
    core_1.Component({
        selector: 'traffic-chart',
        templateUrl: './trafficChart.html',
        styleUrls: ['./trafficChart.scss']
    })
    // TODO: move chart.js to it's own component
], TrafficChart);
exports.TrafficChart = TrafficChart;
