import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';

@NgModule({
  declarations: [HomeLayoutComponent],
  exports: [HomeLayoutComponent],
  imports: [CommonModule],
})
export class HomeLayoutModule {}
