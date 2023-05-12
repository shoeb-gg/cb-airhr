import { Component } from '@angular/core';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
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
