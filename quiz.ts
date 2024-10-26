import { Quiz } from "./static/types";

export const questions: Quiz[] = [
    {
      id: 1,
      question: "What's your hair type or texture?",
      options: ['Straight', 'Curly', 'Wavy', 'Fine'],
      key: 'hairType',
    },
    {
      id: 2,
      question: "How often do you wash your hair?",
      options: ['Daily', 'Every other day', 'Twice a week', 'Once a week', 'Once every two weeks'],
      key: 'washFrequency',
    },
    {
      id: 3,
      question: "What benefit do you look for in your hair products?",
      options: ['Anti-breakage', 'Hydration', 'Soothing dry scalp', 'Repairs the appearance of damaged hair', 'Volume', 'Curl and coil enhancing'],
      key: 'desiredBenefit',
    },
    {
      id: 4,
      question: "Is there anything troubling you about your hair?",
      options: ['Breakage', 'Frizz', 'Scalp dryness', 'Damage', 'Tangling'],
      key: 'hairIssue',
    },
    {
      id: 5,
      question: "What is your natural hair color(s) today?",
      options: ['Black', 'Brown', 'Blonde', 'Red/Orange', 'Silver/Grey'],
      key: 'hairColor',
    },
  ];