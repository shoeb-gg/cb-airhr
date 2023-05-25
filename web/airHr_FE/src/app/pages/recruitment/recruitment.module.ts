import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
    DefaultMatCalendarRangeStrategy,
    MAT_DATE_RANGE_SELECTION_STRATEGY,
    MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PdfViewerModule } from '@syncfusion/ej2-angular-pdfviewer';

import { SharedModule } from 'app/shared/shared.module';

import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { RecruitmentComponent } from './recruitment.component';
import { JobPostComponent } from './job-post/job-post.component';
import { Tab1Component } from './job-post/tab1/tab1.component';
import { Tab2Component } from './job-post/tab2/tab2.component';
import { Tab3Component } from './job-post/tab3/tab3.component';
import { Tab4Component } from './job-post/tab4/tab4.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { CandidateListComponent } from './onboarding/candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from './onboarding/candidate-details/candidate-details.component';

import { PdfViewerComponent } from './onboarding/candidate-details/pdf-viewer/pdf-viewer.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';

import {
    MAT_RIPPLE_GLOBAL_OPTIONS,
    RippleGlobalOptions,
} from '@angular/material/core';

const globalRippleConfig: RippleGlobalOptions = {
    disabled: true,
};

@NgModule({
    declarations: [
        RecruitmentComponent,
        JobPostComponent,
        Tab1Component,
        Tab2Component,
        Tab3Component,
        Tab4Component,
        OnboardingComponent,
        CandidateListComponent,
        CandidateDetailsComponent,
        PdfViewerComponent,
    ],
    imports: [
        CommonModule,
        NgApexchartsModule,
        RecruitmentRoutingModule,
        SharedModule,
        MatTabsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        NgxMatTimepickerModule,
        MatProgressBarModule,
        MatTableModule,
        MatPaginatorModule,
        PdfViewerModule,
        TreeGridModule
    ],
    providers: [
        {
            provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
            useClass: DefaultMatCalendarRangeStrategy,
        },
        { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
    ],
})
export class RecruitmentModule {}
