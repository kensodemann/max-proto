import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileToolbarComponent } from './mobile-toolbar.component';

@NgModule({
  declarations: [MobileToolbarComponent],
  exports: [MobileToolbarComponent],
  imports: [CommonModule],
})
export class MobileToolbarModule {}
