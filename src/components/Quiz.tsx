"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { QuizQuestion, QuizAnswer, QuizResult } from "@/types";
import { getRandomQuizQuestions, trafficSigns } from "@/lib/trafficSigns";

interface QuizProps {
  onQuizComplete?: (result: QuizResult) => void;
  questionCount?: number;
}

export function Quiz({ onQuizComplete, questionCount = 5 }: QuizProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());

  useEffect(() => {
    initializeQuiz();
  }, []);

  const initializeQuiz = () => {
    const quizQuestions = getRandomQuizQuestions(questionCount);
    setQuestions(quizQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setQuizStarted(false);
    setQuestionStartTime(Date.now());
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setQuestionStartTime(Date.now());
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const timeSpent = Date.now() - questionStartTime;
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    const answer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      isCorrect,
      timeSpent
    };

    const newAnswers = [...selectedAnswers, answer];
    setSelectedAnswers(newAnswers);

    // Move to next question or show results
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setQuestionStartTime(Date.now());
    } else {
      // Quiz completed
      const correctAnswers = newAnswers.filter(a => a.isCorrect).length;
      const score = Math.round((correctAnswers / questions.length) * 100);
      
      const result: QuizResult = {
        score,
        totalQuestions: questions.length,
        answeredQuestions: newAnswers,
        completedAt: new Date()
      };

      // Save to localStorage
      const existingResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
      existingResults.push(result);
      localStorage.setItem('quizResults', JSON.stringify(existingResults));

      setShowResults(true);
      onQuizComplete?.(result);
    }
  };

  const restartQuiz = () => {
    initializeQuiz();
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentSign = currentQuestion ? trafficSigns.find(sign => sign.id === currentQuestion.signId) : null;
  const progress = ((currentQuestionIndex + (showResults ? 1 : 0)) / questions.length) * 100;

  if (questions.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <p className="text-gray-600">Loading quiz questions...</p>
        </CardContent>
      </Card>
    );
  }

  if (!quizStarted) {
    return (
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Ready for the Quiz?</CardTitle>
          <CardDescription>
            Test your knowledge of Pakistan traffic signs
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">{questions.length}</div>
              <div className="text-sm text-gray-600">Questions</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">~5</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">Mixed</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>
          <Button onClick={startQuiz} size="lg" className="px-8">
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    const correctAnswers = selectedAnswers.filter(a => a.isCorrect).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    const avgTime = selectedAnswers.reduce((sum, answer) => sum + answer.timeSpent, 0) / selectedAnswers.length / 1000;

    return (
      <div className="space-y-6">
        <Card className={`${score >= 80 ? 'border-green-500 bg-green-50' : score >= 60 ? 'border-yellow-500 bg-yellow-50' : 'border-red-500 bg-red-50'}`}>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">
              Quiz Complete! 
              <span className="ml-2">
                {score >= 80 ? '🎉' : score >= 60 ? '👍' : '📚'}
              </span>
            </CardTitle>
            <CardDescription className="text-lg">
              Your Score: <span className="font-bold text-xl">{score}%</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {correctAnswers}/{questions.length}
                </div>
                <div className="text-sm text-gray-600">Correct Answers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {avgTime.toFixed(1)}s
                </div>
                <div className="text-sm text-gray-600">Avg. Time per Question</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  <Badge 
                    variant={score >= 80 ? 'default' : score >= 60 ? 'secondary' : 'destructive'}
                    className="text-lg px-3 py-1"
                  >
                    {score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : 'Needs Practice'}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600">Performance</div>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <Button onClick={restartQuiz}>
                Take Another Quiz
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/categories'}>
                Study More Signs
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Results */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {questions.map((question, index) => {
                const answer = selectedAnswers[index];
                const sign = trafficSigns.find(s => s.id === question.signId);
                const isCorrect = answer.isCorrect;

                return (
                  <div 
                    key={question.id} 
                    className={`p-4 rounded-lg border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        {sign && (
                          <img
                            src={sign.imageUrl}
                            alt={sign.name}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={isCorrect ? 'default' : 'destructive'}>
                            {isCorrect ? 'Correct' : 'Incorrect'}
                          </Badge>
                          <span className="text-sm text-gray-600">
                            {(answer.timeSpent / 1000).toFixed(1)}s
                          </span>
                        </div>
                        <p className="font-medium text-gray-900 mb-2">
                          {question.question}
                        </p>
                        <div className="text-sm text-gray-700">
                          <p>Your answer: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>{question.options[answer.selectedAnswer]}</span></p>
                          {!isCorrect && (
                            <p>Correct answer: <span className="text-green-600">{question.options[question.correctAnswer]}</span></p>
                          )}
                          <p className="mt-1 text-gray-600">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      {/* Question */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sign Image */}
          {currentSign && (
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={currentSign.imageUrl}
                  alt={currentSign.name}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik05NiA2NFYxMjhNNjQgOTZIMTI4IiBzdHJva2U9IiM5QjlCOUIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=';
                  }}
                />
              </div>
            </div>
          )}

          {/* Answer Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="p-4 h-auto text-left justify-start hover:bg-green-50 hover:border-green-300"
                onClick={() => handleAnswerSelect(index)}
              >
                <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-700 text-sm flex items-center justify-center mr-3 flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}