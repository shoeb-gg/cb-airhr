import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    PageSettingsModel,
    SelectionSettingsModel,
    SortSettingsModel,
} from '@syncfusion/ej2-angular-grids';

import { ToolbarService } from '@syncfusion/ej2-angular-treegrid';

import {
    PageService,
    SortService,
    FilterService,
} from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss'],
    providers: [PageService, SortService, FilterService, ToolbarService],
})
export class EmployeeComponent {
    constructor(private router: Router) {}
    public pageSettings: PageSettingsModel = { pageSize: 10 };
    public sortSettings: SortSettingsModel = {
        columns: [{ field: 'name', direction: 'Ascending' }],
    };
    public selectionOptions: SelectionSettingsModel = {
        persistSelection: true,
    };
    customAttributes = { class: 'customcss' };

    public selectedEmployee: string;

    public employeeList: any[] = [
        {
            name: 'Shakib Al-Hasan',
            id: Math.ceil(Math.random() * 10000),
            department: 'QA',
            shift: 'Morning',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'SQA Engineer',
            status: 'Full-Time',
        },
        {
            name: 'Mattie Blooman',
            id: Math.ceil(Math.random() * 10000),
            department: 'Support',
            shift: 'Evening',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'System Support Engineer',
            status: 'Part-time',
        },
        {
            name: 'Peter Steele',
            id: Math.ceil(Math.random() * 10000),
            department: 'IT',
            shift: 'Night',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'Full Stack Developer',
            status: 'Contract',
        },
        {
            name: 'Elon Musk',
            id: Math.ceil(Math.random() * 10000),
            department: 'Management',
            shift: 'Morning',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'CEO',
            status: 'Contract',
        },
        {
            name: 'Shakib Al-Hasan',
            id: Math.ceil(Math.random() * 10000),
            department: 'QA',
            shift: 'Morning',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'SQA Engineer',
            status: 'Part-time',
        },
        {
            name: 'Mattie Blooman',
            id: Math.ceil(Math.random() * 10000),
            department: 'Support',
            shift: 'Evening',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'System Support Engineer',
            status: 'Part-time',
        },
        {
            name: 'Peter Steele',
            id: Math.ceil(Math.random() * 10000),
            department: 'IT',
            shift: 'Night',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'Full Stack Developer',
            status: 'Contract',
        },
        {
            name: 'Elon Musk',
            id: Math.ceil(Math.random() * 10000),
            department: 'Management',
            shift: 'Morning',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'CEO',
            status: 'Part-time',
        },
        {
            name: 'Shakib Al-Hasan',
            id: Math.ceil(Math.random() * 10000),
            department: 'QA',
            shift: 'Morning',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'SQA Engineer',
            status: 'Full-Time',
        },
        {
            name: 'Mattie Blooman',
            id: Math.ceil(Math.random() * 10000),
            department: 'Support',
            shift: 'Evening',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'System Support Engineer',
            status: 'Full-Time',
        },
        {
            name: 'Peter Steele',
            id: Math.ceil(Math.random() * 10000),
            department: 'IT',
            shift: 'Night',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'Full Stack Developer',
            status: 'Contract',
        },
        {
            name: 'Elon Musk',
            id: Math.ceil(Math.random() * 10000),
            department: 'Management',
            shift: 'Morning',
            joiningDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            role: 'CEO',
            status: 'Full-Time',
        },
    ];

    rowSelected(event) {
        this.selectedEmployee = event.data.name;

        if (event.target.getAttribute('aria-colindex') == 1) {
            this.router.navigateByUrl('employee/details');
        } else if (
            event.target.parentNode.parentNode.getAttribute('aria-colindex') ==
            1
        ) {
            this.router.navigateByUrl('employee/details');
        }
    }

    // toolbarClicked(args) {
    //     console.log(args.item.id);
    //     console.log(this.selectedEmployee);

    //     if (args.item.id === 'viewEmployee') {
    //         this.router.navigateByUrl('employee/details');
    //     }
    // }
}
