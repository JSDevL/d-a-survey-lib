import {NgModule} from '@angular/core';
import {SurveyComponent} from './component/survey.component';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {SurveyState} from './ngrx/SurveyState';
import {questionsToAnswerReducer} from './ngrx/reducer/questionsToAnswerReducer';
import {AppliableAction} from './ngrx/action/AppliableAction';
import {TranslatePipe} from './pipe/translate.pipe';
import {localeReducer} from './ngrx/reducer/localeReducer';
import {questionsAnsweredReducer} from './ngrx/reducer/questionsAnsweredReducer';

@NgModule({
  imports: [
    StoreModule.forFeature('survey', {
      questionsToAnswer: questionsToAnswerReducer,
      questionsAnswered: questionsAnsweredReducer,
      locale: localeReducer
    } as ActionReducerMap<SurveyState, AppliableAction<any>>),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forFeature([])
  ],
  declarations: [SurveyComponent, TranslatePipe],
  exports: [SurveyComponent]
})
export class SurveyModule {
}
