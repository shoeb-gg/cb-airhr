import { Component } from '@angular/core';

import { DateRange } from '@angular/material/datepicker';

import moment from 'moment';

@Component({
    selector: 'app-tab4',
    templateUrl: './tab4.component.html',
    styleUrls: ['./tab4.component.scss'],
})
export class Tab4Component {
    selectedDateRange: DateRange<Date>;
    public startDate: string = null;
    public endDate: string = null;

    _onSelectedChange(date: Date): void {
        if (
            this.selectedDateRange &&
            this.selectedDateRange.start &&
            date > this.selectedDateRange.start &&
            !this.selectedDateRange.end
        ) {
            this.selectedDateRange = new DateRange(
                this.selectedDateRange.start,
                date
            );
        } else {
            this.selectedDateRange = new DateRange(date, null);
        }

        this.startDate = moment(this.selectedDateRange.start).format(
            'Do MMMM, YYYY'
        );
        this.endDate = moment(this.selectedDateRange.end).format(
            'Do MMMM, YYYY'
        );
    }
}
