import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPlaceholderModule } from './content-placeholder/content-placeholder.module';
import { DesktopToolbarModule } from './desktop-toolbar/desktop-toolbar.module';
import { HomeLayoutModule } from './home-layout/home-layout.module';
import { MobileToolbarModule } from './mobile-toolbar/mobile-toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    ContentPlaceholderModule,
    DesktopToolbarModule,
    HomeLayoutModule,
    MobileToolbarModule,
  ],
  exports: [
    ContentPlaceholderModule,
    DesktopToolbarModule,
    HomeLayoutModule,
    MobileToolbarModule,
  ],
})
export class SharedModule {}
