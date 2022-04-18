import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeComponent } from './change/change.component';
import { DisplayComponent } from './display/display.component';

import { NgxsModule } from '@ngxs/store';
import { SimpleValueState } from './state/simple-value.state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, ChangeComponent, DisplayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([SimpleValueState], {
      developmentMode: !environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
