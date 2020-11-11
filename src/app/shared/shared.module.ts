import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopToolbarModule } from './desktop-toolbar/desktop-toolbar.module';
import { MobileToolbarModule } from './mobile-toolbar/mobile-toolbar.module';
import { ContentPlaceholderModule } from './content-placeholder/content-placeholder.module';

@NgModule({
  imports: [
    CommonModule,
    ContentPlaceholderModule,
    DesktopToolbarModule,
    MobileToolbarModule,
  ],
  exports: [
    ContentPlaceholderModule,
    DesktopToolbarModule,
    MobileToolbarModule,
  ],
})
export class SharedModule {}
