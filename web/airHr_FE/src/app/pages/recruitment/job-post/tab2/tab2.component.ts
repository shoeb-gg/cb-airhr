import { Component, EventEmitter, Output } from '@angular/core';

import { DashboardService } from 'app/pages/dashboard.service';

import { ApexOptions } from 'ng-apexcharts';

@Component({
    selector: 'app-tab2',
    templateUrl: './tab2.component.html',
    styleUrls: ['./tab2.component.scss'],
})
export class Tab2Component {
    @Output() nextTabEvent = new EventEmitter<boolean>();
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

    gotoNextTab() {
        this.nextTabEvent.emit(true);
    }
}
