import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopToolbarModule } from './desktop-toolbar/desktop-toolbar.module';

@NgModule({
  imports: [CommonModule, DesktopToolbarModule],
  exports: [DesktopToolbarModule],
})
export class SharedModule {}
