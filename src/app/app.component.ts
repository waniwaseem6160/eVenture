import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from "./components/page-header/page-header.component";
import { DefaultPageComponent } from "./pages/default-page/default-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PageHeaderComponent, DefaultPageComponent]
})
export class AppComponent {
  title = 'eVenture';
}
