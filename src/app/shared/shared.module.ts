import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { RecentComponent } from './recent/recent.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { BasicCardComponent } from './basic-card/basic-card.component';

@NgModule({
    declarations: [RecentComponent, UpcomingComponent, BasicCardComponent],
    imports: [CommonModule, MatIconModule, MatSelectModule],
    exports: [
        CommonModule,
        RecentComponent,
        UpcomingComponent,
        BasicCardComponent,
    ],
})
export class SharedModule {}
