export interface TrafficSign {
  id: string;
  name: string;
  urduName?: string;
  description: string;
  significance: string;
  category: SignCategory;
  imageUrl: string;
  shape: SignShape;
  color: SignColor;
  keywords: string[];
}

export interface SignCategory {
  id: string;
  name: string;
  urduName?: string;
  description: string;
  color: string;
  icon: string;
}

export enum SignShape {
  CIRCLE = 'circle',
  TRIANGLE = 'triangle',
  SQUARE = 'square',
  RECTANGLE = 'rectangle',
  OCTAGON = 'octagon',
  DIAMOND = 'diamond'
}

export enum SignColor {
  RED = 'red',
  BLUE = 'blue',
  YELLOW = 'yellow',
  GREEN = 'green',
  WHITE = 'white',
  ORANGE = 'orange',
  BLACK = 'black'
}

export interface QuizQuestion {
  id: string;
  signId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  answeredQuestions: QuizAnswer[];
  completedAt: Date;
  categoryId?: string;
}

export interface QuizAnswer {
  questionId: string;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

export interface UserProgress {
  totalQuizzesTaken: number;
  averageScore: number;
  categoriesCompleted: string[];
  lastQuizDate: Date;
  bestScore: number;
}

export interface SearchFilters {
  category?: string;
  shape?: SignShape;
  color?: SignColor;
  query?: string;
}