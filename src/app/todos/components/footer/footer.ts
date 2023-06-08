import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})

export class Footer{
 noTodoClass$: Observable<boolean>;
 activeCount$: Observable<number>;
 itemsLeftText$: Observable<string>;
 filter$: Observable<FilterEnum>;
 filterEnum = FilterEnum;


  constructor(private todosService: TodosService){

    this.activeCount$ = this.todosService.todos$.pipe(
      map((todos) => todos.filter(todo => !todo.isCompleted).length)
    );

    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item ${activeCount !== 1 ? 's' : ''} left`)
    );
    this.noTodoClass$ = this.todosService.todos$.pipe(
      map((todos) => todos.length === 0)
    );
    this.filter$ = this.todosService.filter$
  }
   changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    console.log('changeFilter')
    this.todosService.changeFilter(filterName)
   }
}


//ile znaków zostało
//żeby strona się nie przeładowywała
//${activeCount !== 1 ? 's' : ''}: This is a conditional expression that determines whether to include the letter 's' in the text. It checks if activeCount is not equal to 1. If activeCount is not 1, it includes the letter 's'; otherwise, it includes an empty string.