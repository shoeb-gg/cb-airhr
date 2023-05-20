import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-basic-card',
    templateUrl: './basic-card.component.html',
    styleUrls: ['./basic-card.component.scss'],
})
export class BasicCardComponent {
    @Input() title: string;
    @Input() centerNumber: number;
    @Input() footer: string;
    @Input() coloredText: string;
    @Input() color: string;
}
