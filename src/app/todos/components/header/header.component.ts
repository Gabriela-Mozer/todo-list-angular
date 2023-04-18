import { Component } from "@angular/core";
import { TodosService } from "../../services/todos.service";


@Component({
    selector:'header-todo',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    text : string ='';

constructor(private todoService: TodosService){

}
   changeText(event: Event){
    const target = event.target as HTMLInputElement
    this.text = target.value;
   }
   addTodo():void{
    this.todoService.addTodo(this.text);
    this.text = ''; // to jest po to aby tekst w inpucie znikał po wciśnięciu enter
   }
}