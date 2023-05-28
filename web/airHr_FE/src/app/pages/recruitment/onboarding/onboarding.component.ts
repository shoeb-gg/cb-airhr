import { Component } from '@angular/core';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
    public postedJobs: any[] = [
        {
            title: 'Hiring Product Designer',
            date: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            percent: 88,
            numberOfApplications: 120,
        },
        {
            title: 'Full Stack Developer',
            date: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            percent: 88,
            numberOfApplications: 120,
        },
        {
            title: 'Human Resource Management',
            date: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            percent: 88,
            numberOfApplications: 120,
        },
        {
            title: 'Senior Wordpress Developer',
            date: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            percent: 88,
            numberOfApplications: 120,
        },
        {
            title: 'SQA Engineer',
            date: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            percent: 88,
            numberOfApplications: 120,
        },
    ];

    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
