import { QuestionsEffects } from './QuestionsEffects';
import { cold } from 'jasmine-marbles';
import { AnswerQuestionAction } from '../action/question/AnswerQuestionAction';
import { InitQuestionsAction } from '../action/question/InitQuestionsAction';
import { Observable } from 'rxjs';
import { SurveyState } from '../SurveyState';
import { PushQuestionToQuestionsAnsweredAction } from '../action/question/questionsAnswered/PushQuestionToQuestionsAnsweredAction';
import { PopQuestionFromQuestionsToAnswerAction } from '../action/question/questionToAnswer/PopQuestionFromQuestionsToAnswerAction';
import { ChoiceQuestion } from '../../model/question/ChoiceQuestion';
import { RevertQuestionAction } from '../action/question/RevertQuestionAction';
import { PushQuestionToQuestionsToAnswerAction } from '../action/question/questionToAnswer/PushQuestionToQuestionsToAnswerAction';
import { PopQuestionFromQuestionsAnsweredAction } from '../action/question/questionsAnswered/PopQuestionFromQuestionsAnsweredAction';

describe('QuestionsEffects$', () => {
  describe('answerQuestionAction$', () => {
    it('should return empty observable when no questionsToAnswer', () => {
      const answerQuestionAction = new AnswerQuestionAction();
      const action$ = cold('--a--b--', { a: answerQuestionAction, b: new InitQuestionsAction([]) });

      const store$: Observable<SurveyState> = cold('-a', {
        a: {
          questionsToAnswer: [],
          questionsAnswered: []
        }
      });

      const effects = new QuestionsEffects(store$ as any, action$ as any);

      const expectation = cold('-------', { a: answerQuestionAction });

      expect(effects.answerQuestionAction$).toBeObservable(expectation);
    });

    it('should return observable of PushQuestionToQuestionsAnsweredAction and PopQuestionFromQuestionsToAnswerAction when ' +
      'questionsToAnswer', () => {
      const answerQuestionAction = new AnswerQuestionAction();
      const action$ = cold('--a--b--', { a: answerQuestionAction, b: new InitQuestionsAction([]) });

      const store$: Observable<SurveyState> = cold('-a', {
        a: {
          questionsToAnswer: [new ChoiceQuestion(null, null, null, null)],
          questionsAnswered: []
        }
      });

      const effects = new QuestionsEffects(store$ as any, action$ as any);

      const expectation = cold('--(ab)---', {
        a: new PushQuestionToQuestionsAnsweredAction(new ChoiceQuestion(null, null, null, null)),
        b: new PopQuestionFromQuestionsToAnswerAction()
      });

      expect(effects.answerQuestionAction$).toBeObservable(expectation);
    });
  });

  describe('revertQuestionAction$', () => {
    it('should return empty observable when no questionsAnswered', () => {
      const revertQuestionAction = new RevertQuestionAction();
      const action$ = cold('--a--b--', { a: revertQuestionAction, b: new InitQuestionsAction([]) });

      const store$: Observable<SurveyState> = cold('-a', {
        a: {
          questionsToAnswer: [new ChoiceQuestion(null, null, null, null)],
          questionsAnswered: []
        }
      });

      const effects = new QuestionsEffects(store$ as any, action$ as any);

      const expectation = cold('-----');

      expect(effects.revertQuestionAction$).toBeObservable(expectation);
    });

    it('should return observable of PushQuestionToQuestionsToAnswerAction and PopQuestionFromQuestionsAnsweredAction when' +
      'questionsAnswered', () => {
      const revertQuestionAction = new RevertQuestionAction();
      const action$ = cold('--a--b--', { a: revertQuestionAction, b: new InitQuestionsAction([]) });

      const store$: Observable<SurveyState> = cold('-a', {
        a: {
          questionsToAnswer: [],
          questionsAnswered: [new ChoiceQuestion(null, null, null, null)]
        }
      });

      const effects = new QuestionsEffects(store$ as any, action$ as any);

      const expectation = cold('--(ab)--', {
        a: new PushQuestionToQuestionsToAnswerAction(new ChoiceQuestion(null, null, null, null)),
        b: new PopQuestionFromQuestionsAnsweredAction()
      });

      expect(effects.revertQuestionAction$).toBeObservable(expectation);
    });
  });
});
