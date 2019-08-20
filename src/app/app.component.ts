import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CustomLoader } from './custom-loader.service';

@Component({
  selector: 'app-root',
  template: `
    Key: "{{ 'key' | translate }}"
    <br />
    <label for="value">Value:</label>
    &nbsp;
    <input type="text" id="value" #v />
    &nbsp;
    <button type="button" (click)="publishValue(v.value)">Publish Value</button>
    &nbsp;
    <button type="button" (click)="reloadLang()">Reload Language</button>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  private sub1: Subscription;
  private sub2: Subscription;

  constructor(
    private translateService: TranslateService,
    private customLoader: CustomLoader
  ) {}

  ngOnInit() {
    this.translateService
      .use('foo')
      .subscribe(console.log.bind(null, `translateService.use('foo')`));
  }

  ngOnDestroy() {
    this.sub1 && this.sub1.unsubscribe();
    this.sub2 && this.sub2.unsubscribe();
  }

  publishValue(value: string) {
    this.customLoader.publishValue(value);
  }

  reloadLang() {
    this.sub2 && this.sub2.unsubscribe();
    this.sub2 = this.translateService
      .reloadLang('foo')
      .subscribe(console.log.bind(null, `translateService.reloadLang('foo')`));
  }
}
