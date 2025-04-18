import { Component } from '@angular/core';

@Component({
    selector: 'app-job-progress',
    templateUrl: './job-progress.component.html',
    styleUrls: ['./job-progress.component.scss'],
})
export class JobProgressComponent {
    public tabSelection: number = 0;

    public topPicks: any[] = [
        {
            name: 'Shakib Al-Hasan',
            place: 'Bangladesh',
            rating: '95',
        },
        {
            name: 'Mattie Blooman',
            place: 'Bangladesh',
            rating: '70',
        },
        {
            name: 'Peter Steele',
            place: 'United States',
            rating: '80',
        },
    ];

    setSelectedTab(flag: boolean): void {
        if (flag) {
            this.tabSelection++;
        }
    }

    setTabIndex(index: any) {
        this.tabSelection = index.index;
    }
}
