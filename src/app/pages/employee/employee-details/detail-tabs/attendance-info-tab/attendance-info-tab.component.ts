import { Component } from '@angular/core';

import { ApexOptions } from 'ng-apexcharts';

import {
    PageSettingsModel,
    SelectionSettingsModel,
    SortSettingsModel,
} from '@syncfusion/ej2-angular-grids';

import { ToolbarService } from '@syncfusion/ej2-angular-treegrid';

import {
    PageService,
    SortService,
    FilterService,
} from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-attendance-info-tab',
    templateUrl: './attendance-info-tab.component.html',
    styleUrls: ['./attendance-info-tab.component.scss'],
    providers: [PageService, SortService, FilterService, ToolbarService],
})
export class AttendanceInfoTabComponent {
    public pageSettings: PageSettingsModel = { pageSize: 10 };
    public sortSettings: SortSettingsModel = {
        columns: [{ field: 'name', direction: 'Ascending' }],
    };
    public selectionOptions: SelectionSettingsModel = {
        persistSelection: true,
    };

    chartGithubIssues = {
        chart: {
            fontFamily: 'inherit',
            foreColor: 'inherit',
            height: '100%',
            type: 'line',
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        colors: ['#64748B', '#94A3B8'],
        dataLabels: {
            enabled: true,
            enabledOnSeries: [0],
            background: {
                borderWidth: 0,
            },
        },
        grid: {
            borderColor: 'var(--fuse-border)',
        },
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        legend: {
            show: false,
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },
        series: {
            'this-week': [
                {
                    name: 'New issues',
                    type: 'line',
                    data: [42, 28, 43, 34, 20, 25, 22],
                },
                {
                    name: 'Closed issues',
                    type: 'column',
                    data: [11, 10, 8, 11, 8, 10, 17],
                },
            ],
            'last-week': [
                {
                    name: 'New issues',
                    type: 'line',
                    data: [37, 32, 39, 27, 18, 24, 20],
                },
                {
                    name: 'Closed issues',
                    type: 'column',
                    data: [9, 8, 10, 12, 7, 11, 15],
                },
            ],
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 0.75,
                },
            },
        },
        stroke: {
            width: [3, 0],
        },
        tooltip: {
            followCursor: true,
            theme: 'dark',
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                color: 'var(--fuse-border)',
            },
            labels: {
                style: {
                    colors: 'var(--fuse-text-secondary)',
                },
            },
            tooltip: {
                enabled: false,
            },
        },
        yaxis: {
            labels: {
                offsetX: -16,
                style: {
                    colors: 'var(--fuse-text-secondary)',
                },
            },
        },
    };

    public employeeList: any[] = [
        {
            name: 'Shakib Al-Hasan',
            id: Math.ceil(Math.random() * 10000),
            department: 'QA',
            shift: 'Morning',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'SQA Engineer',
            status: 'Full-Time',
        },
        {
            name: 'Mattie Blooman',
            id: Math.ceil(Math.random() * 10000),
            department: 'Support',
            shift: 'Evening',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'System Support Engineer',
            status: 'Part-time',
        },
        {
            name: 'Peter Steele',
            id: Math.ceil(Math.random() * 10000),
            department: 'IT',
            shift: 'Night',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'Full Stack Developer',
            status: 'Contract',
        },
        {
            name: 'Elon Musk',
            id: Math.ceil(Math.random() * 10000),
            department: 'Management',
            shift: 'Morning',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'CEO',
            status: 'Contract',
        },
    ];
}
