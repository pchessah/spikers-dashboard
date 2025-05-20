import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CenterInformationPanelComponent } from "../../components/center-information-panel/center-information-panel.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [TranslateModule, CenterInformationPanelComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

}
