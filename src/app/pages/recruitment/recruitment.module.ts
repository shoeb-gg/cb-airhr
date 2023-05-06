import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from 'app/shared/shared.module';

import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { RecruitmentComponent } from './recruitment.component';
import { JobPostComponent } from './job-post/job-post.component';
import { Tab1Component } from './job-post/tab1/tab1.component';

@NgModule({
    declarations: [RecruitmentComponent, JobPostComponent, Tab1Component],
    imports: [
        CommonModule,
        RecruitmentRoutingModule,
        SharedModule,
        MatTabsModule,
        MatIconModule,
    ],
})
export class RecruitmentModule {}
