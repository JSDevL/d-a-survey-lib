import {Question} from '../model/question/Question';

export class SurveyState {
  questionsToAnswer: Question[];
  questionsAnswered: Question[];
  locale: string;
}
