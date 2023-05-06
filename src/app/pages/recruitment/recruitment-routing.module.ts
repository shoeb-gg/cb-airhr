import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecruitmentComponent } from './recruitment.component';
import { JobPostComponent } from './job-post/job-post.component';

const routes: Routes = [
    {
        path: '',
        component: RecruitmentComponent,
    },
    {
        path: 'job-post',
        component: JobPostComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecruitmentRoutingModule {}
