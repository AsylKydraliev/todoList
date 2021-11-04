import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() text: string = '';
  @Output() delete = new EventEmitter;


  OnDeleteClick() {
    this.delete.emit()
  }
}
