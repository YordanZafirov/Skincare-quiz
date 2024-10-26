export interface Quiz {
  id: number;
  question: string;
  options: string[];
  key: string;
}

export interface QuizAnswer {
  hairType: string;
  washFrequency: string;
  desiredBenefit: string;
  hairIssue: string;
  hairColor: string;
}
