import { Component } from '@angular/core';

import {
    PageSettingsModel,
    SortSettingsModel,
} from '@syncfusion/ej2-angular-grids';

import {
    PageService,
    SortService,
    FilterService,
} from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.scss'],
    providers: [PageService, SortService, FilterService],
})
export class CandidateListComponent {
    public pageSettings: PageSettingsModel = { pageSize: 10 };
    public sortSettings: SortSettingsModel = {
        columns: [{ field: 'name', direction: 'Ascending' }],
    };

    public candidatesList: any[] = [
        {
            name: 'Shakib Al-Hasan',
            contact: 'Cuebites',
        },
        {
            name: 'Mattie Blooman',
            contact: 'BJIT',
        },
        {
            name: 'Peter Steele',
            contact: 'Cuebites',
        },
        {
            name: 'Shakib Al-Hasan',
            contact: 'Cuebites',
        },
        {
            name: 'Mattie Blooman',
            contact: 'BJIT',
        },
        {
            name: 'Peter Steele',
            contact: 'Cuebites',
        },
        {
            name: 'Shakib Al-Hasan',
            contact: 'Cuebites',
        },
        {
            name: 'Mattie Blooman',
            contact: 'BJIT',
        },
        {
            name: 'Peter Steele',
            contact: 'Cuebites',
        },
        {
            name: 'Shakib Al-Hasan',
            contact: 'Cuebites',
        },
        {
            name: 'Mattie Blooman',
            contact: 'BJIT',
        },
        {
            name: 'Peter Steele',
            contact: 'Cuebites',
        },
    ];
}
