import { Component } from '@angular/core';

import { DashboardService } from '../dashboard.service';

import { ApexOptions } from 'ng-apexcharts';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    public chartConversions: ApexOptions;

    constructor(private dashboardService: DashboardService) {
        this.initCharts();
    }

    initCharts() {
        this.initTotalEmployeesChart();
    }

    initTotalEmployeesChart() {
        this.chartConversions = this.dashboardService.getTotalEmployeesData();
    }
}
