import { ConfirmComponent } from './confirm.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        ConfirmComponent,
    ],
    imports: [
      CommonModule,
    ],
    exports: [
        ConfirmComponent,
    ],
})
  export class ConfirmModule { }