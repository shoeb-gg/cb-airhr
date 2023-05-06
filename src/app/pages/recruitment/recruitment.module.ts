import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';

import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { RecruitmentComponent } from './recruitment.component';

@NgModule({
    declarations: [RecruitmentComponent],
    imports: [CommonModule, RecruitmentRoutingModule, SharedModule],
})
export class RecruitmentModule {}
