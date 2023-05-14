import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import {
    FuseNavigationService,
    FuseVerticalNavigationComponent,
} from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';

@Component({
    selector: 'classic-layout',
    templateUrl: './classic.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ClassicLayoutComponent implements OnInit, OnDestroy {
    isScreenSmall: boolean;
    navigation: Navigation;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService
    ) {
        this.navigation = {
            default: [
                {
                    id: 'main',
                    title: 'MAIN MENU',
                    type: 'group',
                    icon: 'heroicons_outline:document',
                    children: [
                        {
                            id: 'main.dashboard',
                            title: 'Dashboard',
                            type: 'basic',
                            icon: 'mat_solid:space_dashboard',
                            link: 'dashboard',
                        },
                        {
                            id: 'main.recruitment',
                            title: 'Recruitment',
                            type: 'collapsable',
                            icon: 'mat_solid:person_search',
                            link: 'recruitment',
                            children: [
                                {
                                    id: 'main.recruitment.jobPost',
                                    title: 'Job Post',
                                    type: 'basic',
                                    icon: 'mat_solid:work',
                                    link: 'recruitment/job-post',
                                },
                                {
                                    id: 'main.recruitment.onboarding',
                                    title: 'Onboarding',
                                    type: 'basic',
                                    icon: 'mat_solid:person_add_alt_1',
                                    link: 'recruitment/onboarding',
                                },
                            ],
                        },
                        {
                            id: 'main.performance',
                            title: 'Performance',
                            type: 'basic',
                            icon: 'mat_solid:speed',
                        },
                        {
                            id: 'main.employee',
                            title: 'Employee',
                            type: 'basic',
                            icon: 'mat_outline:badge',
                            link: 'employee',
                        },
                        {
                            id: 'main.department',
                            title: 'Department',
                            type: 'basic',
                            icon: 'mat_solid:groups',
                        },
                    ],
                },

                {
                    id: 'divider-1',
                    type: 'divider',
                },

                {
                    id: 'other',
                    title: 'OTHER',
                    type: 'group',
                    icon: 'heroicons_outline:document',
                    children: [
                        {
                            id: 'other.support',
                            title: 'Support',
                            type: 'basic',
                            icon: 'mat_solid:headset_mic',
                            link: '',
                        },
                        {
                            id: 'other.settings',
                            title: 'Settings',
                            type: 'basic',
                            icon: 'mat_solid:settings',
                            link: '',
                        },
                    ],
                },
            ],
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void {
        // Get the navigation
        const navigation =
            this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(
                name
            );

        if (navigation) {
            // Toggle the opened status
            navigation.toggle();
        }
    }
}
