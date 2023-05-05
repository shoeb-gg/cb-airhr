import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DateTime } from 'luxon';

import { ApexOptions } from 'ng-apexcharts';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    public chartConversions: ApexOptions;
    now = DateTime.now();

    constructor(private http: HttpClient) {
        this.chartConversions = {
            chart: {
                animations: {
                    enabled: false,
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'area',
                sparkline: {
                    enabled: true,
                },
            },
            colors: ['#000000'],
            fill: {
                colors: ['#000000'],
                opacity: 0.1,
            },
            series: [
                {
                    name: 'Conversions',
                    data: [4412, 4345, 4541, 4677, 4322, 4123],
                },
            ],
            stroke: {
                curve: 'smooth',
            },
            tooltip: {
                followCursor: true,
                theme: 'dark',
            },
            xaxis: {
                type: 'category',
                categories: [
                    this.now.minus({ days: 47 }).toFormat('dd MMM') +
                        ' - ' +
                        this.now.minus({ days: 40 }).toFormat('dd MMM'),
                    this.now.minus({ days: 39 }).toFormat('dd MMM') +
                        ' - ' +
                        this.now.minus({ days: 32 }).toFormat('dd MMM'),
                    this.now.minus({ days: 31 }).toFormat('dd MMM') +
                        ' - ' +
                        this.now.minus({ days: 24 }).toFormat('dd MMM'),
                    this.now.minus({ days: 23 }).toFormat('dd MMM') +
                        ' - ' +
                        this.now.minus({ days: 16 }).toFormat('dd MMM'),
                    this.now.minus({ days: 15 }).toFormat('dd MMM') +
                        ' - ' +
                        this.now.minus({ days: 8 }).toFormat('dd MMM'),
                    this.now.minus({ days: 7 }).toFormat('dd MMM') +
                        ' - ' +
                        this.now.toFormat('dd MMM'),
                ],
            },
            yaxis: {
                labels: {
                    formatter: (val): string => val.toString(),
                },
            },
        };
    }

    getTotalEmployeesData() {
        return this.chartConversions;
    }
}
