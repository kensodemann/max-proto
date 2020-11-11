import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopToolbarModule } from './desktop-toolbar/desktop-toolbar.module';
import { MobileToolbarModule } from './mobile-toolbar/mobile-toolbar.module';

@NgModule({
  imports: [CommonModule, DesktopToolbarModule, MobileToolbarModule],
  exports: [DesktopToolbarModule, MobileToolbarModule],
})
export class SharedModule {}
