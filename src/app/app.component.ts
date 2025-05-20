import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutContainerComponent } from './elements/components/layout-container/layout-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
