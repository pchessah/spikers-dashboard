import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-examples',
  imports: [TranslateModule],
  templateUrl: './examples.component.html',
  styleUrl: './examples.component.scss'
})
export class ExamplesComponent {


  constructor(private readonly _translate: TranslateService) {
    this._translate.addLangs(['sw', 'en']);
    this._translate.setDefaultLang('en');
    this._translate.use('en');
  }

  useLanguage(language: string): void {
    this._translate.use(language);
  }

}
