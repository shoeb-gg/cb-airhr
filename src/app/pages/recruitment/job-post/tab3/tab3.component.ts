import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-tab3',
    templateUrl: './tab3.component.html',
    styleUrls: ['./tab3.component.scss'],
})
export class Tab3Component {
    @Output() nextTabEvent = new EventEmitter<boolean>();

    public jobPostChannels: any[] = [
        {
            icon: 'assets/images/facebook.svg',
            channelName: 'Facebook',
            expectedReach: '3.3k',
            avgCost: '390.99',
            enabled: true,
        },
        {
            icon: 'assets/images/linkedin.svg',
            channelName: 'Linkedin',
            expectedReach: '12k',
            avgCost: '23.50',
            enabled: false,
        },
        {
            icon: 'assets/images/bdjobs.svg',

            channelName: 'Bdjobs',
            expectedReach: '4.8k',
            avgCost: '788.00',
            enabled: true,
        },
        {
            icon: 'assets/images/gmail.svg',
            channelName: 'Mail',
            expectedReach: '1.5k',
            avgCost: '613.65',
            enabled: false,
        },
    ];

    gotoNextTab() {
        this.nextTabEvent.emit(true);
    }
}
