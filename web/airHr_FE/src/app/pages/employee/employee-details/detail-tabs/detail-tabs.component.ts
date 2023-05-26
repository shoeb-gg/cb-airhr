import { Component } from '@angular/core';

@Component({
    selector: 'app-detail-tabs',
    templateUrl: './detail-tabs.component.html',
    styleUrls: ['./detail-tabs.component.scss'],
})
export class DetailTabsComponent {
    public tabSelection: number = 2;

    setSelectedTab(flag: boolean): void {
        if (flag) {
            this.tabSelection++;
        }
    }

    setTabIndex(index: any) {
        this.tabSelection = index.index;
    }
}
