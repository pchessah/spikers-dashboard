import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CenterInformationPanelComponent } from "../../components/center-information-panel/center-information-panel.component";
import { RightInformationPanelComponent } from "../../components/right-information-panel/right-information-panel.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [TranslateModule, CenterInformationPanelComponent, RightInformationPanelComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
