import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';
import { ClassicLayoutModule } from 'app/layout/layouts/vertical/classic/classic.module';
import { SettingsModule } from 'app/layout/common/settings/settings.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [LayoutComponent],
    imports: [SharedModule, SettingsModule, ClassicLayoutModule],
    exports: [LayoutComponent, ClassicLayoutModule],
})
export class LayoutModule {}
