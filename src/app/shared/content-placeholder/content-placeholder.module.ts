import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPlaceholderComponent } from './content-placeholder.component';

@NgModule({
  declarations: [ContentPlaceholderComponent],
  exports: [ContentPlaceholderComponent],
  imports: [CommonModule],
})
export class ContentPlaceholderModule {}
