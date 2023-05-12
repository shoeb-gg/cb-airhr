import { Component } from '@angular/core';

@Component({
    selector: 'app-candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.scss'],
})
export class CandidateListComponent {
    displayedColumns: string[] = ['Name', 'Contact', 'Actions'];

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
    ];
}
