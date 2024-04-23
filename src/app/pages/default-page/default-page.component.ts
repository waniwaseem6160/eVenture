import { Component } from '@angular/core';
import { PageHeaderComponent } from "../../components/page-header/page-header.component";

@Component({
    selector: 'app-default-page',
    standalone: true,
    templateUrl: './default-page.component.html',
    styleUrl: './default-page.component.scss',
    imports: [PageHeaderComponent]
})
export class DefaultPageComponent {

}
