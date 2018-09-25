import {NgModule} from '@angular/core';
import {SurveyComponent} from './component/survey.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forFeature('survey', {}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forFeature([])
  ],
  declarations: [SurveyComponent],
  exports: [SurveyComponent]
})
export class SurveyModule {
}
