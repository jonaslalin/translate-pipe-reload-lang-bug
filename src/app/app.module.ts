import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { CustomLoader } from './custom-loader.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useExisting: CustomLoader }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
