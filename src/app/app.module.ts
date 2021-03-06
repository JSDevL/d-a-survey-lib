import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SurveyModule} from '../../projects/survey/src/lib/survey.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
