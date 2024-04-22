import { Component } from "@angular/core";
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskItemComponent } from "./components/task-item/task-item.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";
import { AboutComponent } from "./components/about/about.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    HeaderComponent,
    TasksComponent,
    TaskItemComponent,
    FontAwesomeModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    AboutComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "Task Tracker";
}
