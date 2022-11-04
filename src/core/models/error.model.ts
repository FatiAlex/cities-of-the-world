export interface IErrorView {
  code: number | null;
  message: string;
}

export type ErrorTypes = Response | Error;

export class ErrorModel implements IErrorView {
  code: number | null;
  message: string;

  constructor() {
    this.code = null;
    this.message = '';
  }
}
