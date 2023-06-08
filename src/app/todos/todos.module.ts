import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { TodosComponent } from "./components/todos.component";
import { TodosService } from "./services/todos.service";
import { CommonModule } from "@angular/common";
import { TodoComponent } from "./components/todo/todo.component";
import { Footer } from "./components/footer/footer";

 const routes : Routes =[
    {path: '',
    component: TodosComponent},
    {path: '',
    component: HeaderComponent},
 ]
@NgModule({
    declarations:[TodosComponent, HeaderComponent,MainComponent, TodoComponent, Footer],
    imports: [RouterModule.forChild(routes),CommonModule ],
    providers: [TodosService]
})

export class TodosModule{

}