import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { NgApexchartsModule } from 'ng-apexcharts';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DetailTabsComponent } from './employee-details/detail-tabs/detail-tabs.component';

import {
    MAT_RIPPLE_GLOBAL_OPTIONS,
    RippleGlobalOptions,
} from '@angular/material/core';
import { AttendanceInfoTabComponent } from './employee-details/detail-tabs/attendance-info-tab/attendance-info-tab.component';
import { PayrollTabComponent } from './employee-details/detail-tabs/payroll-tab/payroll-tab.component';

const globalRippleConfig: RippleGlobalOptions = {
    disabled: true,
};

@NgModule({
    declarations: [
        EmployeeComponent,
        EmployeeDetailsComponent,
        DetailTabsComponent,
        AttendanceInfoTabComponent,
        PayrollTabComponent,
    ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        TreeGridModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatTabsModule,
        NgApexchartsModule,
    ],

    providers: [
        { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
    ],
})
export class EmployeeModule {}
