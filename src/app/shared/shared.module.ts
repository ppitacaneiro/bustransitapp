import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, SpinnerComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SpinnerComponent],
})
export class SharedModule {}
