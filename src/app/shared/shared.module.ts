import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleToastComponent } from './simple-toast/simple-toast.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SimpleToastComponent,
  ],
  imports: [CommonModule, NgbModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SimpleToastComponent,
  ],
})
export class SharedModule {}
