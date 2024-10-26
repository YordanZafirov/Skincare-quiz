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

export interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  currentAnswer: string;
}
