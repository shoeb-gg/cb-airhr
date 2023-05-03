import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    // Redirect empty path to '/dashboards/project'
    { path: '', pathMatch: 'full', redirectTo: 'dashboards/project' },

    // Admin routes
    {
        path: '',
        canMatch: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            // Dashboards
            {
                path: 'dashboards',
                children: [
                    {
                        path: 'project',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/project/project.module'
                            ).then((m) => m.ProjectModule),
                    },
                    // {
                    //     path: 'analytics',
                    //     loadChildren: () =>
                    //         import(
                    //             'app/modules/admin/dashboards/analytics/analytics.module'
                    //         ).then((m) => m.AnalyticsModule),
                    // },
                    // {
                    //     path: 'finance',
                    //     loadChildren: () =>
                    //         import(
                    //             'app/modules/admin/dashboards/finance/finance.module'
                    //         ).then((m) => m.FinanceModule),
                    // },
                    // {
                    //     path: 'crypto',
                    //     loadChildren: () =>
                    //         import(
                    //             'app/modules/admin/dashboards/crypto/crypto.module'
                    //         ).then((m) => m.CryptoModule),
                    // },
                ],
            },

            {
                path: '404-not-found',
                pathMatch: 'full',
                loadChildren: () =>
                    import(
                        'app/modules/admin/pages/error/error-404/error-404.module'
                    ).then((m) => m.Error404Module),
            },
            { path: '**', redirectTo: '404-not-found' },
        ],
    },
];
