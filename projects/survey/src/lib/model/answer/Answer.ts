export abstract class Answer {
  private readonly payload: any;

  protected constructor(payload: any) {
    this.payload = payload;
  }
}
