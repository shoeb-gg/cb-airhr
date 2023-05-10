import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-tab1',
    templateUrl: './tab1.component.html',
    styleUrls: ['./tab1.component.scss'],
})
export class Tab1Component {
    @Output() nextTabEvent = new EventEmitter<boolean>();

    gotoNextTab() {
        this.nextTabEvent.emit(true);
    }
}
