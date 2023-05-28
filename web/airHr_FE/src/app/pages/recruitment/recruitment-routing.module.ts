import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecruitmentComponent } from './recruitment.component';
import { JobPostComponent } from './job-post/job-post.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { CandidateDetailsComponent } from './onboarding/candidate-details/candidate-details.component';
import { JobProgressComponent } from './onboarding/job-progress/job-progress.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'job-post' },
    {
        path: 'job-post',
        component: RecruitmentComponent,
    },
    {
        path: 'new-job',
        component: JobPostComponent,
    },
    {
        path: 'onboarding',
        component: OnboardingComponent,
    },
    {
        path: 'onboarding/job-id',
        component: JobProgressComponent,
    },
    {
        path: 'onboarding/job-id/candidate',
        component: CandidateDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecruitmentRoutingModule {}
