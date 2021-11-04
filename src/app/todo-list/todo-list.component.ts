import {Component} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  taskValue = '';
  tasks: string[] = [];

  onInputValue(event: Event) {
    const target = <HTMLInputElement>event.target;
    this.taskValue = target.value;
  }

  onAddTask (event: Event) {
    event.preventDefault();
    this.tasks.push(this.taskValue);
  }

  onDeleteTask(i: number) {
    this.tasks.splice(i,1);
  }
}
