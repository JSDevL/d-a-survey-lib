import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { filter, pluck, switchMap } from 'rxjs/operators';
import { AnswerQuestionAction } from '../action/question/AnswerQuestionAction';
import { SurveyState } from '../SurveyState';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { Question } from '../../model/question/Question';
import { PushQuestionToQuestionsAnsweredAction } from '../action/question/questionsAnswered/PushQuestionToQuestionsAnsweredAction';
import { PopQuestionFromQuestionsToAnswerAction } from '../action/question/questionToAnswer/PopQuestionFromQuestionsToAnswerAction';
import { RevertQuestionAction } from '../action/question/RevertQuestionAction';
import { PushQuestionToQuestionsToAnswerAction } from '../action/question/questionToAnswer/PushQuestionToQuestionsToAnswerAction';
import { PopQuestionFromQuestionsAnsweredAction } from '../action/question/questionsAnswered/PopQuestionFromQuestionsAnsweredAction';

@Injectable({
  providedIn: 'root'
})
export class QuestionsEffects {

  constructor(private store: Store<SurveyState>, private actions$: Actions) {
  }

  @Effect()
  answerQuestionAction$ = combineLatest(
    this.store.pipe(pluck('questionsToAnswer')),
    this.actions$.pipe(filter((a) => a instanceof AnswerQuestionAction))
  ).pipe(switchMap((r) => {
    const questionsToAnswer = [...r[0] as Question[]];

    if (questionsToAnswer.length) {
      return [
        new PushQuestionToQuestionsAnsweredAction(questionsToAnswer.pop()),
        new PopQuestionFromQuestionsToAnswerAction()
      ];
    }

    return [];
  }));

  @Effect()
  revertQuestionAction$ = combineLatest(
    this.store.pipe(pluck('questionsAnswered')),
    this.actions$.pipe(filter((a) => a instanceof RevertQuestionAction))
  ).pipe(switchMap((r) => {
    const questionsAnswered = [...r[0] as Question[]];

    if (questionsAnswered.length) {
      return [
        new PushQuestionToQuestionsToAnswerAction(questionsAnswered.pop()),
        new PopQuestionFromQuestionsAnsweredAction()
      ];
    }

    return [];
  }));
}
