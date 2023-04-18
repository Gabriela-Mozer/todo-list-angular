//ten komponent będzie służył renderowaniu todosów

import { Component } from "@angular/core";
import { map, Observable } from "rxjs";
import { TodosService } from "../../services/todos.service";
import { TodoInterface } from "../../types/todo.interface";
import { combineLatest } from 'rxjs';
import { FilterEnum } from "../../types/filter.enum";

@Component({
    selector:'main-todo',
    templateUrl:'./main.component.html'
})
export class  MainComponent{
 visibleTodos$!: Observable<TodoInterface[]>;

 constructor(private todosService: TodosService){
    this.visibleTodos$ = combineLatest(
        this.todosService.filter$,
        this.todosService.todos$
    ).pipe(
        map(([todos, filter]: [TodoInterface[], FilterEnum])=>{
        console.log('combine', todos, filter);
        return [];
    })
    );
 }
}

// metoda łącząca stremy w jednej zmiennej
//chcemy zrobić Observable z tablicy visibleTodos 