import { Component } from '@angular/core';

import { ApexOptions } from 'ng-apexcharts';

@Component({
    selector: 'app-candidate-details',
    templateUrl: './candidate-details.component.html',
    styleUrls: ['./candidate-details.component.scss'],
})
export class CandidateDetailsComponent {
    chartGender: ApexOptions;
    public tabSelection: number = 0;

    public totalScore: number = 62;

    constructor() {
        this.chartGender = {
            chart: {
                animations: {
                    speed: 400,
                    animateGradually: {
                        enabled: false,
                    },
                },
                fontFamily: 'inherit',
                foreColor: 'inherit',
                height: '100%',
                type: 'donut',
                sparkline: {
                    enabled: true,
                },
            },

            colors: ['#805AD5', '#DEDEDE'],
            labels: ['Match', 'Not-Matched'],
            plotOptions: {
                pie: {
                    customScale: 0.9,
                    expandOnClick: false,
                    donut: {
                        size: '70%',
                    },
                },
            },
            series: [62, 100 - 62],
            states: {
                hover: {
                    filter: {
                        type: 'none',
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                    },
                },
            },
        };
    }

    setSelectedTab(flag: boolean): void {
        if (flag) {
            this.tabSelection++;
        }
    }

    setTabIndex(index: any) {
        this.tabSelection = index.index;
    }
}
