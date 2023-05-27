import { Component, Input } from "@angular/core";
import { TodoInterface } from "../../types/todo.interface";

@Component({
    selector:"app-todo",
    templateUrl:"./todo.component.html"
})

export class TodoComponent{
 
    @Input('todo')
    todoProp!: TodoInterface;
}

//@Input - do przekazania danych do "dzieci" komponentu
//* chcemy pracować z inputami tak jak z propsami readonly
//propsy w reakcie służą do przekazywania danych z jednego komponentu do innego