import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BasicCardComponent } from './basic-card/basic-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AnnouncementComponent } from './announcement/announcement.component';
import { RecentComponent } from './recent/recent.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
    declarations: [DashboardComponent, BasicCardComponent, AnnouncementComponent, RecentComponent, UpcomingComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatMenuModule,
        MatIconModule,
        NgApexchartsModule,
        MatSelectModule,
    ],
})
export class DashboardModule {}
