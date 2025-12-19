export interface Question {
  q: string;
  options: string[];
  answer: string;
  info: string;
}

export type AppState = 'WELCOME' | 'QUIZ' | 'COUPON';