import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AnnouncementComponent } from './announcement/announcement.component';

import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [DashboardComponent, AnnouncementComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatMenuModule,
        MatIconModule,
        NgApexchartsModule,
        MatSelectModule,
        SharedModule,
    ],
})
export class DashboardModule {}
