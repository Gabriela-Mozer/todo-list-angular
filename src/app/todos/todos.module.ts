import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from "./components/main/main.component";
import { TodosComponent } from "./components/todos.component";
import { TodosService } from "./services/todos.service";
 const routes : Routes =[
    {path: '',
    component: TodosComponent},
    {path: '',
    component: HeaderComponent}
 ]
@NgModule({
    declarations:[TodosComponent, HeaderComponent,MainComponent],
    imports: [RouterModule.forChild(routes)],
    providers: [TodosService]
})

export class TodosModule{

}