import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopToolbarComponent } from './desktop-toolbar.component';

@NgModule({
  declarations: [DesktopToolbarComponent],
  exports: [DesktopToolbarComponent],
  imports: [CommonModule],
})
export class DesktopToolbarModule {}
