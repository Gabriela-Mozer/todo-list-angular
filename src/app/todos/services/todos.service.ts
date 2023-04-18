import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FilterEnum } from "../types/filter.enum";
import { TodoInterface } from "../types/todo.interface";


@Injectable()
export class TodosService {
   todos$ = new BehaviorSubject<TodoInterface[]>([]);
   filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all)

   addTodo(text : string):void{
    const newTodo : TodoInterface={
        text,
        isCompleted: false,
        id: Math.random().toString(16),
    };
    const updatedTodos = [...this.todos$.getValue(), newTodo]; //to jest coś do backend
    this.todos$.next(updatedTodos);
   }
}


// BehaviorSubject -wymaga wartości początkowej i emituje bieżącą wartość
// do nowych subskrybentów
//ten servis- do przecowywania danych
//todos$ - stream 
//interface jest po to by uwzględnić typ danych pomiędzy komponentami aplikacji