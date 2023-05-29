import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    PageSettingsModel,
    SelectionSettingsModel,
} from '@syncfusion/ej2-angular-grids';
import {
    PageService,
    SortService,
    FilterService,
} from '@syncfusion/ej2-angular-treegrid';
import { ToolbarService } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.scss'],
    providers: [PageService, SortService, FilterService, ToolbarService],
})
export class CandidateListComponent {
    constructor(private router: Router) {}

    public pageSettings: PageSettingsModel = { pageSize: 10 };
    customAttributes = { class: 'customcss' };
    public selectionOptions: SelectionSettingsModel = {
        persistSelection: true,
    };

    public toolbar = [
        {
            text: 'Edit',
            tooltipText: 'Edit Selected Site',
            id: 'edit',
            align: 'left',
        },
        {
            text: 'Delete',
            tooltipText: 'Delete Selected Site',
            id: 'delete',
            align: 'left',
        },
        {
            text: 'Export',
            tooltipText: 'Export Selected Site',
            id: 'download',
            align: 'right',
            prefixIcon: 'e-download',
        },
    ];

    public selectedCandidate: string;

    public candidatesList: any[] = [
        {
            name: 'Shakib Al-Hasan',
            jobTitle: 'Full Stack Developer',
            experience: '03 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Mattie Blooman',
            jobTitle: 'Marketing Manager',
            experience: '05 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Peter Steele',
            jobTitle: 'Human Resource Manager',
            experience: '01 year',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Jim Morrison',
            jobTitle: 'Customer Relation',
            experience: '02 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Shakib Al-Hasan',
            jobTitle: 'Full Stack Developer',
            experience: '03 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Mattie Blooman',
            jobTitle: 'Marketing Manager',
            experience: '05 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Peter Steele',
            jobTitle: 'Human Resource Manager',
            experience: '01 year',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Jim Morrison',
            jobTitle: 'Customer Relation',
            experience: '02 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Shakib Al-Hasan',
            jobTitle: 'Full Stack Developer',
            experience: '03 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Mattie Blooman',
            jobTitle: 'Marketing Manager',
            experience: '05 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Peter Steele',
            jobTitle: 'Human Resource Manager',
            experience: '01 year',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Jim Morrison',
            jobTitle: 'Customer Relation',
            experience: '02 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Shakib Al-Hasan',
            jobTitle: 'Full Stack Developer',
            experience: '03 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Mattie Blooman',
            jobTitle: 'Marketing Manager',
            experience: '05 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Peter Steele',
            jobTitle: 'Human Resource Manager',
            experience: '01 year',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Jim Morrison',
            jobTitle: 'Customer Relation',
            experience: '02 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Shakib Al-Hasan',
            jobTitle: 'Full Stack Developer',
            experience: '03 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Mattie Blooman',
            jobTitle: 'Marketing Manager',
            experience: '05 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Peter Steele',
            jobTitle: 'Human Resource Manager',
            experience: '01 year',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Jim Morrison',
            jobTitle: 'Customer Relation',
            experience: '02 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Shakib Al-Hasan',
            jobTitle: 'Full Stack Developer',
            experience: '03 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Mattie Blooman',
            jobTitle: 'Marketing Manager',
            experience: '05 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Peter Steele',
            jobTitle: 'Human Resource Manager',
            experience: '01 year',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
        {
            name: 'Jim Morrison',
            jobTitle: 'Customer Relation',
            experience: '02 years',
            applyDate: new Date().toLocaleDateString('en-us', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
            status: 'Hired',
        },
    ];

    rowSelected(event) {
        this.selectedCandidate = event.data.name;

        if (event.target.getAttribute('aria-colindex') == 2) {
            this.router.navigateByUrl('employee/details');
        } else if (
            event.target.parentNode.parentNode.getAttribute('aria-colindex') ==
            2
        ) {
            this.router.navigateByUrl('employee/details');
        }
    }

    checkBoxChanged(event) {
        // if (event.target.classList.contains('e-checkselectall')) {
        //     if (event.checked) {
        //         this.deliveries.forEach((delivery) => {
        //             this.selectedDeliveries.push(delivery.id);
        //         });
        //     } else {
        //         if (!event.checked) {
        //             this.selectedDeliveries = [];
        //         }
        //     }
        // }

        console.log(event);
    }
}
