import { Component } from '@angular/core';

@Component({
    selector: 'app-job-post',
    templateUrl: './job-post.component.html',
    styleUrls: ['./job-post.component.scss'],
})
export class JobPostComponent {
    public tabSelection: number = 0;

    setSelectedTab(flag: boolean): void {
        if (flag) {
            this.tabSelection++;
        }
    }

    setTabIndex(index: any) {
        this.tabSelection = index.index;
    }
}
