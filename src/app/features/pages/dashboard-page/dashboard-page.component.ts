import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard-page',
  imports: [TranslateModule],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

  constructor(private readonly _translate: TranslateService) {
    this._translate.addLangs(['sw', 'en']);
    this._translate.setDefaultLang('en');
    this._translate.use('en');
  }

  useLanguage(language: string): void {
    this._translate.use(language);
  }
}
