"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { categories, trafficSigns } from "@/lib/trafficSigns";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  // Mock user progress data
  const userProgress = {
    totalQuizzesTaken: 12,
    averageScore: 78,
    categoriesCompleted: ['warning', 'regulatory'],
    bestScore: 95
  };

  const totalSigns = trafficSigns.length;
  const completedCategories = userProgress.categoriesCompleted.length;
  const progressPercentage = (completedCategories / categories.length) * 100;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Learn Pakistan Traffic Signs
        </h1>
        <h2 className="text-2xl text-gray-600 mb-4">
          پاکستان ٹریفک نشانات سیکھیں
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Master all traffic signs used in Pakistan with our interactive learning app. 
          Study signs by category, take quizzes, and track your progress to become 
          a safer and more informed driver.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="/categories">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Start Learning
            </Button>
          </Link>
          <Link href="/quiz">
            <Button size="lg" variant="outline">
              Take Quiz
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-green-600">
              {totalSigns}
            </CardTitle>
            <CardDescription>Total Signs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Comprehensive collection</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-blue-600">
              {categories.length}
            </CardTitle>
            <CardDescription>Categories</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Warning, Regulatory & More</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-purple-600">
              {userProgress.totalQuizzesTaken}
            </CardTitle>
            <CardDescription>Quizzes Taken</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Keep practicing!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-orange-600">
              {userProgress.bestScore}%
            </CardTitle>
            <CardDescription>Best Score</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Personal record</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Section */}
      <Card>
        <CardHeader>
          <CardTitle>Your Learning Progress</CardTitle>
          <CardDescription>
            Track your progress across different sign categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Progress</span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isCompleted = userProgress.categoriesCompleted.includes(category.id);
                return (
                  <Badge
                    key={category.id}
                    variant={isCompleted ? "default" : "secondary"}
                    className={isCompleted ? "bg-green-600" : ""}
                  >
                    {category.name}
                    {isCompleted && " ✓"}
                  </Badge>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Categories Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Traffic Sign Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const categorySignCount = trafficSigns.filter(
              (sign) => sign.category.id === category.id
            ).length;

            return (
              <Link key={category.id} href={`/categories/${category.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {category.urduName}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-3">
                      {category.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">
                        {categorySignCount} signs
                      </Badge>
                      <Button size="sm" variant="ghost">
                        Learn →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick Start Guide */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">How to Use This App</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
                1
              </div>
              <h3 className="font-semibold text-green-800 mb-1">Browse Categories</h3>
              <p className="text-green-700">
                Explore different types of traffic signs organized by category
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
                2
              </div>
              <h3 className="font-semibold text-green-800 mb-1">Study Signs</h3>
              <p className="text-green-700">
                Learn about each sign's meaning, significance, and proper response
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
                3
              </div>
              <h3 className="font-semibold text-green-800 mb-1">Take Quizzes</h3>
              <p className="text-green-700">
                Test your knowledge with interactive quizzes and track progress
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}