import { TaskModalService } from './task-modal.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TaskModalComponent } from './task-modal.component';
@NgModule({
    declarations: [
      TaskModalComponent,
    ],
    imports: [
      AppRoutingModule,
      CommonModule,
      FontAwesomeModule
    ],
    exports: [
        TaskModalComponent
    ],
    providers: [
      TaskModalService
    ],
    bootstrap: [TaskModalComponent]
  })
  export class TaskModalModule { }