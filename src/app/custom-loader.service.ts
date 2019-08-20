import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomLoader implements TranslateLoader {
  private value = new Subject<string>();

  getTranslation() {
    return this.value.asObservable().pipe(
      map(v => ({ key: v })),
      take(1)
    );
  }

  publishValue(value: string) {
    this.value.next(value);
  }
}
