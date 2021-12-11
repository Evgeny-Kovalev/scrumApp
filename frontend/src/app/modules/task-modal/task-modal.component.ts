import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskModalService } from './task-modal.service';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit, OnDestroy {

  faEdit = faEdit
  faTrash = faTrash

  task: Task|null = null
  taskModalSub: Subscription = new Subscription()

  constructor(
    public taskModalService: TaskModalService,
  ) { }
  
  ngOnInit(): void {

    this.taskModalSub = this.taskModalService.getTask().subscribe((task) => {
      this.task= task
    })
  }
  
  closeModal() {
    this.taskModalService.hideTaskModal()
  }
  
  ngOnDestroy(): void {
    this.taskModalSub.unsubscribe()
  }
}
