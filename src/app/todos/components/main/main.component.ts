//ten komponent będzie służył renderowaniu todosów

import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { TodoInterface } from '../../types/todo.interface';
import { combineLatest } from 'rxjs';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'main-todo',
  templateUrl: './main.component.html',
})
export class MainComponent {
  visibleTodos$!: Observable<TodoInterface[]>;
  noTodoClass$!: Observable<boolean>;
  isAllTodosSelected$: Observable<boolean>;
  editingId: string | null = null;

  constructor(private todosService: TodosService) {
    this.isAllTodosSelected$ = this.todosService.todos$.pipe(
      map((todos) => todos.every((todo) => todo.isCompleted))
    );

    this.noTodoClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );

    this.visibleTodos$ = combineLatest(
      this.todosService.filter$,
      this.todosService.todos$
    ).pipe(
      map(([filter, todos]: [FilterEnum, TodoInterface[]]) => {
        if (filter === FilterEnum.active) {
          return todos.filter((todo) => !todo.isCompleted);
        } else if (filter === FilterEnum.completed) {
          return todos.filter((todo) => todo.isCompleted);
        }
        return todos;
      })
    );
  }
  toggleAllTodos$(event: Event): void {
    const target = event.target as HTMLInputElement
   const isCompleted = target.checked;
   this.todosService.toggleAll(target.checked)
}

  setEditingId(editingId: string | null):void{
    this.editingId = editingId;
  }
}

// metoda łącząca streamy w jednej zmiennej
//chcemy zrobić Observable z tablicy visibleTodos
// noTodoClass$! - dodajemy wykrzyknik, żeby typ nie był null-em
//pipe() - Funkcja przyjmuje jako argumenty funkcje, które chcesz połączyć, i zwraca nową funkcję, która po wykonaniu uruchamia złożone funkcje w sekwencji.
// toggleAll - funkcja pochodząca z service
//setEditingId- funkcja, która pozwala odświeżyć wpisaną rzecz na listę