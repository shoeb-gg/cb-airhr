import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('app/pages/dashboard/dashboard.module').then(
                (m) => m.DashboardModule
            ),
    },
    {
        path: 'recruitment',
        loadChildren: () =>
            import('app/pages/recruitment/recruitment.module').then(
                (m) => m.RecruitmentModule
            ),
    },
    {
        path: 'employee',
        loadChildren: () =>
            import('app/pages/employee/employee.module').then(
                (m) => m.EmployeeModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
