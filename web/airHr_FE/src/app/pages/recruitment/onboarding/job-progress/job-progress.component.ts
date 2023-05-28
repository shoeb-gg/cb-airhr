import { Component } from '@angular/core';

@Component({
    selector: 'app-job-progress',
    templateUrl: './job-progress.component.html',
    styleUrls: ['./job-progress.component.scss'],
})
export class JobProgressComponent {
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
}
