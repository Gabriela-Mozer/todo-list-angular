import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnChanges {
  @Input('todo') todoProp!: TodoInterface;
  //todosService: any;
  @Input('isEditing') isEditingProps!: boolean;
  @Output('setEditingId') setEdingtIdEvent: EventEmitter<string | null> =
    new EventEmitter();
  //@ViewChild('view',{static: false}) view!: ElementRef; -> to jest opcja jakbym chciała zrobić removeTodo tutaj a nie w service
  @ViewChild('textInput') textInput!: ElementRef;
  isMobile: boolean;
  editingText: string ='';

  constructor(private todosService: TodosService) {
    this.isMobile = false;
    //this.editingText = '';
  }
  
  ngOnInit(): void {
    this.editingText = this.todoProp.text;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if (changes['isEditingProps'].currentValue){
      setTimeout(()=>{
        this.textInput.nativeElement.focus()
      },0)
      
    }
  }

  setTodoInEditMode(): void {
    console.log('setTodoInEdi');
    this.setEdingtIdEvent.emit(this.todoProp.id);
  }

  removeTodo(): void {
    //this.view.nativeElement.remove()
    console.log('remove');
    this.todosService.removeTodo(this.todoProp.id);
  }

  toggleTodo(): void {
    console.log('toggleTodo');
    this.todosService.toggleTodo(this.todoProp.text)
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
    console.log('changeText');
  }

  changeTodo(): void {
    console.log('changeTodo', this.editingText);
    this.todosService.changeTodo(this.todoProp.id, this.editingText)
    this.setEdingtIdEvent.emit(null); //zamknięcie editing mode
  }
}

//@Input - do przekazania danych do "dzieci" komponentu
//* chcemy pracować z inputami tak jak z propsami readonly
//propsy w reakcie służą do przekazywania danych z jednego komponentu do innego
//@Output - do przekazywania danych do 'dzieci'
